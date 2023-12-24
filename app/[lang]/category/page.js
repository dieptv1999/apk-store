import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {getDictionary} from "@/app/dictionaries";
import FeaturedCard from "@/components/FeaturedCard";
import Card from "@/components/Card";
import InfiniteList from "@/components/InfiniteList";
import ListCategory from "@/components/ListCategory";
import {notFound} from "next/navigation";
import {get} from "lodash";

export default async function Category({params: {lang}, searchParams}) {
  if (!searchParams.id) {
    notFound()
  }
  const dict = await getDictionary(lang) // en
  const resAds = await fetch(
    BASE_URL + `/apk/feed`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  const resFeatured = await fetch(
    BASE_URL + `/apk/featured?slug=${searchParams.id}`,
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
      <div className={'max-w-screen-xl w-full text-black font-bold tracking-wide text-2xl px-[10px]'}>Ứng dụng thuộc danh mục <span className={'text-primary cursor-pointer'}>{searchParams.id}</span></div>

      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {resFeatured
            ? resFeatured.splice(0, 3).map(e => (
              <FeaturedCard {...e}/>
            ))
            : null}
        </div>
        <div className={'w-full pt-4 md:pt-10'}>
          <InfiniteList slug={searchParams.id} dict={dict.category}/>
        </div>
        <div className={'text-black font-bold tracking-wide text-lg pt-4 md:pt-10'}>Categorise</div>
        <ListCategory />
      </div>
    </main>
  )
}
