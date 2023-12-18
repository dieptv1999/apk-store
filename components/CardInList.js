'use client'

import Card from "@/components/Card";
import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";

export default function CardInList({className, index, icon, title, genreId, score, key, appId}) {
  const locale = useLocale();
  return (
    <Link href={`/${locale}/apps/${appId}`}>
      <Card className={className} key={key}>
        <div className={'flex space-x-4 items-center'}>
          {index && <span>{index}</span>}
          <div>
            {icon ?
              <Image src={icon} alt={'preview image'} width={64} height={64} placeholder={'blur'}
                     blurDataURL={'/blur_image.jpg'} quality={100} className={'rounded-lg'}/>
              : null}
          </div>
          <div className={'flex flex-col text-sm'}>
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