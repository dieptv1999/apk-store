'use client'
import {Icon} from "@iconify/react";
import Image from "next/image";
import ShareComponent from "@/components/ShareComponent";
import {Disclosure} from "@headlessui/react";
import {useCallback, useEffect, useRef, useState} from "react";
import {useHover} from "@/hooks/useHover";
import CardSmall from "@/components/CardSmall";
import CardInList from "@/components/CardInList";
import ReviewList from "@/components/ReviewList";
import utils, {transformContent} from "@/utils";
import Link from "next/link";
import axios from "axios";
import {BASE_URL} from "@/utils/constant";
import {remove} from "lodash/array";
import useLocale from "@/hooks/useLocale";

export default function ApkMoreInfo({apkInfo}) {
  const locale = useLocale()
  const imgRef = useRef();
  const [imgIdx, setImgIdx] = useState(0);
  const [vsMore, setVsMore] = useState(false)
  const [similarApps, setSimilarApps] = useState([]);
  const [similarDevApps, setSimilarDevApps] = useState([]);

  const fetchSimilarApp = useCallback(async () => {
    if (apkInfo?.genreId) {
      const res = await axios.post(BASE_URL + "/apk/similar", {
        genreId: apkInfo?.genreId,
        appId: apkInfo?.appId,
      })


      if (res.status === 200) {
        setSimilarApps(res.data)
      }
    }
  }, [apkInfo]);

  const fetchSimilarDevApp = useCallback(async () => {
    if (apkInfo?.genreId) {
      const res = await axios.post(BASE_URL + "/apk/similar/develop", {
        developerId: apkInfo?.developerId,
        appId: apkInfo?.appId,
      })


      if (res.status === 200) {
        setSimilarDevApps(res.data)
      }
    }
  }, [apkInfo]);

  useEffect(() => {
    fetchSimilarApp()
    fetchSimilarDevApp()
  }, [apkInfo])

  const scrollToNextElement = () => {
    // imgRef.current.getElementsByTagName('img')[imgIdx + 1]?.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    imgRef.current?.scrollTo({
      left: imgRef.current.scrollLeft + imgRef.current.getElementsByTagName('img')[imgIdx].clientWidth + 16,
      top: imgRef.current.scrollHeight,
      behavior: 'smooth'
    });
    setImgIdx(imgIdx + 1)
  };

  const scrollToPrevElement = () => {
    imgRef.current.getElementsByTagName('img')[imgIdx - 1]?.scrollIntoView({behavior: "smooth"});
    setImgIdx(imgIdx - 1)
  };

  const listImgs = apkInfo?.screenshots?.split(",") ?? []

  const desc = transformContent(!vsMore, apkInfo?.description ?? '', () => setVsMore(true))

  const listCategories = remove(apkInfo?.categories?.split(",") ?? [], o => !!o)

  return <div className={'flex flex-col md:flex-row w-full my-4 md:space-x-6 space-y-3 md:space-y-0'}>
    <div className={'flex flex-col flex-1'}>
      <div className={'relative'}>
        <div
          className={'h-[296px] w-full overflow-x-auto inline-flex scroll space-x-4 relative'}
          ref={imgRef}
        >
          {listImgs.map((e, idx) => (
            <img key={idx} src={e} alt={'image app preview'} className={'h-full object-contain rounded-lg'}/>
          ))}
        </div>
        {imgIdx > 0
          ?
          <div
            onClick={scrollToPrevElement}
            className={'absolute w-[50px] h-[50px] left-2 bg-white rounded-full flex justify-center items-center cursor-pointer -translate-y-1/2 top-1/2 ' +
              'shadow-lg active:bg-gray-200'}>
            <Icon icon="mingcute:left-fill" color="#5f6368" fontSize={42}/>
          </div>
          : null}
        {imgIdx < listImgs.length - 1
          ?
          <div
            onClick={scrollToNextElement}
            className={'absolute w-[50px] h-[50px] right-2 bg-white rounded-full flex justify-center items-center cursor-pointer -translate-y-1/2 top-1/2 ' +
              'shadow-lg active:bg-gray-200'}>
            <Icon icon="mingcute:right-fill" color="#5f6368" fontSize={42}/>
          </div>
          : null}
      </div>
      <div className={'my-6'}>
        <div className={'text-2xl font-bold inline-flex items-end space-x-3 mb-4'}>
          <span>Thông tin về ứng dụng này</span>
          <Icon icon="akar-icons:info-fill" className={'cursor-pointer'}/>
        </div>

        <div className={'flex flex-col space-y-2'}>
          {desc?.split('\n')?.map(e => (
            <span key={e}>{e}</span>
          ))}
          {!vsMore ?
            <span className={'cursor-pointer underline text-blue-500 hover:text-blute-700'}
                  onClick={() => setVsMore(true)}>Xem thêm</span>
            : null}
        </div>
        <div className={'mt-6 mb-2 font-semibold'}>Lần cập nhật gần đây nhất</div>
        <div>{utils.formatDate(apkInfo?.updated)}</div>

        <div className={'mt-6 mb-2 font-semibold'}>Danh mục</div>
        <div className={'flex flex-wrap gap-2'}>
          {
            listCategories.map(e => (
              <Link href={`/${locale}/category?id=${e}`} key={e}>
                <div className={'border border-primary rounded px-3 pt-1.5 text-gray2 pb-1 cursor-pointer'}>
                  {e}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className={'flex flex-col space-y-3 mt-4'}>
        <div className={'text-2xl font-bold inline-flex items-end space-x-3 mb-4'}>
          Đánh giá của người dùng
        </div>
        <ReviewList appId={apkInfo?.appId}/>
      </div>
    </div>
    <div className={'flex flex-col w-full md:w-[300px]'}>
      <Disclosure defaultOpen={true}>
        {({open}) => (
          <>
            <Disclosure.Button
              className="mb-2 flex w-full justify-between items-center rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
              <span>Thông tin hỗ trợ của ứng dụng</span>
              <Icon icon="fluent:chevron-up-12-filled"/>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 text-lg font-medium flex flex-col">
              {apkInfo?.developerWebsite
                ? <Link href={apkInfo?.developerWebsite} target={"_blank"}>
                  <div className={'mt-2 inline-flex space-x-2 items-center'}>
                    <Icon icon="fluent-mdl2:website" color="#5f6368"/>
                    <span>Trang web</span>
                  </div>
                </Link>
                : null}
              {apkInfo?.developerEmail
                ?
                <Link href={`mailto:${apkInfo?.developerEmail}`} target={"_blank"}>
                  <div className={'mt-2 inline-flex space-x-2 items-center'}>
                    <Icon icon="eva:email-fill" color="#5f6368"/>
                    <div className={'mt-2 flex flex-col'}>
                      <span>Email liên hệ hỗ trợ</span>
                      <span className={'text-gray2 text-sm'}>{apkInfo?.developerEmail}</span>
                    </div>
                  </div>
                </Link>
                : null}
              {apkInfo?.developerAddress
                ?
                <Link href={`https://www.google.com/maps?q=${apkInfo?.developerAddress}`} target={"_blank"}>
                  <div className={'mt-2 inline-flex space-x-2 items-center'}>
                    <Icon icon="mdi:address-marker" color="#5f6368" fontSize={26}/>
                    <div className={'mt-2 flex flex-col'}>
                      <span>Địa chỉ</span>
                      <span className={'text-gray2 text-sm'}>{apkInfo?.developerAddress}</span>
                    </div>
                  </div>
                </Link>
                : null}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure defaultOpen={true} key={'similar app'}>
        {({open}) => (
          <>
            <Disclosure.Button
              className="mb-2 flex w-full justify-between items-center rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
              <span>Các ứng dụng tương tự</span>
              <Icon icon="fluent:chevron-up-12-filled"/>
            </Disclosure.Button>
            <Disclosure.Panel className="pb-2 pt-4 text-lg font-medium">
              <div className={'flex flex-col space-y-2'}>
                {similarApps && similarApps.length > 0
                  ? similarApps.map((apk, index) => (
                    <CardInList {...apk} key={apk.appId} className={'p-2'}/>
                  ))
                  : <div className={'text-sm text-gray2 px-3'}>Không có ứng dụng tương tự nào</div>}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {similarDevApps && similarDevApps.length > 0
        ? <Disclosure defaultOpen={true} key={'similar dev app'}>
          {({open}) => (
            <>
              <Disclosure.Button
                className="mb-2 flex w-full justify-between items-center rounded-lg bg-blue-100 px-4 py-2 text-left text-lg font-semibold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                <span>Các mục khác của {apkInfo?.developerId}</span>
                <Icon icon="fluent:chevron-up-12-filled"/>
              </Disclosure.Button>
              <Disclosure.Panel className="pb-2 pt-4 text-lg font-medium">
                <div className={'flex flex-col space-y-2'}>

                  {similarDevApps.map((apk, index) => (
                    <CardInList {...apk} key={apk.appId} className={'p-2'}/>
                  ))
                  }
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        : null}
    </div>
  </div>
}