import Image from 'next/image'
import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import Card from "@/components/Card";
import ShortList from "@/components/ShortList";
import CardHorizontal from "@/components/CardHorizontal";

export default async function Home() {
  const resAds = await fetch(
    BASE_URL + `/apk/feed`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <Card className={'max-w-screen-lg w-full'}>
        <Feed ads={resAds} delay={2000}/>
      </Card>
      <div className={'max-w-screen-lg w-full px-[10px] flex flex-col space-y-4'}>
        <ShortList/>
        <CardHorizontal title={'Educational'}/>
      </div>
    </main>
  )
}
