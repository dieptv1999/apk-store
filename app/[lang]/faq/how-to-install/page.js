import Link from "next/link";

export default function HowToInstall() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-6'}>
        <div className={'text-black font-bold tracking-wide text-3xl'}>How to install XApk, Apks, OBB?</div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>What is XAPK File?</div>
        <div>
          XAPK file was originally created by APKPure. It is a file extension that contains seperate APKs or package OBB
          cache assets files to save the data size so developers can upload their Android apps to Play Store within the
          maximum size limit 100 MB. APKPure APP is one of the most reliable sources to download and install safe XAPK
          files on Android.
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YsJZBIAfigw?si=UaV6d5BriK_jJkof"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        <div className={'text-black font-bold tracking-wide text-2xl'}>How to Install XAPK File on Android?</div>
        <div>
          Unlike APK files, you can't simply download and install the XAPK files on your phone through default
          installer. And APKPure XAPK Installer is the easiest way to help you install and manage APK / XAPK file
          directly on Android with one click.
        </div>
        <ul className={'ml-3 flex flex-col space-y-3 text-gray2'}>
          <li>
            Download and install APKPure APP on your Android device.
          </li>
          <li>
            Go to Me - App Management - APK / XAPK Management to view the XAPK / APK file.
          </li>
          <li>
            Tap the INSTALL button to install the XAPK / APK file you want.
          </li>
          <li>
            Enable the “Unknown Sources” setting on your Android device if needed.
          </li>
        </ul>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Follow APK Store on Social Media</div>
        <div className={'flex flex-col'}>
          <Link href={'#'} className={'text-primary underline'}>
            Apk Store on Facebook
          </Link>
          <Link href={'#'} className={'text-primary underline'}>
            Apk Store on X
          </Link>
          <Link href={'#'} className={'text-primary underline'}>
            Apk Store on YouTube
          </Link>
        </div>
      </div>
    </main>
  )
}
