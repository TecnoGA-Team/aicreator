'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleBusinessNav.css'

export default function BusinessNav() {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);

    return (
        <div>
            <style jsx>
                {`
                    ${ (theme=='dark') ? 
                    '.Business { background-color: var(--section-background-dark);}' 
                    : '.Business {background-color: var(--section-background);}' }
                    ${ (theme=='dark') ? 
                    '.Business .box .img-holder::after { border-color: transparent transparent var(--section-background-dark) transparent;}' 
                    : '.Business .box .img-holder::after {border-color: transparent transparent var(--section-background) transparent;}' }


                `}
            </style>

            <div className="Business" >

                <div className="  pt-2 w-[100vw]  flex     justify-center   lg:gap-8  xl:gap-36">

                    <div className="box design  w-[300px]">
                        <div className="img-holder">
                            {/* <Image width={300} height={200}   src="/images/imgs/Business-01.jpg" alt="" /> */}
                        </div>
                        <h3 className='text-[30px]'>Design</h3>
                        <a href="#">More</a>
                    </div>
                    <div className="box website   w-[300px]">
                        <div className="img-holder">
                            {/* <Image width={300} height={200}   src="/images/imgs/Business-02.jpg" alt="" /> */}
                        </div>
                        <h3 className='text-[30px]'>website</h3>
                        <a href="#">More</a>
                    </div>
                    <div className="box HR   w-[300px]" >
                        <div className="img-holder">
                            {/* <Image width={300} height={200}   src="/images/imgs/Business-03.jpg" alt="" /> */}
                        </div>
                        <h3  className='text-[30px]'>HR</h3>
                        <a href="#">More</a>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
