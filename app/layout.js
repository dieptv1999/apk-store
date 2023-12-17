import {Quicksand} from 'next/font/google'
import './globals.scss'
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({subsets: ['latin']})

export const metadata = {
  title: 'Android Apps on Apk Store',
  description: 'Android Apps on Apk Store',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" data-theme="light" className={quicksand.className}>
    <body className={quicksand.className}>
    <Navbar/>
    {children}
    </body>
    </html>
  )
}
