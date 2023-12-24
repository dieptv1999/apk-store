import Image from 'next/image'
import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import Card from "@/components/Card";
import ShortList from "@/components/ShortList";
import CardHorizontal from "@/components/CardHorizontal";
import ApkInfo from "@/components/ApkInfo";
import ApkMoreInfo from "@/components/ApkMoreInfo";
import {getDictionary} from "@/app/dictionaries";

export async function generateMetadata(
  { params},
  parent
){
  const apkInfo = await fetch(
    BASE_URL + `/apk?appId=${params.appId}`,
    {
      next: {revalidate: 240},
      method: 'POST',
    },
  ).then(d => d.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: apkInfo?.title,
    openGraph: {
      images: [apkInfo?.headerImage, ...previousImages],
    },
  }
}

export default async function ApkDetail({params}) {
  const dict = await getDictionary(params.lang)
  const res = await fetch(
    BASE_URL + `/apk?appId=${params.appId}`,
    {
      next: {revalidate: 240},
      method: 'POST',
    },
  ).then(d => d.json());

  const resAds = await fetch(
    BASE_URL + `/apk/feed`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <ApkInfo apkInfo={res}/>
        <Feed ads={resAds} delay={2000}/>
        <ApkMoreInfo apkInfo={res} dict={dict}/>
      </div>
    </main>
  )
}
