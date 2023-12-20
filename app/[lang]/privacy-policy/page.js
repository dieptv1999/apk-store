import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function AboutUs() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-6'}>
        <div className={'text-black font-bold tracking-wide text-3xl'}>Privacy Policy</div>
        <div>
          Effective as of May 25, 2018

          Our updated Privacy Policy explains what information we collect, how we use it, and how we protect it. We also
          explain your rights regarding our use of your personal information, including how to manage your privacy and
          cookies settings, access the information we have about you, and delete your account, under the privacy laws
          including but not limited to California Consumer Privacy Act of 2018 (“CCPA”) and the General Data Protection
          Regulation (GDPR).

          APKPure is committed to protecting consumer privacy online. We believe that greater protection of personal
          privacy on the Web will not only protect our users, but also increase users confidence and ultimately their
          participation in online activities. The purpose of our policy is to inform you about the types of information
          we gather about you when you visit our site, how we may use that information, whether we disclose it to
          anyone, and the rights you have regarding our use of the information. APKPure.com strives to offer its
          visitors the many advantages of Internet technology and to provide an interactive and personalized experience.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Your Consent</div>
        <div>
          BY USING APKPure SERVICES, INSTALLING AND/OR RUNNING ON YOUR MOBILE DEVICE OR BROWSER, ENTERING INTO,
          CONNECTING TO, ACCESSING AND/OR USING THE APP, YOU AGREE TO THE TERMS AND CONDITIONS SET FORTH IN THIS PRIVACY
          POLICY, INCLUDING TO THE POSSIBLE COLLECTION AND PROCESSING OF YOUR PERSONAL INFORMATION. PLEASE NOTE: IF YOU
          OR, AS APPLICABLE, YOUR LEGAL GUARDIAN, DISAGREE TO ANY TERM PROVIDED HEREIN, YOU MUST NOT INSTALL, ACCESS
          AND/OR USE THE APP, APKPure OTHER SERVICES AND YOU ARE REQUESTED TO PROMPTLY ERASE THE APP FROM YOUR MOBILE
          DEVICE OR STOP USING OUR APP/WEBSITE THROUGH YOUR BROWSER AND DO NOT ENTER TO, CONNECT TO, ACCESS OR USE ANY
          OF OUR SERVICES RELATED TO THE APP.
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
