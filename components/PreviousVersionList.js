'use client'

import CardDownloadInList from "@/components/CardDownloadInList";
import DownloadButton from "@/components/DownloadButton";
import {useState} from "react";
import useLocale from "@/hooks/useLocale";

export default function PreviousVersionList({resVersions, resApk, appId, dict}) {
  const locale = useLocale();
  const [showMore, setShowMore] = useState(resVersions && resVersions.length > 5 ? true : false)

  const data = showMore ? resVersions.splice(0, 5) : resVersions;

  return (
    <div className={'flex flex-col space-y-4 flex-1'}>
      <div className={'text-black font-bold tracking-wide text-2xl mb-2'}>Các phiên bản cũ</div>
      {data.map(e => (
        <div key={e.versionId} className={'flex justify-between items-center space-x-3'}>
          <CardDownloadInList
            {...resApk}
            key={resApk.appId}
            {...e}
            className={'flex-1 w-full'}
          />
          <DownloadButton
            link={e?.downloadLink}
            fielname={appId + e.version}
            className={'w-auto'}
            showLoading={false}
          />
        </div>
      ))}
      {showMore
        ? <button className={'btn btn-success text-white'}
                  onClick={() => setShowMore(false)}>{dict.category.showMore}</button>
        : null}
    </div>
  )
}