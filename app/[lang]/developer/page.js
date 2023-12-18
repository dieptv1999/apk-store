'use client'
import Image from 'next/image'
import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import Card from "@/components/Card";
import ShortList from "@/components/ShortList";
import CardHorizontal from "@/components/CardHorizontal";
import ApkInfo from "@/components/ApkInfo";
import ApkMoreInfo from "@/components/ApkMoreInfo";
import axios from "axios";
import FeaturedCard from "@/components/FeaturedCard";
import {notFound, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {de} from "date-fns/locale";

export default function DeveloperDetail() {
  const searchParams = useSearchParams()
  const [developer, setDeveloper] = useState();
  const [feed, setFeed] = useState();

  if (!searchParams.get('id')) {
    notFound();
  }

  const fetchData = async () => {
    const res = await fetch(
      BASE_URL + `/apk/similar/develop`,
      {
        next: {revalidate: 1200},
        method: 'POST',
        body: JSON.stringify({
          developerId: searchParams.get('id'),
        })
      },
    ).then(d => d.json());

    if (!res) {
      notFound();
    }

    setDeveloper(res)

    const resAds = await fetch(
      BASE_URL + `/apk/feed`,
      {
        next: {revalidate: 180},
        method: 'GET',
      },
    ).then(d => d.json());

    setFeed(resAds)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className={'text-black font-bold tracking-wide text-2xl'}>{searchParams.get('id')}</div>
        {feed
          ? <Feed ads={feed}/>
          : null}
        <div className="grid grid-cols-3 gap-4 w-full">
          {developer
            ? developer.map(e => (
              <FeaturedCard {...e}/>
            ))
            : null}
        </div>
      </div>
    </main>
  )
}
