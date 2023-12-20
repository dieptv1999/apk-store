'use client'

import Tag from "@/components/Tag";
import {useCallback, useEffect, useState} from "react";
import CardSmall from "@/components/CardSmall";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";
import {el, ta} from "date-fns/locale";
import {get, throttle} from "lodash";

export default function InfiniteList({slug, dict}) {
  console.log(dict)
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
    if (!slug) return;
    setLoading(true)
    const res = await axios.post(BASE_URL + `/apk/category?slug=${slug}&page=${page}&size=9&sortBy=${tabs[tab]}`)
    setLoading(false)
    if (page === 0) {
      setListApk(res.data)
    } else {
      setListApk([...listApk, ...res.data])
    }
  }


  useEffect(() => {
    throttle(fetchData, 400, {trailing: true})();
  }, [slug, page, setLoading])

  useEffect(() => {
    setPage(0)
  }, [tab])

  return <div className={'flex flex-col space-y-4 w-full'}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{get(dict, tabs[tab])}</div>
    <div className={'flex space-x-3'}>
      {tabs.map((e, index) => (
        <Tag key={index + 'stag'} selected={tab === index} onClick={() => {
          setTab(index)
        }}>{get(dict, e)}</Tag>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {listApk
        ? listApk.map((apk, index) => (
          <CardSmall {...apk} index={index + 1} key={index}/>
        ))
        : null}
    </div>
    <div className={'flex justify-center'}>
      <button onClick={() => {
        if (loading) return;
        setPage(page + 1)
      }} className={'w-full btn btn-success text-white'}>Xem thêm
      </button>
    </div>
  </div>
}