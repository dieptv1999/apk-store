'use client'

import Tag from "@/components/Tag";
import {useCallback, useEffect, useState} from "react";
import CardSmall from "@/components/CardSmall";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";
import {el, ta} from "date-fns/locale";
import {get, throttle} from "lodash";

export default function SearchInfiniteList({searchText, dict}) {
  const [tab, setTab] = useState(0);
  const [listApk, setListApk] = useState([])
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const tabs = [
    'latest',
    'mostDownloaded',
    'highestRated'
  ]

  const fetchData = async () => {
    if (!searchText) return;
    setLoading(true)
    const res = await axios.get(BASE_URL + `/apk/search?u=${searchText}&page=${page}&size=9&s=${tabs[tab]}`)
    setLoading(false)
    if (page === 0) {
      setListApk(res.data)
    } else {
      setListApk([...listApk, ...res.data])
    }
  }


  useEffect(() => {
    throttle(fetchData, 400, {trailing: true})();
  }, [searchText, page, setLoading, tab])

  useEffect(() => {
    setPage(0)
  }, [tab])

  return <div className={'flex flex-col space-y-4 w-full'}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{get(dict, tabs[tab])} <span
      className={'text-primary cursor-pointer'}>{searchText}</span></div>
    <div className={'flex space-x-3'}>
      {tabs.map((e, index) => (
        <Tag key={index + 'stag'} selected={tab === index} onClick={() => {
          setTab(index)
        }}>{get(dict, e)}</Tag>
      ))}
    </div>
    {listApk && listApk.length > 0
      ? <div className="grid grid-cols-1 md:grid-cols-3 gap-2">

        {listApk.map((apk, index) => (
          <CardSmall {...apk} index={index + 1} key={index}/>
        ))}
      </div>
      : <div className={'text-center w-full py-8 text-gray2 text-xl'}>Không có kết quả tìm kiếm nào cho {searchText}</div>}
    {listApk && listApk.length > 0
      ? <div className={'flex justify-center'}>
      <button onClick={() => {
        if (loading) return;
        setPage(page + 1)
      }} className={'w-full btn btn-success text-white'}>Xem thêm
      </button>
    </div>
      : null}
  </div>
}