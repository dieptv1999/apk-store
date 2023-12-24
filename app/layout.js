import {NextAuthProvider} from "@/app/providers";


export default async function RootLayout({children}) {

  return (
    <html data-theme="light">
    <body>
    <NextAuthProvider>
      {children}
    </NextAuthProvider>
    </body>
    </html>
  )
}
