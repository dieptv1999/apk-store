import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {getDictionary} from "@/app/dictionaries";
import FeaturedCard from "@/components/FeaturedCard";
import Card from "@/components/Card";
import InfiniteList from "@/components/InfiniteList";
import ListCategory from "@/components/ListCategory";
import {notFound} from "next/navigation";
import {get} from "lodash";
import SearchInfiniteList from "@/components/SearchInfiniteList";

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

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">

      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className={'w-full'}>
          <SearchInfiniteList searchText={searchParams.id} dict={dict.category}/>
        </div>
        <div className={'text-black font-bold tracking-wide text-lg pt-4 md:pt-10'}>{dict.apk.category}</div>
        <ListCategory />
      </div>
    </main>
  )
}
