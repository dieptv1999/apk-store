import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function AboutUs() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-8'}>
        <div className={'flex flex-col items-center pt-16 space-y-6'}>
          <Image src={'/apk-store-logo.png'} width={80} height={80} alt={'logo'} className={''} quality={100}/>
          <div className={'flex flex-col items-center'}>
            <div className={'text-[50px]'}>
              Empowering the world to develop technology
            </div>
            <div className={'text-[50px] font-semibold'}>
              through collective knowledge.
            </div>
          </div>
          <div className={'text-xl max-w-md text-center'}>
            Our products and tools enable people to ask, share and learn at work or at home.
          </div>
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Our Story</div>
        <div>
          APKPure.com is a website providing smartphones software downloads founded in 2014 by APKPure Team, and has
          grown into one of the leading websites in the smartphones software industry.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Our Mission</div>
        <div>
          Providing a safer, better and faster software download experience for our fans all over the world. We offer
          one of the most comprehensive collections of Apps, Games, and history version list. All download works
          guarantee 100% no extra extension needed. We believe all you guys deserve a better way to enjoy mobile life.
          APKPure team is always ready to help all users solve their problems about smartphones app installing, update
          and more.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Important Notice</div>
        <div>
          APKPure.com is NOT associated or affiliated with Google, Google Play or Android in any way. Android is a
          trademark of Google Inc. All the apps & games are property and trademark of their respective developer or
          publisher and for HOME or PERSONAL use ONLY. Please be aware that APKPure.com ONLY SHARE THE ORIGINAL APK FILE
          FOR FREE APPS. ALL THE APK FILE IS THE SAME AS IN GOOGLE PLAY WITHOUT ANY CHEAT, UNLIMITED GOLD PATCH OR ANY
          OTHER MODIFICATIONS.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Follow APKPure on Social Media</div>
        <div className={'flex flex-col'}>
          <Link href={'#'} className={'text-primary underline'}>
            APKPure on Facebook
          </Link>
          <Link href={'#'} className={'text-primary underline'}>
            APKPure on Twitter
          </Link>
          <Link href={'#'} className={'text-primary underline'}>
            APKPure on YouTube
          </Link>
        </div>
      </div>
    </main>
  )
}
