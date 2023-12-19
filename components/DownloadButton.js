'use client'
import Link from "next/link";
import {memo, useState} from "react";
import ThreeDotsWave from "@/components/ThreeDotWave";

const DownloadButton = memo(function ({link, fielname, versionId, className, showLoading = true}) {
  const [downloading, setDownloading] = useState(false)

  if (downloading && showLoading) return (
    <div className={'w-full pb-5 flex flex-col items-center'} key={versionId}>
      <ThreeDotsWave/>
      <span>Downloading...</span>
    </div>
  )
  return <Link href={link} download={fielname} className={`${className}`} onClick={() => setDownloading(true)} key={versionId}>
    <button className={'btn btn-success text-white w-full'}>Download APK</button>
  </Link>
})
export default DownloadButton