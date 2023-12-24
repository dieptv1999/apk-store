'use client'

import Tag from "@/components/Tag";
import {useState} from "react";
import CardSmall from "@/components/CardSmall";

export default function ShortList({listApk, dict}) {

  return <div className={'flex flex-col space-y-4 w-full'}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{dict.home.action}</div>
    <div className="grid grid-cols-3 gap-2">
      {listApk
        ? listApk.map((apk, index) => (
          <CardSmall {...apk} index={index + 1} key={index}/>
        ))
        : null}
    </div>
  </div>
}