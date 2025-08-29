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
        <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Outfit:wght@100..900&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <meta charSet="utf-8" />
        <script src="https://elevenlabs.io/player/audioNativeHelper.js" type="text/javascript"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title >{ge_globals.company_name}</title>
        <meta name="description" content={ge_globals.company_description} />
      </head>

      <body className="bg-main-100 text-main-900 w-full h-fit min-h-screen justify-start flex flex-col">

        <Link href='/' className="w-full flex items-center justify-center content-center mt-34 sm:mt-20 md:mt-6 gap-4 sm:gap-6 md:gap-10 px-4 group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-white flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <img src={getAssetURL(ge_globals.logo)} alt="Company logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center h-16 sm:h-20 md:h-24">
            <div className="text-lg sm:text-xl md:text-2xl font-space font-semibold text-left bg-gradient-to-r from-main-800 to-main-600 bg-clip-text text-transparent group-hover:from-main-900 group-hover:to-main-700 transition-all duration-300 leading-tight">
              {ge_globals.company_name}
            </div>
            <div className="text-xs sm:text-sm md:text-base font-inter font-medium text-main-600 text-left mt-1 group-hover:text-main-700 transition-colors duration-300">
              Video & Photography
            </div>
          </div>
        </Link>




        <NavButtonWrapper />



        <div className="w-full mx-auto max-w-6xl mt-20 sm:mt-16 md:mt-20 px-4 sm:px-6">
          {children}
        </div>

        <Footer />
        <ScrollToTop />
      </body >
    </html >
  )
}
