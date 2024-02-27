'use client'

import {useContext} from "react";
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import TeamsAI from '@/components/TeamsAI/TeamsAI'
import DataAbout from '@/assets/json/DataAbout.json'
import Image from "next/image";

export default function About() {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const Data=(lang=='Ar')?DataAbout.ar:(lang=='En')?DataAbout.en:DataAbout.tr;



    return (
       
        <div className=' themeac'>
            <style jsx>{`
                ${  (lang=='Ar') ?  
                'p,h4 {  text-align: right;}'
                : '* {  }'
                }
                ${ (theme=='dark') ?  
                `.themeac { color:#fff; background-color:#000;}`
                : `.themeac {  background-color:#fff; color:#000;}`
                }
                h4{
                    font-size:20px;
                    box-shadow: 3px 3px #1a68a9, -1em 0 .4em #71b5ee;
                    padding: 1rem;
                }
                p{ 
                    padding-left: 1.75rem;
                    padding-right: 1.75rem;
                }
                @media (min-width:0px) {
                    p{font-size:12px;}
                    h4{font-size:18px;}
                }
                @media (min-width: 768px) {
                    p{font-size:16px;}
                    h4{font-size:28px;}
                }
                @media (min-width: 992px) {
                    p{font-size:18px;}
                    h4{font-size:40px;}
                }
                @media (min-width: 1200px) {
                    p{font-size:20px;}
                    h4{font-size:52px;}
                }
                .borderAI{
                    border:solid  2px ;
                    border-radius: 0.375rem;
                    padding: 0.5rem;
                }
            `}</style>
            <div className='flex themeac flex-col p-20 gap-10  mt-[100px]  w-[100vw]'>
                <div>
                    <div className='flex flex-col relative  gap-6'  >
                    <h4 >{Data.DataWe.title}</h4>
                    <p>{Data.DataWe.text1}</p>
                    <p>{Data.DataWe.text2}</p>
                    <p>{Data.DataWe.text3}</p>
                    <p>{Data.DataWe.text4}</p>
                    </div>
                </div>
                <div className=' gap-3 mt-5'>
                    <h4>{Data.DataLangugeUse.title}</h4>
                    <p className='flex flex-row p-5 mt-10  gap-4 w-full justify-evenly flex-wrap'>
                        {
                            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((i)=>{
                                return(
                                    <>
                                    <span  className='borderAI flex justify-center align-middle items-center'>
                                    <Image 
                                        width={100} 
                                        height={50} 
                                        alt="HTML5" 
                                        className=''
                                        src={`/images/langUse/${i}.png`}
                                    />  
                                    </span>
                                    </>
                                )
                            })
                        }
                    </p>
                </div>
                
            </div>
            <div className='flexw-[100vw]'>
                    <TeamsAI />
                </div>
        </div>
    )
}




