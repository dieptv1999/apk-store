'use client'

import Tag from "@/components/Tag";
import {useState} from "react";
import CardSmall from "@/components/CardSmall";

export default function ShortList({listApk}) {
  const [tab, setTab] = useState(0);
  const tabs = [
    'Top free',
    'Top paid',
    'Top grossing'
  ]

  return <div className={'flex flex-col space-y-4 w-full'}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{tabs[tab]}</div>
    <div className={'flex space-x-3'}>
      {tabs.map((e, index) => (
        <Tag key={index + 'stag'} selected={tab === index} onClick={() => {
          setTab(index)
        }}>{e}</Tag>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {listApk
        ? listApk.map((apk, index) => (
          <CardSmall {...apk} index={index + 1} key={index}/>
        ))
        : null}
    </div>
  </div>
}