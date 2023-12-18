'use client'
import {Icon} from "@iconify/react";
import Image from "next/image";
import ShareComponent from "@/components/ShareComponent";
import Link from "next/link";
import useLocale from "@/hooks/useLocale";

export default function ApkInfo({apkInfo}) {
  const locale = useLocale()
  return <div className={'flex w-full my-4'}>
    <div className={'flex flex-col flex-1'}>
      <div className={'text-5xl font-bold'}>{apkInfo?.title}</div>
      <div className={'flex flex-col my-6'}>
        <Link href={`/${locale}/developer?id=` + apkInfo?.developerId}>
          <div className={'font-semibold text-primary'}>{apkInfo?.developerId}</div>
        </Link>
        <div className={'text-sm'}>{apkInfo?.summary}</div>
        <div
          className={'text-sm'}>{(apkInfo?.containsAds ? 'Chứa quảng cáo ' : '') + (apkInfo?.free ? 'Mua trong store ' : '')}</div>
      </div>

      <div className={'flex'}>
        {apkInfo?.icon ?
          <div className={'mr-4'}>
            <Image src={apkInfo?.icon} alt={'icon app'} width={48} height={48} className={'rounded-lg'}/>
          </div>
          : null}
        <div className={'flex flex-col items-center'}>
          <div className={'inline-flex font-semibold items-center space-x-1'}>
            <span>{apkInfo?.score?.toFixed(1)}</span>
            <Icon icon="solar:star-bold" color="#faad14"/>
          </div>
          <div className={'inline-flex text-sm'}>
            {apkInfo?.reviews} đánh giá
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className={'flex flex-col items-center'}>
          <div className={'inline-flex  font-semibold'}>
            {apkInfo?.installs}
          </div>
          <div className={'inline-flex text-sm'}>
            Lượt tải
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className={'flex flex-col items-center'}>
          <div className={'inline-flex  font-semibold'}>
            3+
          </div>
          <div className={'inline-flex text-sm'}>
            {apkInfo?.contentRating}
          </div>
        </div>
      </div>

      <div className={'flex space-x-5 my-6 items-center'}>
        <button className="btn btn-success text-white font-bold px-16 flex items-center">
          <Icon icon="solar:download-broken" color="white" fontSize={18}/>
          <span className={'mt-1'}>Tải về APK</span>
        </button>
        <div>
          <ShareComponent/>
        </div>
      </div>

      <div className={'inline-flex text-gray2 text-sm items-center space-x-1'}>
        <Icon icon="mingcute:device-line" color="#5f6368" fontSize={22}/>
        <span>This app is available for all of your devices</span>
      </div>
    </div>
    <div className={'flex-1 rounded-3xl overflow-hidden shadow-xl h-[250px] w-full relative'}>
      <Image
        src={apkInfo?.headerImage}
        alt={'apk logo'}
        // width={240}
        // height={240}
        fill={true}
        objectFit={'cover'}
        quality={100}
        placeholder={'blur'}
        blurDataURL={'/blur_image.jpg'}
        className={'rounded-3xl overflow-hidden'}
      />
    </div>
  </div>
}