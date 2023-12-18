'use client'
import Image from "next/image";
import {useState} from "react";
import {motion} from 'framer-motion'
import {Icon} from "@iconify/react";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";

export default function Navbar({dict}) {
  const locale = useLocale()
  const allIngredients = [
    {icon: "🍅", label: dict?.navbar.games, link: `/${locale}/store/games`},
    {icon: "🥬", label: dict?.navbar?.app, link: `/${locale}/store/app`},
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  return <div className={'nav bg-white'}>
    <Link href={`/${locale}`}>
      <div className={'flex space-x-2 items-center h-[64px] ml-[28px] cursor-pointer'}>
        <Image src={'/apk-store-logo.png'} alt={'apps store logo'} width={40} height={40} quality={100}/>
        <div className={'text-2xl font-semibold text-gray2 mt-1 tracking-wide'}>Apk Store</div>
      </div>
    </Link>
    <ul>
      {allIngredients.map((item, index) => (
        <Link href={item.link} key={index}>
          <li
            className={`${index === selectedTab ? "selected" : ""} text-gray2 font-semibold`}
            onClick={() => setSelectedTab(index)}
          >
          <span
            className={`mt-1.5 w-full text-center whitespace-nowrap ${index === selectedTab ? 'text-primary' : ''}`}>{item.label}</span>
            {index === selectedTab ? (
              <motion.div className="underline" layoutId="underline"/>
            ) : null}
          </li>
        </Link>
      ))}
    </ul>
    <div className={'flex-1'}/>
    <div className={'flex items-center mr-[28px] space-x-4'}>
      <div className={'flex items-center'}>
        <Icon icon="fluent:search-12-filled" color="#5f6368" fontSize={24}/>
      </div>
      <div className={'flex items-center cursor-pointer'}>
        <Icon icon="mdi:account-circle" color="#5f6368" fontSize={36}/>
      </div>
    </div>
  </div>
}