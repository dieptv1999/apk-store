'use client'

import Card from "@/components/Card";
import Image from "next/image";
import {Icon} from "@iconify/react";

export default function CardSmall({className, index, image, title, category, star}) {
  return <Card className={className}>
    <div className={'flex space-x-4 items-center'}>
      {index && <span>{index}</span>}
      <div>
        <Image src={image} alt={'preview image'} width={64} height={64} placeholder={'blur'}
               blurDataURL={'/blur_image.jpg'} quality={100}/>
      </div>
      <div className={'flex flex-col'}>
        <span className={'font-semibold'}>{title}</span>
        <span className={'text-sm text-gray2'}>{category}</span>
        <span className={'text-sm text-gray2 inline-flex items-center space-x-1'}>
          <span>{star}</span>
          <Icon icon="solar:star-bold"
                color="#faad14"/>
        </span>
      </div>
    </div>
  </Card>
}