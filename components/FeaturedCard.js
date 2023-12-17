'use client'

import Card from "@/components/Card";
import Image from "next/image";
import {Icon} from "@iconify/react";
import utils from "@/utils";
import Link from "next/link";

export default function FeaturedCard({
                                       className,
                                       index,
                                       image,
                                       title,
                                       category,
                                       score,
                                       headerImage,
                                       icon,
                                       genre,
                                       genreId,
                                       appId
                                     }) {
  return (
    <Link href={`/apps/${appId}`}>
      <Card className={'flex flex-col space-y-3'} key={appId}>
        <div className={'relative w-full aspect-video'}>
          <Image src={headerImage} alt={'preview large image app'} fill className={'rounded-lg'}/>
        </div>
        <div className={'inline-flex space-x-3'}>
          <Image src={icon} alt={'icon app'} width={64} height={64} quality={90} className={'rounded-lg'}/>
          <div className={'flex flex-col'}>
            <span className={'font-semibold'}>{title}</span>
            <span className={'text-sm text-gray2'}>{genreId}</span>
            <span className={'text-sm text-gray2 inline-flex items-center space-x-1'}>
          <span>{score?.toFixed(1)}</span>
          <Icon icon="solar:star-bold"
                color="#faad14"/>
        </span>
          </div>
        </div>
      </Card>
    </Link>
  )
}