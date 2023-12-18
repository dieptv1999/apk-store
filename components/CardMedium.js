'use client'

import Card from "@/components/Card";
import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";

export default function CardMedium({className, icon, title, score, appId}) {
  const locale = useLocale();
  return <Link href={`/${locale}/apps/${appId}`} key={appId}>
    <Card className={className}>
      <div className={'flex flex-col'}>
        <div className={'overflow-hidden'}>
          {icon
            ? <Image src={icon} alt={'preview image'} width={192} height={192} placeholder={'blur'}
                     blurDataURL={'/blur_image.jpg'} quality={100} className={'rounded-[40px]'}/>
            : null
          }
        </div>
        <div className={'flex flex-col mt-3'}>
          <span className={'font-semibold text-base'}>{title}</span>
          <span className={'text-sm text-gray2 inline-flex items-center space-x-1'}>
          <span>{score?.toFixed(1)}</span>
          <Icon icon="solar:star-bold"
                color="#faad14"/>
        </span>
        </div>
      </div>
    </Card>
  </Link>
}