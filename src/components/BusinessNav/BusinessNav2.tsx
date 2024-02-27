'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleBusinessNav.css'
import LinkAC from '../compo/LinkAC/LinkAC';

export default function BusinessNav2() {

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

            <div className="Business " >

                <div className="   flex  flex-row     justify-evenly    w-[100vw]  ">

                    <div className="box design  w-1/4 ">
                        <div className="img-holder w-full">
                            <Image width={120} height={150}   src="/images/Business-01.jpg" alt="" />
                        </div>
                        <h3>Design</h3>
                        
                        <span>
                            <LinkAC text='More' href='/JobDesignPage' cn='' /> 
                        </span>
                        
                    </div>
                    <div className="box website   w-1/4">
                        <div className="img-holder w-full">
                            <Image width={120} height={150}   src="/images/Business-02.jpg" alt="" />
                        </div>
                        <h3>website</h3>
                        <span>
                            <LinkAC text='More' href='/JobWebsitePage' cn='' />
                        </span>

                    </div>
                    <div className="box HR   w-1/4" >
                        <div className="img-holder w-full">
                            <Image width={120} height={150}   src="/images/Business-03.jpg" alt="" />
                        </div>
                        <h3 >HR</h3>
                        <span>
                            <LinkAC text='More' href='/JobHRPage' cn='' />
                        </span>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
