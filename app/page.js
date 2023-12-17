import Image from 'next/image'
import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import Card from "@/components/Card";
import ShortList from "@/components/ShortList";
import CardHorizontal from "@/components/CardHorizontal";
import FeaturedCard from "@/components/FeaturedCard";

export default async function Home() {
  const resAds = await fetch(
    BASE_URL + `/apk/feed`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  const resFeatured = await fetch(
    BASE_URL + `/apk/featured`,
    {
      next: {revalidate: 600},
      method: 'GET',
    },
  ).then(d => d.json());

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">\
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className={'text-black font-bold tracking-wide text-2xl px-[10px]'}>Trò chơi nổi bật</div>
        <div className="grid grid-cols-3 gap-4 w-full">
          {resFeatured
            ? resFeatured.splice(0, 3).map(e => (
              <FeaturedCard {...e}/>
            ))
            : null}
        </div>
      </div>
      <Card className={'max-w-screen-xl w-full'}>
        <Feed ads={resAds} delay={2000}/>
      </Card>
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <ShortList/>
        <CardHorizontal title={'Educational'}/>
      </div>
    </main>
  )
}
