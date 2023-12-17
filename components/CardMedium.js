'use client'

import Card from "@/components/Card";
import Image from "next/image";
import {Icon} from "@iconify/react";

export default function CardMedium({className, image, title, star}) {
  return <Card className={className}>
    <div className={'flex flex-col'}>
      <div className={'rounded-[40px] overflow-hidden'}>
        <Image src={image} alt={'preview image'} width={192} height={192} placeholder={'blur'}
               blurDataURL={'/blur_image.jpg'} quality={100}/>
      </div>
      <div className={'flex flex-col mt-3'}>
        <span className={'font-semibold text-base'}>{title}</span>
        <span className={'text-sm text-gray2 inline-flex items-center space-x-1'}>
          <span>{star}</span>
          <Icon icon="solar:star-bold"
                color="#faad14"/>
        </span>
      </div>
    </div>
  </Card>
}