import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {getDictionary} from "@/app/dictionaries";
import FeaturedCard from "@/components/FeaturedCard";
import Card from "@/components/Card";
import InfiniteList from "@/components/InfiniteList";
import ListCategory from "@/components/ListCategory";

export default async function AboutUs({params: {lang}}) {
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

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <Card className={'max-w-screen-xl w-full'}>
        <Feed ads={resAds} delay={2000}/>
      </Card>
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className="grid grid-cols-3 gap-4 w-full">
          {resFeatured
            ? resFeatured.splice(0, 3).map(e => (
              <FeaturedCard {...e}/>
            ))
            : null}
        </div>
        <div className={'w-full'}>
          <InfiniteList slug={'Phổ thông'} dict={dict.category}/>
        </div>
        <div className={'text-black font-bold tracking-wide text-lg'}>Categorise</div>
        <ListCategory />
      </div>
    </main>
  )
}
