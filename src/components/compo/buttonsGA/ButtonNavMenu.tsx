"use client"
import React, { useState } from 'react'

import {useContext} from "react";
import { ThemeContext } from '@/context/ThemeContext';
export const ButtonNavMenu = () => {
    const {theme}:any=useContext(ThemeContext)
    

        const [isOpenMenu, setIsOpenMenu] = useState(false)
    
        return (
    
            <div  className='flex gap-3 relative p-0 m-0 w-[30px] h-[30px] bg-transparent cursor-pointer'>
    
                <style jsx>
                    {`
                            ${ (theme=='dark') ?   '.linesMenu { background-color:#fff; }'
                            : '.linesMenu {  background-color:#333; }'}
    
                            ${ isOpenMenu ? '.line04Menu {opacity: 0;  } ' : '.line04Menu {transform:translateY(-10px);  } ' }
                            ${ isOpenMenu ? '.line05Menu {opacity: 0; } ' : '.line05Menu {transform:translateY(10px); } ' }
                            
                            ${ isOpenMenu ? '.line01Menu {  rotate: -45deg; transform:translateY(0px);} ' : '' }
                            ${ isOpenMenu ? '.line02Menu {  rotate: 45deg; transform:translateY(0);} ' : '' }
                            ${ isOpenMenu ? '.line03Menu {  opacity: 0;} ' : '.line03Menu { opacity: 100;  } ' }
                            
                            .boxMenu{
                                display: flex;
                                justify-content: center;
                                position: relative;
                                width: 30px;
                                height:30px;
                                border-radius: 15px;
                                flex-direction: column;
                            }
                            .linesMenu{
                                border-radius: 5px;
                                display: flex;
                                width: 30px;
                                height:3px;
                                position: absolute;
                            }

                            .linesMenu1{
                                transition: all 1s;
                            }
    
                            .linesMenu2{
                                transition: transform .4s .6s;
                            }
                    `}
                </style>

                <div
                className='   boxMenu  bgbox  gap-1 '
                onClick={(e)=>{
                    setIsOpenMenu(!isOpenMenu)
                }}
                >
                    <span className=' linesMenu  linesMenu1   line01Menu '></span>
                    <span className=' linesMenu  linesMenu1   line02Menu '></span>
                    <span className=' linesMenu  linesMenu1   line03Menu '></span>
                    <span className=' linesMenu  linesMenu2   line04Menu '></span>
                    <span className=' linesMenu  linesMenu2   line05Menu '></span>
    
                </div>
    
            
            </div>
        )

}
