import Image from 'next/image'
import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import Card from "@/components/Card";
import ShortList from "@/components/ShortList";
import CardHorizontal from "@/components/CardHorizontal";
import FeaturedCard from "@/components/FeaturedCard";
import {getDictionary} from '@/app/dictionaries'
import ListCategory from "@/components/ListCategory";

export default async function Home({params: {lang}}) {
  const dict = await getDictionary(lang) // en
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

  const actionGames = await fetch(BASE_URL + "/apk/similar?page=0&size=9", {
    next: {revalidate: 1200},
    method: 'POST',
    body: JSON.stringify({
      genreId: 'Hành động',
    }),
  }).then(d => d.json())

  const actionApps = await fetch(BASE_URL + "/apk/similar?page=0&size=9", {
    next: {revalidate: 2400},
    method: 'POST',
    body: JSON.stringify({
      genreId: 'Hành động',
    }),
  }).then(d => d.json())

  const adventureApps = await fetch(BASE_URL + "/apk/similar?page=0&size=9", {
    next: {revalidate: 2400},
    method: 'POST',
    body: JSON.stringify({
      genreId: 'Phiêu lưu',
    }),
  }).then(d => d.json())

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className={'text-black font-bold tracking-wide text-2xl px-[10px]'}>{dict?.home?.hotGame}</div>
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
        <ShortList listApk={actionGames} dict={dict}/>
        <CardHorizontal title={dict?.home?.action} listApk={actionApps}/>

        <CardHorizontal title={dict?.home?.adventure} listApk={adventureApps}/>
        <div className={'text-black font-bold tracking-wide text-lg pt-4 md:pt-10'}>Categorise</div>
        <ListCategory />
      </div>
    </main>
  )
}
