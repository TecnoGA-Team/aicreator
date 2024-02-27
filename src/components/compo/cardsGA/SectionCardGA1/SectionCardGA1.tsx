'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import CardGA1 from '../CardGA1/CardGA1';


export default function SectionCardGA1({title,data}:any) {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);



    
    return (
        <div>

            <style jsx>
                {`
                    ${ (theme=='dark') ? 
                    '.SectionCardGA1 { background-color: var(--section-background-dark-2);}' 
                    : '.SectionCardGA1 {background-color: var(--section-background-2);}' }

                    .SectionCardGA1 {
                        padding-top: var(--main-padding-top);
                        padding-bottom: var(--main-padding-bottom);
                        position: relative;
                    }
                    .SectionCardGA1 .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 40px;
                    }





                `}
            </style>

            <div>
                <div className="SectionCardGA1">
                    <h2 className="main-title">{title}</h2>
                    <div className="container">
                        {
                        data.map((card:any)=>{
                            return(
                                <>
                                <CardGA1 id={card.id}  title={card.title} text={card.text}/>
                            
                                </>

                            )
                        })

                        }

                    </div>
                </div>
        </div>

            
        </div>
    )
}


// .SectionCardGA1 {
//     padding-top: var(--main-padding-top);
//     padding-bottom: var(--main-padding-bottom);
//     position: relative;
   
//   }
//   .SectionCardGA1 .container {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     gap: 40px;
//   }
//   .SectionCardGA1 .box {
   
//     box-shadow: 0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%);
//     counter-increment: SectionCardGA1;
//     transition: var(--main-transition);
//     position: relative;
//   }
//   .SectionCardGA1 .box::before {
//     content: "";
//     left: 50%;
//     transform: translateX(-50%);
//     height: 3px;
//     top: -3px;
//     position: absolute;
//     width: 0;
//     transition: var(--main-transition);
//   }
//   .SectionCardGA1 .box:hover {
//     transform: translateY(-10px);
//   }
//   .SectionCardGA1 .box:hover::before {
//     width: 100%;
//   }
//   .SectionCardGA1 .box > i {
//     margin: 30px auto 20px;
//     display: block;
//     text-align: center;
//     color: #d5d5d5;
//   }
//   .SectionCardGA1 .box > h3 {
//     text-align: center;
//     margin: 20px 0 40px;
//     font-size: 25px;
//     color: var(--main-color);
//   }
//   .SectionCardGA1 .box .info {
//     padding: 15px;
//     position: relative;
//     text-align: right;
//   }
//   .SectionCardGA1 .box .info::before {
//     content: "0" counter(SectionCardGA1);
//     position: absolute;
// /
//     left: 0;
//     top: 0;
//     height: 100%;
//     width: 80px;
//     font-size: 30px;
//     font-weight: bold;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-right: 15px;
//   }
//   .SectionCardGA1 .box .info::after {
//     content: "";
//     position: absolute;

//     top: 0;
//     left: 80px;
//     width: 50px;
//     height: calc(100% + 0.4px);
//     transform: skewX(-30deg);
//   }
//   .SectionCardGA1 .box .info a {
//     color: var(--main-color);
//   }

