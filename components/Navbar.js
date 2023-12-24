'use client'
import Image from "next/image";
import {useState, Fragment} from "react";
import {motion} from 'framer-motion'
import {Icon} from "@iconify/react";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";
import {Menu, Transition} from "@headlessui/react";
import {find} from "lodash/collection";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";

export default function Navbar({dict}) {
  const locale = useLocale()
  const router = useRouter()
  const {data: session} = useSession();
  const user = session?.user;
  const allIngredients = [
    {icon: "🍅", label: dict?.navbar.games, link: `/${locale}/store/games`},
    {icon: "🥬", label: dict?.navbar?.app, link: `/${locale}/store/app`},
  ];
  const [selectedTab, setSelectedTab] = useState(0);
  const [searching, setSearching] = useState(false);

  const langs = [
    {
      label: 'Tiếng Việt',
      key: 'vi',
      icon: <Icon icon="emojione-v1:flag-for-vietnam" fontSize={18}/>
    },
    {
      key: 'en',
      label: 'English',
      icon: <Icon icon="twemoji:flag-us-outlying-islands" fontSize={18}/>
    }
  ]

  return <div className={'nav bg-white z-50'}>
    <Link href={`/${locale}`}>
      <div className={'flex space-x-2 items-center h-[64px] ml-[28px] cursor-pointer'}>
        <Image src={'/apk-store-logo.png'} alt={'apps store logo'} width={40} height={40} quality={100}/>
        <div className={'text-2xl font-semibold text-gray2 mt-1 tracking-wide'}>Apk Store</div>
      </div>
    </Link>
    {!searching
      ? <ul>
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
      : null}
    <div className={'flex-1'}/>
    <div className={'flex items-center mr-[28px] space-x-4'}>
      {searching
        ? <div>
          <input type="text" autoFocus
                 placeholder={dict.navbar.search}
                 className="input input-md input-bordered w-full max-w-xs active:outline-none"
                 onBlur={() => setSearching(false)}
                 onKeyDown={(e) => {
                   if (e.key === 'Enter') {
                     router.push(`/${locale}/search?id=${e.target.value}`)
                   }
                 }}
          />
        </div> : <div className={'flex items-center cursor-pointer'} onClick={() => setSearching(true)}>
          <Icon icon="fluent:search-12-filled" color="#5f6368" fontSize={24}/>
        </div>}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center space-x-2 rounded-md bg-[#e3dedcA0] px-4 py-2 text-sm text-primary font-semibold focus:outline-none
          focus-visible:ring-2 focus-visible:ring-white/75">
            {find(langs, e => e.key === locale)?.icon}
            <span>{find(langs, e => e.key === locale)?.label}</span>
            <Icon icon="fluent:chevron-down-12-filled"/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {langs.map(e => (
                <Menu.Item key={e.label}>
                  {({active}) => (
                    <Link href={`/${e.key}`} locale={locale}>
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {e.icon}
                        <span className={'ml-1 font-semibold text-gray2'}>{e.label}</span>
                      </button>
                    </Link>
                  )}
                </Menu.Item>

              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      {user
        ? <div className={'flex items-center cursor-pointer'}>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center">
              {user.image
                ? <Image src={user.image} alt={'avatar'} width={36} height={36} className={'rounded-full'}/>
                : <Icon icon="mdi:account-circle" color="#5f6368" fontSize={36}/>}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-3 py-1 inline-flex items-center space-x-2" onClick={() => {
                  signOut()
                }}>
                  <Icon icon="line-md:logout" fontSize={20}/>
                  <span className={'text-gray2 font-semibold'}>Logout</span>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        : <Link href={`/${locale}/login`}>
          <div className={'inline-flex items-center space-x-2 cursor-pointer'}>
            <Icon icon="line-md:login" fontSize={20}/>
            <span className={'text-gray2 font-semibold'}>Login</span>
          </div>
        </Link>
      }
    </div>
  </div>
}