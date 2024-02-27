"use client"



import React, { Suspense, useEffect, useState } from 'react'



import {useContext} from "react";
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import Image from 'next/image';

import logo from '@/assets/imgs/logo/logo-AC-1.png'
import dataNav from '@/assets/json/DataNavbar.json'
import ThemeToggle from '@/components/compo/ThemeToggle/ThemeToggle';

import LangToggle from '@/components/compo/LangToggle/LangToggle';
import { ButtonNavMenu } from '@/components/compo/buttonsGA/ButtonNavMenu';

import LinkAC from '../compo/LinkAC/LinkAC';

export default function HeaderNavAC() {


    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const DataNav=(lang=='Ar')?dataNav.ar:(lang=='En')?dataNav.en:dataNav.tr;

    const [isNavTop,setIsNavTop]=useState(false)
    useEffect(() => {
        var prevScrollpos = window.scrollY;
        window.onscroll = function() {

            var currentScrollPos =window.scrollY;
            if (prevScrollpos > currentScrollPos) {
                setIsNavTop(false);
            } else {
                if(!navItemMenu.isOpenMenu){
                    setIsNavTop(true)
                    setNavItem({
                        ...navItem,
                        isOpenTap2:false,
                        isOpenTap3:false,
                        isOpenTap1: false
                    });
                }
            }
            
            prevScrollpos = currentScrollPos;
            
        }
    })

    const [navItem,setNavItem]=useState({
        isOpenMenu:false,
        isOpenTap1:false,
        isOpenTap2:false,
        isOpenTap3:false
    })
    const [navItemMenu,setNavItemMenu]=useState({
        isOpenMenu:false,
        isOpenTap1:false,
        isOpenTap2:false,
        isOpenTap3:false
    })

    function handleMenuOpenChange() {
        setNavItemMenu({
            ...navItemMenu,
            isOpenMenu:!navItemMenu.isOpenMenu,
            isOpenTap1:false,
            isOpenTap2:false,
            isOpenTap3: false
            });

    }

    function handleisOpenTap1Change() {

            setNavItem({
                ...navItem,
                isOpenTap2:false,
                isOpenTap3:false,
                isOpenTap1: !navItem.isOpenTap1
            });
    }
    function handleisOpenTap1MenuChange() {
        
            setNavItemMenu({
                ...navItemMenu,
                isOpenTap2:false,
                isOpenTap3:false,
                isOpenTap1: !navItemMenu.isOpenTap1
            });
    }
    function handleisOpenTap2Change() {
            setNavItem({
                ...navItem,
                isOpenTap1:false,
                isOpenTap3:false,
                isOpenTap2: !navItem.isOpenTap2
            });
    }
    function handleisOpenTap3Change() {
            setNavItem({
                ...navItem,
                isOpenTap1:false,
                isOpenTap2:false,
                isOpenTap3: !navItem.isOpenTap3
            });
    }

    const [need,setNeed]=useState(false);

    return (
            <div>
                <style jsx>{`
                    ${ (theme=='dark') ?  
                        `.themeGA { color:#fff; background-color:#000;}
                        .themeGAnav { color:#fff; background-color:#00000090;}
                        .linkNav { color:#949494;}
                        .indicator {  background-color:#fff;}
                        .linkNav { color:#949494;}
                        .tabImg { filter:invert(100%);}
                        .linkNav:hover { color:#fff;}
                        .navbar {border-bottom:solid 2px #111; }
                        `
                        : 
                        `.themeGA {  background-color:#fff; color:#000;}
                        .themeGAnav {  background-color:#ffffff90; color:#000;}
                        .linkNav { color:#555;}
                        .indicator {  background-color:#333; }
                        .linkNav { color:#555;}' }
                        .linkNav:hover { color:#222;}
                        .navbar {border-bottom:solid 2px #f1f1f1; }
                        `
                    }

                    ${navItemMenu.isOpenMenu?'.navMenuBoxGA{  width: 100vh;}':'.navMenuBoxGA{ width: 0vh;}'}
                    ${ isNavTop ? '.navbar{top:-150px;}' 
                                : '.navbar{top: 0px;}' }
                    ${ isNavTop ? '.tapNavbar{top:-250px;}' 
                                : '' }
                    ${navItem.isOpenTap1?'.indicator {left: 25%; background:linear-gradient(130deg, #00e2ff, #89ff00);}'
                                :''}
                    ${navItem.isOpenTap2?'.indicator {left: 50%; background: linear-gradient(130deg, purple, palevioletred);}'
                                :''}
                    ${need?'.needDiv { height: 150px;}':'.needDiv {  height: 0;}'}

                    .nav-items{
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        li {
                            transition: all 0.2s ease-in-out;
                            &:hover{
                                color: #777;
                                transform: scale(1.1);
                            }     
                        }
                        li div span{&:hover{transform: scale(1.2);}}
                    }
                    .navMenuBoxGA {
                        position: fixed;
                        top:100px;
                        height: calc(100% - 100px); 
                        transition: width 0.7s;
                        z-index: 110;
                    }
                    .navbar {
                        position: fixed;
                        width: 100%; 
                        transition: top 0.7s;
                        z-index: 100;
                    }
                    .tapNavbar{
                        transition: top 0.7s;
                        position: fixed;
                        left: 0px;
                        height: 200px;
                        width: 100vw;
                        z-index: 120;
                    }
                    .tapUp{top:-550px;}
                    .tapDown{top: 100px;}
                    .tapNavbarMenu{
                        transition: left 0.7s;
                        position: fixed;
                        height: ( 100vw - 100px );
                        width: 100vw;
                        top:100px;
                        z-index: 120;
                    }
                    .linksNav {
                        width: 650px;
                        display: flex;
                        position: absolute;
                    }                       
                    .linkNav {
                        display: flex;
                        justify-content: center;
                        position: relative;
                        width: 25%;
                        text-align: center;
                        text-decoration: none;
                        font-size: 20px;
                        padding: 10px 20px;
                        transition: 0.2s ease color;
                    }
                    .linkNav:before,
                    .linkNav:after {
                        content: "";
                        position: absolute;
                        border-radius: 50%;
                        transform: scale(0);
                        transition: 0.2s ease transform;
                    }                      
                    .linkNav:before {
                        top: 0;
                        left: 10px;
                        width: 6px;
                        height: 6px;
                    }
                    .linkNav:after {
                        top: 5px;
                        left: 18px;
                        width: 4px;
                        height: 4px;
                    }
                    .linkNav:before {background-color: #2481d5;}
                    .linkNav:after {background-color:#145e9e;}
                    .indicator {
                        position: absolute;
                        left: 1%;
                        bottom: 0;
                        width: 150px;
                        height: 3px;
                        border-radius: 5px;
                        transition: 0.5s ease left;
                    }
                    .linkNav:hover:before,
                    .linkNav:hover:after {transform: scale(1);}
                    .linkNav:hover ~ .indicator {background: linear-gradient(190deg,#c8e2f1, #145e9e);}
                    .linkNav:nth-child(1):hover ~ .indicator {left: 1%;}
                    .linkNav:nth-child(2):hover ~ .indicator {left: 26%;}
                    .linkNav:nth-child(3):hover ~ .indicator {left: 51%;}
                    .linkNav:nth-child(4):hover ~ .indicator {left: 76%;}
                    .tapNavbarUl{
                        display: flex;
                        width: 100%;
                        position: relative;
                        gap:  18px;
                        justify-content: space-evenly;
                        align-items: center;
                        padding: 40px ;
                        flex-direction: row;
                    }
                    .navMenuBoxGA {
                        position: fixed;
                        top:100px;
                        height: calc(100% - 100px); 
                        transition: width 0.7s;
                        z-index: 100;
                    }
                    .transH{transition:  height 0.7s;}
                `}</style> 

                <div  className='navbar flex  flex-row w-[100vw]  justify-between  items-center px-10  border-b-2  relative  themeGAnav '>   
                        
                    <div onClick={handleMenuOpenChange} className="flex lg:hidden  w-[30px] h-[30px] p-0 m-0  justify-center items-center" >
                        <ButtonNavMenu />
                    </div>

                    <div className=' flex justify-center items-center p-5'>
                        <Image
                            className="relative "
                            src={logo}
                            alt="Logo"
                            width={80}
                            height={80}
                            priority
                        />
                    </div>

                    <div className="hidden lg:flex   overflow-hidden  justify-evenly items-center w-[650px] h-[90px] ">
                        <div className=' linksNav  '>

                            <span  onClick={handleisOpenTap1Change} className='linkNav' >
                                <LinkAC  text={DataNav.navHome.title} href='/' cn='' />
                            </span>
                            <span  onClick={handleisOpenTap1Change} className='linkNav' >
                                <LinkAC  text={DataNav.navOurBusiness.title} href='/#Business' cn='' ></LinkAC>
                            </span>
                            <span  className='linkNav' >
                                <LinkAC href='/GalleryPage' text={DataNav.navGallery.title}  cn=''></LinkAC>
                            </span>
                            <span className=' linkNav'>
                                <LinkAC text= {DataNav.navAbout.title} href='/AboutPage' cn='' > </LinkAC>
                            </span>
                            <div  className='indicator'></div>

                        </div>
                    </div>

                    <div className='flex  items-center  gap-4 overflow-hidden'>
                        <div className='flex w-[45px] h-[35px]  justify-center pl-1 items-center '>
                            <LangToggle />
                        </div>
                        <div className='flex  translate-y-[-2px] translate-x-[2px] justify-center  h-[35px] w-[35px]  '>
                            <ThemeToggle />
                        </div>
                        
                        <div className='flex w-[35px] h-[35px]  text-[25px] items-center'>
                            <LinkAC   href='/' cn='' >
                                <span className={theme=='dark'?' flex relative  invert':' flex relative overflow-hidden'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 64 64">
                                        <path d="M 32 8 C 31.08875 8 30.178047 8.3091875 29.435547 8.9296875 L 8.8007812 26.171875 C 8.0357812 26.810875 7.7634844 27.925203 8.2714844 28.783203 C 8.9184844 29.875203 10.35025 30.088547 11.28125 29.310547 L 12 28.710938 L 12 47 C 12 49.761 14.239 52 17 52 L 47 52 C 49.761 52 52 49.761 52 47 L 52 28.712891 L 52.71875 29.3125 C 53.09275 29.6255 53.546047 29.777344 53.998047 29.777344 C 54.693047 29.777344 55.382672 29.416656 55.763672 28.722656 C 56.228672 27.874656 55.954891 26.803594 55.212891 26.183594 L 52 23.498047 L 52 15 C 52 13.895 51.105 13 50 13 L 48 13 C 46.895 13 46 13.895 46 15 L 46 18.484375 L 34.564453 8.9296875 C 33.821953 8.3091875 32.91125 8 32 8 z M 32 12.152344 C 32.11475 12.152344 32.228766 12.191531 32.322266 12.269531 L 48 25.369141 L 48 46 C 48 47.105 47.105 48 46 48 L 38 48 L 38 34 C 38 32.895 37.105 32 36 32 L 28 32 C 26.895 32 26 32.895 26 34 L 26 48 L 18 48 C 16.895 48 16 47.105 16 46 L 16 25.367188 L 31.677734 12.269531 C 31.771234 12.191531 31.88525 12.152344 32 12.152344 z"></path>
                                    </svg>
                                </span>
                            </LinkAC>
                        </div>
                    </div>

                </div>
                
        
                <div className='navMenuBoxGA    flex overflow-hidden   w-[100vw]  border-b-2 pt-7  bg-black  relative  themeGAnav '>

                        <ul className=' flex flex-col relative overflow-hidden  w-[100vw] nav-items '>

                            <li><span className=' p-2'><LinkAC text={DataNav.navHome.title} href='/' cn='' /> </span></li>
                            <li>
                                <span 
                                    onClick={()=>{setNeed(!need)}}
                                    className='flex flex-col  p-4 pb-0  cursor-pointer'
                                >
                                    {DataNav.navOurBusiness.title}
                                    <div className=' flex flex-col overflow-hidden  items-center transH needDiv gap-5  pt-4  '>
                                    <span><LinkAC text={DataNav.navOurBusiness.child.nav2.title} href='/JobWebsitePage' cn='' /> </span>
                                    <span><LinkAC text={DataNav.navOurBusiness.child.nav3.title} href='/JobHRPage' cn='' /> </span>
                                    <span><LinkAC text={DataNav.navOurBusiness.child.nav1.title} href='/JobDesignPage' cn='' /> </span>
                                    </div>
                                </span>
                            </li>
                            
                            <li><span className=' p-2'><LinkAC href='/GalleryPage' cn='' text={DataNav.navGallery.title} /> </span></li>
                            <li> <span className=' p-2'><LinkAC text={DataNav.navAbout.title} href='/AboutPage' cn='' /> </span></li>
                        </ul>
                
                    </div>

            


        </div>
    )
}

