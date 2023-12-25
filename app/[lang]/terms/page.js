import {BASE_URL} from "@/utils/constant";
import Feed from "@/components/Feed";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function AboutUs() {

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4 py-24">
      <div className={'max-w-screen-xl w-full px-[10px] flex flex-col space-y-6'}>
        <div className={'text-black font-bold tracking-wide text-3xl'}>Terms & Condition</div>
        <div>
          <div>
            Effective as of Dec 24, 2023
          </div>

          <div className={'my-4 text-xl font-semibold'}>Welcome to apk store!</div>

          <div>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use apk store
            if you do not agree to take all of the terms and conditions stated on this page.
          </div>
          <div>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and
            all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to
            the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer,
            acceptance and consideration of payment necessary to undertake the process of our assistance to the Client
            in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision
            of the Company's stated services, in accordance with and subject to, prevailing law of af. Any use of the
            above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as
            interchangeable and therefore as referring to same.
          </div>
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Cookies</div>
        <div>
          <p>We employ the use of cookies. By accessing apk store, you agreed to use cookies in agreement with the Apk
            Store's Privacy Policy. </p>

          <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are
            used by our website to enable the functionality of certain areas to make it easier for people visiting our
            website. Some of our affiliate/advertising partners may also use cookies.</p>
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>License</div>
        <div>
          <p>Unless otherwise stated, Apk Store and/or its licensors own the intellectual property rights for all
            material on apk store. All intellectual property rights are reserved. You may access this from apk store for
            your own personal use subjected to restrictions set in these terms and conditions.</p>

          <p>You must not:</p>
          <ul className={'list-disc pl-5 py-3'}>
            <li>Republish material from apk store</li>
            <li>Sell, rent or sub-license material from apk store</li>
            <li>Reproduce, duplicate or copy material from apk store</li>
            <li>Redistribute content from apk store</li>
          </ul>

          <p>This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of
            the <a href="https://www.termsandconditionsgenerator.com/">Free Terms and Conditions Generator</a>.</p>

          <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in
            certain areas of the website. Apk Store does not filter, edit, publish or review Comments prior to their
            presence on the website. Comments do not reflect the views and opinions of Apk Store,its agents and/or
            affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the
            extent permitted by applicable laws, Apk Store shall not be liable for the Comments or for any liability,
            damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of
            the Comments on this website.</p>

          <p>Apk Store reserves the right to monitor all Comments and to remove any Comments which can be considered
            inappropriate, offensive or causes breach of these Terms and Conditions.</p>

          <p>You warrant and represent that:</p>

          <ul className={'list-disc pl-5 py-3'}>
            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do
              so;
            </li>
            <li>The Comments do not invade any intellectual property right, including without limitation copyright,
              patent or trademark of any third party;
            </li>
            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material
              which is an invasion of privacy
            </li>
            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities
              or unlawful activity.
            </li>
          </ul>

          <p>You hereby grant Apk Store a non-exclusive license to use, reproduce, edit and authorize others to use,
            reproduce and edit any of your Comments in any and all forms, formats or media.</p>

        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Hyperlinking to our Content</div>
        <div>
          <p>The following organizations may link to our Website without prior written approval:</p>

          <ul className={'list-disc pl-5 py-3'}>
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the
              Websites of other listed businesses; and
            </li>
            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,
              and charity fundraising groups which may not hyperlink to our Web site.
            </li>
          </ul>

          <p>These organizations may link to our home page, to publications or to other Website information so long as
            the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval
            of the linking party and its products and/or services; and (c) fits within the context of the linking
            party's site.</p>

          <p>We may consider and approve other link requests from the following types of organizations:</p>

          <ul className={'list-disc pl-5 py-3'}>
            <li>commonly-known consumer and/or business information sources;</li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>

          <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us
            look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any
            negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence
            of Apk Store; and (d) the link is in the context of general resource information.</p>

          <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b)
            does not falsely imply sponsorship, endorsement or approval of the linking party and its products or
            services; and (c) fits within the context of the linking party's site.</p>

          <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our
            website, you must inform us by sending an e-mail to Apk Store. Please include your name, your organization
            name, contact information as well as the URL of your site, a list of any URLs from which you intend to link
            to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a
            response.</p>

          <p>Approved organizations may hyperlink to our Website as follows:</p>

          <ul className={'list-disc pl-5 py-3'}>
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>By use of any other description of our Website being linked to that makes sense within the context and
              format of content on the linking party's site.
            </li>
          </ul>

          <p>No use of Apk Store's logo or other artwork will be allowed for linking absent a trademark license
            agreement.</p>
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Content Liability</div>
        <div>
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend
          us against all claims that is rising on your Website. No link(s) should appear on any Website that may be
          interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the
          infringement or other violation of, any third party rights.
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Disclaimer</div>
        <div>
          <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and
            conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>

          <ul className={'list-disc pl-5 py-3'}>
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>

          <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are
            subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including
            liabilities arising in contract, in tort and for breach of statutory duty.</p>

          <p>As long as the website and the information and services on the website are provided free of charge, we will
            not be liable for any loss or damage of any nature.</p>
        </div>
        <div className={'text-black font-bold tracking-wide text-2xl'}>Follow Apk Store on Social Media</div>
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
