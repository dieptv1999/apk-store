import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import CardDownload from "@/components/CardDownload";
import {notFound} from "next/navigation";
import ShareComponent from "@/components/ShareComponent";
import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import CardInList from "@/components/CardInList";
import SimilarApps from "@/components/SimilarApps";
import CardDownloadInList from "@/components/CardDownloadInList";
import PreviousVersionList from "@/components/PreviousVersionList";
import {getDictionary} from "@/app/dictionaries";

export async function generateMetadata(
  {params},
  parent
) {
  const apkInfo = await fetch(
    BASE_URL + `/apk?appId=${params.appId}`,
    {
      next: {revalidate: 240},
      method: 'POST',
    },
  ).then(d => d.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: apkInfo?.title,
    openGraph: {
      images: [apkInfo?.headerImage, ...previousImages],
    },
  }
}

export default async function ApkDetail({params}) {
  const dict = await getDictionary(params.lang) // en
  const resApk = await fetch(
    BASE_URL + `/apk?appId=${params.appId}`,
    {
      next: {revalidate: 240},
      method: 'POST',
    },
  ).then(d => d.json());

  if (!resApk) {
    notFound();
  }

  const resVersions = await fetch(
    BASE_URL + `/apk/versions?appId=${params.appId}`,
    {
      next: {revalidate: 240},
      method: 'POST',
    },
  ).then(d => d.json()).catch(e => {
    notFound()
  });

  if (!resVersions || resVersions.length < 1) {
    notFound();
  }

  const latestVersion = resVersions[0];

  const resFeed = await fetch(
    BASE_URL + `/apk/feed`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  const resAds = await fetch(
    BASE_URL + `/apk/ads`,
    {
      next: {revalidate: 180},
      method: 'GET',
    },
  ).then(d => d.json());

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-4'}>
        <div className={'border border-primary bg-primary bg-opacity-10 w-full rounded-lg p-3'}>
          <div className={'w-full flex flex-col md:flex-row md:justify-between'}>
            <CardDownload {...resApk} version={latestVersion?.version}/>
            <div className={'flex flex-col md:items-end justify-center space-y-2'}>
              <ShareComponent/>
            </div>
          </div>
        </div>
        <div
          className={'border border-primary w-full rounded-lg grid grid-cols-2 md:grid-cols-3 gap-3 p-3 overflow-hidden'}>
          <div className={''}>
            <div className={'font-semibold'}>Package Name</div>
            <div className={'text-sm text-primary'}>{resApk.appId}</div>
          </div>
          <div className={''}>
            <div className={'font-semibold'}>Requires Android</div>
            <div className={'text-sm text-primary'}>{latestVersion.requiresAndroid}</div>
          </div>
          <div className={''}>
            <div className={'font-semibold'}>Architecture</div>
            <div className={'text-sm text-primary'}>{latestVersion.architecture}</div>
          </div>
          <div className={''}>
            <div className={'font-semibold'}>Signature</div>
            <div className={'text-sm text-primary'}>{latestVersion.signature}</div>
          </div>
          <div className={''}>
            <div className={'font-semibold'}>Storage</div>
            <div className={'text-sm text-primary'}>{latestVersion.amountStorage}</div>
          </div>
        </div>
        <DownloadButton
          link={latestVersion?.downloadLink}
          fielname={params.appId + latestVersion.version}
          versionId={latestVersion.versionId}
        />
        <Feed ads={resFeed} delay={2000}/>
        <div className={'flex flex-col md:flex-row md:space-x-2'}>
          <PreviousVersionList resVersions={resVersions} resApk={resApk} appId={params.appId} dict={dict}/>
          <div className={'w-[300px]'}>
            <SimilarApps appId={resApk?.appId} genreId={resApk.genreId} ads={resAds}/>
          </div>
        </div>
      </div>
    </main>
  )
}
