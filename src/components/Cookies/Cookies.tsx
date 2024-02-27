'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';


import DataCookies from  '@/assets/json/DataCookies.json'

export default function Cookies() {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const DataC=(lang=='Ar')?DataCookies.ar:(lang=='En')?DataCookies.en:DataCookies.tr;

    // const [storedCookies,setStoredCookies]=useState(localStorage.getItem('Cookies')||'false')


    const [infoCookies,setInfoCookies]=useState(false)
    const [openCookies,setOpenCookies]=useState(false)
    const  handleTrueCookies=()=>{
        setOpenCookies(false);
        // setStoredCookies('true');
        localStorage.setItem('Cookies','true');
        setClassHight('h-0')
    }
    const handleOnClickOpenInfo=()=>{
        setInfoCookies(true);
    }
    const handleOnClickCloseInfo=()=>{
        setInfoCookies(false);
    }

    const [classHight,setClassHight]=useState('h-0')



    useEffect(() => {
        if(((localStorage.getItem('Cookies'))=='false')||((localStorage.getItem('Cookies'))==null))
        setTimeout(() => {
            setClassHight(' h-[150px]')
        }, 2000);
    },[]);





    return (
        <div >
                <style jsx>
                    {`
                        ${ (theme=='dark') ? 
                        '.Business { background-color: var(--section-background-dark);}' 
                        : '.Business {background-color: var(--section-background);}' }
                        ${ (infoCookies) ? 
                        '.infoCookiesBox {  height: 400px;}' 
                        : '.infoCookiesBox {   height: 0px;}' }
                        ${ (theme=='dark') ? 
                        '.Business .box .img-holder::after { border-color: transparent transparent var(--section-background-dark) transparent;}' 
                        : '.Business .box .img-holder::after {border-color: transparent transparent var(--section-background) transparent;}' }
                        
                        .infoCookiesBox{
                        position: fixed;
                        top: 100px;
                        }
                        .infoCookiesBoxDiv {
                            border: 3px solid #fff;
                            color:#444;
                        }
                        .trans{
                            transition:all 2s 0s;
                        }
                        .trans2{
                            transition:all 1s 0s;
                        }
    
                    `}
                </style>

            <div 
                className={'fixed   trans  z-50  bottom-0 w-full  bg-[#6f939096]  border-t-2 transition-all ' + ' ' + classHight}
            >

                <div 
                    className=' flex CookiesBoxDiv flex-col lg:flex-row   gap-3 p-5 text-[18px] align-middle justify-center items-center '>
                    <div className=' flex flex-row gap-3  justify-start  items-center'>
                        <h3 className=' text-[28px] uppercase font-black text-sky-950 '>{DataC.CookiesBox.title}</h3>
                        <p className='  '>{DataC.CookiesBox.text}</p>
                    </div>

                    <div className=' flex relative  justify-end  text-[14px] '>
                        <span 
                            onClick={handleOnClickOpenInfo}
                            
                            className=' flex p-2  cursor-pointer bg-opacity-35 align-middle items-center   justify-center bg-slate-400   hover:bg-opacity-80 m-2 border-solid border-[2px] rounded-md'> 
                            {DataC.CookiesBox.button1}
                        </span>
                        <span 
                        onClick={handleTrueCookies}
                        className='flex p-2 cursor-pointer  align-middle items-center  justify-center bg-opacity-35 bg-lime-200 hover:bg-opacity-60 m-2 border-solid border-[2px] rounded-md'> 
                            {DataC.CookiesBox.button2}

                        </span>
                    </div>

                </div>

                <div className=' flex  w-[95vw]  trans2 border-solid  justify-center     items-center  infoCookiesBox overflow-hidden'>
                        <div className=' flex flex-col  gap-2  rounded-lg  border-[2px]   w-[330px] text-[12px]  sm:text-[16px] sm:w-[600px]   p-5   border-t-2 bg-slate-300'>
                            <h3 className=' text-[24px] uppercase font-black text-sky-950 '>{DataC.CookiesBox.title}</h3>
                            <p className='   '>{DataC.CookiesBox.box}</p>
                            <span 
                                onClick={handleOnClickCloseInfo}
                                className=' flex p-2 justify-center cursor-pointer   bg-opacity-35 bg-lime-600 hover:bg-opacity-60 m-2 border-solid border-[2px] rounded-md'> 
                                {DataC.CookiesBox.button2}
                            </span>
                        </div>

                </div>
                
            </div>
            
        </div>
)

}
