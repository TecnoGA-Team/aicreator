'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleBusiness.css'
import Link from 'next/link';
import LinkAC from '../compo/LinkAC/LinkAC';
import dataTeamsHome from '@/assets/json/DataHome.json'


export default function Business() {
    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const dataHomeLg=(lang=='Ar')?dataTeamsHome.ar.TeamHome:(lang=='En')?dataTeamsHome.en.TeamHome:dataTeamsHome.tr.TeamHome;


    return (
        <div id="Business">
            <style jsx>
                {`
                    ${ (theme=='dark') ? 
                    '.Business { background-color: var(--section-background-dark);}' 
                    : '.Business {background-color: var(--section-background);}' }
                    ${ (theme=='dark') ? 
                    '.Business .box .img-holder::after { border-color: transparent transparent var(--section-background-dark) transparent;}' 
                    : '.Business .box .img-holder::after {border-color: transparent transparent var(--section-background) transparent;}' }
                    
                    P{   height: 5.25rem;}
                `}
            </style>

            <div className="Business mt-20" >

                <div className="container pt-20">
                    <h2 className=" text-[35px] sm:text-[50px]   h-1  font-mono p-3  font-extrabold opacity-35 absolute  top-20   z-30">
                        {dataHomeLg.title}
                    </h2>
                        <div className="box design relative h-[70vh]">
                            <div className="img-holder ">
                                <Image width={500} height={500}   src="/images/Business-01.jpg" alt="" />
                            </div>
                            <div className=' flex  flex-col   absolute top-[2px] w-full h-full'>
                                <h2  className=' text-slate-200'>{dataHomeLg.design.title}</h2>
                                <p className=' flex translate-y-[-150px]'>{dataHomeLg.design.text}</p>
                                <span className=' flex bottom-0'><LinkAC text='More' href='/JobDesignPage' cn='' /> </span>
                            </div>

                        </div>

                    <div className="box website relative h-[70vh]">
                        <div className="img-holder">
                            <Image width={500} height={500}   src="/images/Business-02.jpg" alt="" />
                        </div>
                        <div className=' flex  flex-col  absolute top-[2px]  w-full h-full'>
                            <h2  className=' text-slate-200'>{dataHomeLg.website.title}</h2>
                            <p className=' flex translate-y-[-150px]'>{dataHomeLg.website.text}</p>
                            <span className=' flex bottom-0'><LinkAC text='More' href='/JobWebsitePage' cn='' /> </span>
                        </div>

                    
                    </div>
                    <div className="box HR relative h-[70vh]">
                    <div className="img-holder">
                        <Image width={500} height={500}   src="/images/Business-03.jpg" alt="" />
                    </div>
                    <div className=' flex  flex-col   absolute top-[2px] w-full h-full'>
                        <h2  className=' text-slate-200'>{dataHomeLg.hr.title}</h2>
                        <p className=' flex translate-y-[-150px]'>{dataHomeLg.hr.text}</p>
                        <span className=' flex bottom-0'><LinkAC text='More' href='/JobHRPage' cn='' /> </span>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
