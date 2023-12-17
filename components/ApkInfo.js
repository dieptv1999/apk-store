'use client'
import {Icon} from "@iconify/react";
import Image from "next/image";
import ShareComponent from "@/components/ShareComponent";

export default function ApkInfo() {
  return <div className={'flex w-full my-4'}>
    <div className={'flex flex-col flex-1'}>
      <div className={'text-5xl font-bold'}>Truecaller: Caller ID & Block</div>
      <div className={'flex flex-col my-6'}>
        <div className={'font-semibold text-primary'}>Truecaller</div>
        <div className={'text-sm'}>Contains ads - In-app purchases</div>
      </div>

      <div className={'flex'}>
        <div className={'flex flex-col items-center'}>
          <div className={'inline-flex font-semibold items-center'}>
            <span>4.8</span>
            <Icon icon="solar:star-bold" color="#faad14"/>
          </div>
          <div className={'inline-flex text-sm'}>
            20.1M reviews
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className={'flex flex-col items-center'}>
          <div className={'inline-flex  font-semibold'}>
            1B+
          </div>
          <div className={'inline-flex text-sm'}>
            Downloads
          </div>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className={'flex flex-col items-center'}>
          <div className={'inline-flex  font-semibold'}>
            3+
          </div>
          <div className={'inline-flex text-sm'}>
            Rated for 3+
          </div>
        </div>
      </div>

      <div className={'flex space-x-3 mt-6'}>
        <button className="btn btn-success text-white font-bold px-16">Install</button>
        <div>
          <ShareComponent/>
        </div>
      </div>
    </div>
    <div className={'rounded-3xl overflow-hidden'}>
      <Image
        src={'https://play-lh.googleusercontent.com/qtgLcbI3f7CHcg8vUjYQQv3jzJ05-prQ5wr6VN0F-ehAFqLEjNNhFD_QbjujOAy-r4w=w240-h480-rw'}
        alt={'apk logo'}
        width={240}
        height={240}
      />
    </div>
  </div>
}