import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { LangProvider } from '@/context/LangContext'


import Cookies from '@/components/Cookies/Cookies'
import Conect from '@/components/Conect/Conect'
import BackgroundMain from "@/components/BackgroundMain/BackgroundMain";

import HeaderNavAC from "@/components/HeaderNavAC/HeaderNavAC";
import FooterAC from "@/components/FooterAC/FooterAC";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Creat",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      <link rel="manifest" href="/site.webmanifest"></link> */}
      <body className={inter.className}>
        <ThemeProvider>
          <LangProvider>
            {/* <BackgroundMain /> */}
            {/* <HeaderNavAC /> */}

            <Conect />


              {children}

            <FooterAC />

            <Cookies />
          </LangProvider>
        </ThemeProvider>


        
      </body>
    </html>
  );
}
