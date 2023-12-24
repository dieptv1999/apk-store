'use client'
import {BASE_URL} from "@/utils/constant";
import useLocale from "@/hooks/useLocale";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function ListCategory() {
  const locale = useLocale()
  const [categories, setCategories] = useState([])

  const fetchData = async () => {
    const categories = await fetch(
      BASE_URL + `/apk/category/list`,
    ).then(d => d.json());

    setCategories(categories)
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (<div className={'flex flex-wrap gap-2'}>
    {
      categories.map(e => (
        <Link href={`/${locale}/category?id=${e.name}`} key={e.name}>
          <div className={'border border-primary rounded px-3 pt-2 pb-1 cursor-pointer'} key={e.id}>
            {e.name}
          </div>
        </Link>
      ))
    }
  </div>)
}