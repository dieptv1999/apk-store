import {Quicksand} from 'next/font/google'
import './globals.scss'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {getDictionary} from "@/app/dictionaries";

const quicksand = Quicksand({subsets: ['latin']})

export const metadata = {
  title: 'Android Apps on Apk Store',
  description: 'Android Apps on Apk Store',
}

export async function generateStaticParams() {
  return [{lang: 'en'}, {lang: 'vi'}]
}

export default async function RootLayout({children, params}) {
  const dict = await getDictionary(params.lang) // en

  return (
    <html lang={params.lang} data-theme="light" className={quicksand.className}>
    <body className={quicksand.className}>
    <Navbar dict={dict}/>
    {children}
    <Footer dict={dict}/>
    </body>
    </html>
  )
}
