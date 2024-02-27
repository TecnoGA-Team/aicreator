"use client";

// import Header from "../Header/Header";

import MainHeader from "../MainHeader/MainHeader";
import BannerAC from "../BannerAC";
import {useContext} from "react";
import { ThemeContext } from '@/context/ThemeContext';

export default function Home() {
  const {theme}:any = useContext(ThemeContext);

  return (

    <div className="themeGA w-full">
      <MainHeader />
      
    <style jsx>{`
      ${ (theme=='dark') ?  
      `.themeGA { color:#fff; background-color:#000;}`
      : `.themeGA {  background-color:#fff; color:#000;}`
      }
    `}</style>
      <div className='   w-full justify-center items-center align-middle px-8'>
                <BannerAC swipeToRight={true}
                img1='/images/langUse/1.png'
                img2='/images/langUse/2.png'
                img3='/images/langUse/3.png'
                img4='/images/langUse/4.png'
                img5='/images/langUse/5.png'
                img6='/images/langUse/6.png'
                img7='/images/langUse/7.png'
                img8='/images/langUse/15.png'
                />
      </div>
      <div className='   w-full justify-center items-center align-middle px-8'>
                <BannerAC swipeToRight={false}
                img1='/images/langUse/8.png'
                img2='/images/langUse/9.png'
                img3='/images/langUse/10.png'
                img4='/images/langUse/11.png'
                img5='/images/langUse/12.png'
                img6='/images/langUse/13.png'
                img7='/images/langUse/14.png'
                img8='/images/langUse/16.png'
                img9='/images/langUse/17.png'
                />
      </div>
    </div>
  );
}


