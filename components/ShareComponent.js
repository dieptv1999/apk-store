'use client'

import {Icon} from "@iconify/react";

export default function ShareComponent() {
  return (
    <div className={'inline-flex space-x-3 h-[44px]'}>
      <div className={'p-1 rounded-full shadow-lg cursor-pointer bg-[#1877F2]'}>
        <Icon icon="line-md:facebook" color={'#fff'} fontSize={24}/>
      </div>
      <div className={'p-2 rounded-full bg-white shadow-lg cursor-pointer'}>
        <Icon icon="simple-icons:x" fontSize={20}/>
      </div>
      <div className={'p-2 rounded-full bg-white shadow-lg cursor-pointer'}>
        <Icon icon="logos:tiktok-icon" fontSize={21}/>
      </div>
    </div>
  )
}