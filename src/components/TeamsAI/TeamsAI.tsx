'use client'

import React, { useState } from 'react'
import {useContext} from "react";
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleTeamsAI.css'
import DataTeams from  '@/assets/json/DataTeams.json'
export default function TeamsAI() {
    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const DataTeam=(lang=='Ar')?DataTeams.ar:(lang=='En')?DataTeams.en:DataTeams.tr;
 
    return (
        
        <div className=' overflow-hidden '>
            <div>
                {/* --Start Style--------------------------- */}
                <style jsx>{`
                    ${  (lang=='Ar') ?  
                    '.T__ {  text-align: right;} .T__slideContent span span p{justify-content: flex-end;}'
                    : '.T__ {  }'
                    }
                    ${  theme=='dark' ?  
                    '.teamsDiv { color:#fff; background-color:#000000;}'
                    : '.teamsDiv {  background-color:#ffffff; color:#000;}'
                    }
                    ${  theme=='dark' ?  
                    ' .T__slideContent span span p{letter-spacing: 0.075em;} '
                    : ' .T__slideContent span span p{letter-spacing: 0.015em;}'
                    }
                    ${  theme=='dark' ?  
                    '.T__slideContent span{ color:#fff; background-color:#000000;}'
                    :'.T__slideContent span{  background-color:#ffffff; color:#000;}'
                    }
                    .T__slideContent span {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding: 1.25rem/* 20px */;
                    }
                    .T__slideContent span span{
                        width: 40vw;
                        height: 100vh;
                        right: 0px;
                        justify-content: center;
                        align-items: center;
                    }
                    .T__slideContent span span h4{
                        color:#b3401a;
                        padding-bottom: 1.25rem;
                        font-style: italic;
                        font-weight: 900;
                        font-family: "chaneyultra_extended",sans-serif;
                        text-transform: uppercase;
                    }
                    .T__slideContent span span p{
                        width: 100%;
                        line-height: 1.8;
                        padding: 10px 0px;
                        --tw-shadow: 0 0 #0000;
                        --tw-shadow-colored: 0 0 #0000;
                        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
                    }
                    .difBgColor{ background-color: #b3401a;}
                    ${  (lang=='Ar') ?  
                    '.rTag {display: flex;}'
                    :'.rTag {display: none;}'
                    }
                    ${  (lang=='Ar') ?  
                    '.lTag {display: none;}'
                    :'.lTag {display: flex;}'
                    }     
                    ${  theme=='dark' ?  
                    '.ShadowT1 {box-shadow: rgba(0, 0, 0) 0px 0px 10px 20px inset, rgba(0, 0, 0 ) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;}'
                    : '.ShadowT1 {box-shadow: rgba(255, 255,255) 0px 0px 10px 20px inset, rgba(255, 255, 255 ) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 32px 16px;}'
                    }      
                    .rTag{
                        border-right: 6px solid ;
                        border-radius: 25px;
                        height:6px;
                        width: 40px;
                        transform: translate(-20px,29px);
                        opacity: 0.55;
                    }
                    .lTag{
                        border-left: 6px solid ;
                        border-radius: 25px;
                        height:6px;
                        width: 40px;
                        transform: translate(20px,29px);
                        opacity: 0.55;
                    } 
                    @media (min-width:0px) {
                        .T__slideContent span span p{font-size:12px;}
                        .T__slideContent span span h4{font-size:18px;}
                    }
                    @media (min-width: 768px) {
                        .T__slideContent span span p{font-size:16px;}
                        .T__slideContent span span h4{font-size:28px;}
                    }
                    @media (min-width: 992px) {
                        .T__slideContent span span p{ font-size:18px;}
                        .T__slideContent span span h4{font-size:40px;}
                    }
                    @media (min-width: 1200px) {
                        .T__slideContent span span p{font-size:20px;}
                        .T__slideContent span span h4{font-size:52px;}
                    }

                `}</style>

                {/* --End Style--------------------------- */}

                <div className='flex   h-[100vh] w-full justify-start items-center  p-10 relative overflow-hidden teamsDiv'>
                    <div  className='flex w-[50%] h-[60%]  justify-center items-center  relative  '>
                        <div className="T__  ">
                            <div className="T__slides   ">
                                <div className="T__slide  w-full  h-full">
                                    <div className="bg-[url('/images/teams/web-design.jpg')] T__slideBg "></div>
                                    <div className="T__slideContent  "> 
                                        <span className='    translate-x-[45vw]   h-full '>
                                            <span >
                                                <h4  className=' ' >{DataTeam.DesignTeam.title}</h4>
                                                <p className='flex'>
                                                        <div className=' difBgColor  lTag'></div>  
                                                        {DataTeam.DesignTeam.job1}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <div className="bg-[url('/images/teams/manegerpng.png ')]   absolute right-0 top-11 "></div>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.DesignTeam.job2}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.DesignTeam.job3}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                            </span>
                                        </span>  
                                    </div>
                                </div>
                                <div className="T__slide  w-full  h-full">
                                    <div className="bg-[url('/images/teams/dataEntry.jpg')] T__slideBg "></div>
                                    <div className="T__slideContent"> <span className='   translate-x-[45vw]  w-full  h-full '>
                                            <span >
                                            <h4>{DataTeam.DataEntryTeam.title}</h4>
                                                <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.DataEntryTeam.job1}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.DataEntryTeam.job2}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.DataEntryTeam.job3}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                            </span>
                                        </span>  
                                    </div>
                                </div>
                                <div className="T__slide w-full  h-full">
                                    <div className="bg-[url('/images/teams/programming.jpg')] T__slideBg "></div>
                                    <div className="T__slideContent"> <span className='   translate-x-[45vw]  w-full  h-full '>
                                            <span >
                                            <h4>{DataTeam.ProgrammingTeam.title}</h4>
                                                <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.ProgrammingTeam.job1}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.ProgrammingTeam.job2}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.ProgrammingTeam.job3}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                            </span>
                                        </span>  
                                    </div>
                                </div>
                                <div className="T__slide w-full  h-full">
                                    <div className="bg-[url('/images/teams/ProtectionSystems.jpeg')] T__slideBg "></div>
                                    <div className="T__slideContent"> <span className='  translate-x-[45vw] w-full  h-full '>
                                            <span >
                                            <h4  className=' '>{DataTeam.ProtectionTeam.title}</h4>
                                            <p className='flex'>
                                                    <div className='difBgColor lTag'></div> 
                                                    {DataTeam.ProtectionTeam.job1}
                                                    <div className=' difBgColor  rTag'></div> 
                                                </p>
                                                <p className='flex'>
                                                    <div className='difBgColor lTag'></div> 
                                                    {DataTeam.ProtectionTeam.job2}
                                                    <div className=' difBgColor  rTag'></div> 
                                                </p>
                                                <p className='flex'>
                                                    <div className='difBgColor lTag'></div> 
                                                    {DataTeam.ProtectionTeam.job3}
                                                    <div className=' difBgColor  rTag'></div> 
                                                </p>
                                                <p className='flex'>
                                                    <div className='difBgColor lTag'></div> 
                                                    {DataTeam.ProtectionTeam.job4}
                                                    <div className=' difBgColor  rTag'></div> 
                                                </p>
                                            </span>
                                        </span>  
                                    </div>
                                </div>
                                <div className="T__slide w-full  h-full">
                                    <div className="bg-[url('/images/teams/maneger1.webp')] T__slideBg "></div>
                                    <div className="T__slideContent"> <span className='   translate-x-[45vw] w-full   h-full '>
                                            <span >
                                            <h4>{DataTeam.ManagementTeam.title}</h4>
                                            <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.ManagementTeam.job1}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.ManagementTeam.job2}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                                    <p className='flex'>
                                                        <div className='difBgColor lTag'></div>  
                                                        {DataTeam.ManagementTeam.job3}
                                                        <div className=' difBgColor  rTag'></div>  
                                                    </p>
                                            </span>
                                        </span>  
                                    </div>
                                </div>
                            </div>
                            <div className="T__shutters"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
