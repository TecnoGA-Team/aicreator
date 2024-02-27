"use client"

import React,{useContext, useEffect, useState} from 'react'
import { LangContext } from '@/context/LangContext';
import { ThemeContext } from '@/context/ThemeContext';

export default function LangToggle() {
    const {theme}:any=useContext(ThemeContext)
    const {lang,changeLang}: any = useContext(LangContext);
    const [isOpenList,setIsOpenList]=useState(false);
    const handleOpenList=()=>{
        setIsOpenList(!isOpenList)
    }
    const handleEn=()=>{
        changeLang('En');
        setIsOpenList(!isOpenList)
    }
    const handleAr=()=>{
        changeLang('Ar');
        setIsOpenList(!isOpenList)
    }
    const handleTr=()=>{
        changeLang('Tr');
        setIsOpenList(!isOpenList)
    }


    return (
        <div className='flex justify-center  overflow-hidden   items-center  m-0'>    
                <style jsx>{`
                    ${ (theme=='dark') ? '.borderGA{  border-color: white; }' : '.borderGA { border-color: black;}' }
                    ${ (theme=='dark') ? '.colorGA{  color: white; }' : '.colorGA { color: black;}' }
                    
                    .liLang{
                        display: flex;
                        justify-content: center;
                        width: 37px;
                    }
            
                    .borderGA{
                        border-style: solid;
                        border-width: 1px;
                        border-radius:4px
                    }
                    .trans{
                        transition: height   .6s;
                    }
                `}
                </style>

            <ul className='flex flex-col justify-center h-[30px] items-center  overflow-hidden '>
                <li className='flex btnLang  items-center align-middle  h-[35px] cursor-pointer  relative w-[38px]'
                onClick={handleOpenList}
                >
                    <div className='flex  colorGA   w-[45px]  translate-y-[4px]'>
                        <span  className=' font-bold text-[16px] pl-1'>{lang+' '} </span>
                        <span className={!isOpenList?'flex   absolute right-[0px] top-1 text-[24px]':'hidden'}>&#129171;</span>
                        <span className={isOpenList?'flex absolute right-[0px] top-[-16px]  text-[24px]':'hidden'}>&#129169;</span>
                    </div>

                </li>
                <li className=''>

                        <div 
                        className={
                            isOpenList?
                                ' flex absolute mt-2  translate-x-[-19px] trans h-[84px]  flex-col justify-center borderGA'
                                :'h-0 absolute mt-2    translate-x-[-19px]  trans flex-col overflow-hidden'}
                        >
                            <div>
                            <button type="button" 
                                    onClick={handleAr}
                                className='liLang arbtn colorGA ' 
                            >
                            {/* Ar icon */}
                                Ar
                            </button>
                            </div>
                            <div>
                            <button type="button" className='liLang enbtn colorGA'  
                                    onClick={handleEn}
                                > 
                                    {/* En icon */}
                                    En
                                </button>
                            </div>
                            <div>
                                <button type="button" className='liLang trbtn colorGA'  
                                    onClick={handleTr}
                                > 
                                    {/* Tr icon */}
                                    Tr
                                </button>
                            </div>
                        </div>
                 

                </li>

            </ul>
        </div>
    )
}
