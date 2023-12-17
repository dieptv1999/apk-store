import Image from 'next/image'
import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import Card from "@/components/Card";
import ShortList from "@/components/ShortList";
import CardHorizontal from "@/components/CardHorizontal";
import ApkInfo from "@/components/ApkInfo";

export default async function ApkDetail() {
  const resAds = await fetch(
    BASE_URL + `/apk/feed`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-lg w-full px-[10px] flex flex-col space-y-4'}>
        <ApkInfo/>
      </div>
      <Card className={'max-w-screen-lg w-full'}>
        <Feed ads={resAds} delay={2000}/>
      </Card>
    </main>
  )
}
