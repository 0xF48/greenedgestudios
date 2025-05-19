import React from "react"
import './globals.css'
import { getData } from "./getData"
import ScrollToTop from "./ScrollToTop"
import { NavButtonWrapper } from "./NavButtonWrapper"
import { Footer } from "./Footer"
import Link from "next/link"
import { getAssetURL } from './getAssetURL'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { ge_globals } = await getData()


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <meta charSet="utf-8" />
        <script src="https://elevenlabs.io/player/audioNativeHelper.js" type="text/javascript"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title >{ge_globals.company_name}</title>
        <meta name="description" content={ge_globals.company_description} />
      </head>

      <body className="bg-main-100 text-main-900 w-full h-fit min-h-screen justify-between flex flex-col">
        <div className="w-full flex items-center justify-center content-center mt-40 gap-10">
          <div className="w-24 h-24 rounded-3xl bg-white">
            <img src={getAssetURL(ge_globals.logo)} />
          </div>
          <div className="text-3xl font-bold">
            {ge_globals.company_name}
          </div>

        </div>

        <NavButtonWrapper />



        <div className="w-full mx-auto max-w-6xl min-h-[70vh] mt-[20em] ">
          {children}
        </div>

        <Footer />
        <ScrollToTop />
      </body >
    </html >
  )
}
