
'use client'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import { useContext, useState } from 'react';
import PricingHR from '@/components/(pages)/PricingHR/PricingHR';
export default function CardGA1({id,title,text}:any) {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
const [openInfo,setOpenInfo]=useState(false)
    return (
        <div>
            <style jsx>{`
                            ${ (theme=='dark') ? 
                            ' .boxCardGA1 { background-color: #161616;}' 
                            : ' .boxCardGA1 {background-color: var(--section-background);}' }
                            ${ (theme=='dark') ? 
                            ' .boxCardGA1::before { background-color:  var(--main-color);}' 
                            : ' .boxCardGA1::before {background-color:  var(--main-color);}' }
                            ${ (theme=='dark') ? 
                            ' .boxCardGA1 .info { background-color: #111;}' 
                            : ' .boxCardGA1 .info {background-color:  #d1d1d1;}' }
                            ${ (theme=='dark') ? 
                            ' .boxCardGA1 .info::before { background-color:var(--main-color); color:#999;}' 
                            : ' .boxCardGA1 .info::before {background-color:var(--main-color); color: white;}' }
                            ${ (theme=='dark') ? 
                            ' .boxCardGA1 .info.info::after { background-color:#1d1d1d;}' 
                            : ' .boxCardGA1 .info.info::after {background-color:  #c2c2c2;}' }

                            ${ (openInfo) ? 
                            ` .boxInfo${id}{ height: 80vhpx;}` 
                            : '.boxInfo{ height:0;}' }
                                .boxInfo{
                                transition:all var(--main-transition);

                            }
                .boxCardGA1 {
                
                    boxCardGA1-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
                    counter-increment: CodeUse;
                    transition: var(--main-transition);
                    position: relative;
                }
                .boxCardGA1::before {
                    content:'' ;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 3px;
                    top: -3px;
                    position: absolute;
                    width: 0;
                    transition: var(--main-transition);
                }
                .boxCardGA1:hover {
                    transform: translateY(-10px);
                }
                .boxCardGA1:hover::before {
                    width: 100%;
                }
                .boxCardGA1 > h3 {
                    text-align: center;
                    margin: 50px  80px;
                    padding-top:30px;
                    font-size: 25px;
                    color: var(--main-color);
                }
                .boxCardGA1 .info {
                    padding: 15px;
                    position: relative;
                    text-align: right;
                }
                .boxCardGA1 .info::before {
                    content: '0${id}' ;
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 80px;
                    font-size: 30px;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-right: 15px;
                }
                .boxCardGA1 .info::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 80px;
                    width: 50px;
                    height: calc(100% + 0.4px);
                    transform: skewX(-30deg);
                }
                .boxCardGA1 .info  {
                    color: var(--main-color);
                }

            `}</style>
            <div className="boxCardGA1"
            onClick={()=>{setOpenInfo(true)}}
            >
                <h3>{title}</h3>
                <div className="info">
                    {text}
                </div>
            </div>

            <div className={`flex flex-col overflow-hidden z-20  absolute boxInfo w-[100vw] top-[100px] left-0 bg-slate-500`+' '+' boxInfo'+{id} }>
                <span className='flex h-[40px]  justify-center items-center align-middle w-[40px] cursor-pointer   border-solid border-[2px] rounded-sm  m-10  text-[20px] '  onClick={()=>{setOpenInfo(false)}} >
                    x
                </span>
                <span className='flex flex-col relative w-full h-full'>
                <h3>{title}</h3>
                <PricingHR />
                </span>
            </div>

        </div>
    )
}







