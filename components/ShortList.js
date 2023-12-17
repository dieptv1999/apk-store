'use client'

import Tag from "@/components/Tag";
import {useState} from "react";
import CardSmall from "@/components/CardSmall";

export default function ShortList() {
  const [tab, setTab] = useState(0);
  const tabs = [
    'Top free',
    'Top paid',
    'Top grossing'
  ]

  const listApk = [
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
    {
      image: 'https://play-lh.googleusercontent.com/MQJoaeelXSU1S7sTFUbaFBUuM6oq2BClfFC8QDBhasYdNOVUIw3mV01wEU0uBa8ELSQ=s64-rw',
      title: 'Daily Spins - Spin Link',
      category: 'Tools',
      star: 4
    },
  ]

  return <div className={'flex flex-col space-y-4 w-full'}>
    <div className={'text-black font-bold tracking-wide text-2xl'}>{tabs[tab]}</div>
    <div className={'flex space-x-3'}>
      {tabs.map((e, index) => (
        <Tag key={e} selected={tab === index} onClick={() => {
          setTab(index)
        }}>{e}</Tag>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-2">
      {listApk.map((apk, index) => (
        <CardSmall {...apk} index={index + 1}/>
      ))}
    </div>
  </div>
}