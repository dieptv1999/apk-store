import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function AboutUs() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-6'}>
        <div className={'text-black font-bold tracking-wide text-3xl'}>Privacy & Policy</div>
        <div>
          Effective as of Dec 24, 2023

          At Apk Store, accessible from https://apkstore.com, one of our main priorities is the privacy of our visitors.
          This Privacy Policy document contains types of information that is collected and recorded by apk store and how
          we use it.

          If you have additional questions or require more information about our Privacy Policy, do not hesitate to
          contact us.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Log Files</div>
        <div>
          Apk Store follows a standard procedure of using log files. These files log visitors when they visit websites.
          All hosting companies do this and a part of hosting services' analytics. The information collected by log
          files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time
          stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that
          is personally identifiable. The purpose of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created
          with the help of the Privacy Policy Generator.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Google DoubleClick DART Cookie</div>
        <div>
          Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads
          to our site visitors based upon their visit to www.website.com and other sites on the internet. However,
          visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy
          Policy at the following URL – https://policies.google.com/technologies/ads
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Our Advertising Partners</div>
        <div>
          Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below.
          Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier
          access, we hyperlinked to their Privacy Policies below.

          Google

          https://policies.google.com/technologies/ads
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Privacy Policies</div>
        <div>
          You may consult this list to find the Privacy Policy for each of the advertising partners of apk store.

          Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used
          in their respective advertisements and links that appear on apk store, which are sent directly to users'
          browser. They automatically receive your IP address when this occurs. These technologies are used to measure
          the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on
          websites that you visit.

          Note that Apk store has no access to or control over these cookies that are used by third-party advertisers.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Third Party Privacy Policies</div>
        <div>
          Apk store's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to
          consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may
          include their practices and instructions about how to opt-out of certain options.

          You can choose to disable cookies through your individual browser options. To know more detailed information
          about cookie management with specific web browsers, it can be found at the browsers' respective websites. What
          Are Cookies?
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Online Privacy Policy Only</div>
        <div>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with
          regards to the information that they shared and/or collect in apk store. This policy is not applicable to any
          information collected offline or via channels other than this website.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Consent</div>
        <div>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Follow APK Store on Social Media</div>
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
