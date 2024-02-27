'use client'
import React, { useRef } from 'react'
import Image from 'next/image'


import { Abril_Fatface } from 'next/font/google'
import hover3d from '../../utils/Hover3D'
import TextAnimation2 from '../compo/textAnimation/TextAnimation2/TextAnimation2'
import TextAnimation5 from '../compo/textAnimation/TextAnimation5/TextAnimation5'
import TextAnimation4 from '../compo/textAnimation/TextAnimation4/TextAnimation4'
import TextAnimation1 from '../compo/textAnimation/TextAnimation1/TextAnimation1'

import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import SectionLayout from "../SectionLayout/SectionLayout";


import Fullpage from "../Fullpage/Fullpage";
import TextSection from "../TextSection/TextSection";

import ZoomSection from "../ZoomSection/ZoomSection";
import HorizontalWrapper from "../HorizontalWrapper/HorizontalWrapper";
import Business from '../Business/Business'

import {useContext} from "react";
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';

import dataHome from '@/assets/json/DataHome.json'
import ThemeToggle from '@/components/compo/ThemeToggle/ThemeToggle';
import LangToggle from '@/components/compo/LangToggle/LangToggle';

import t1 from "/images/temblateSecrol/homeT0.png";
import t2 from "/images/temblateSecrol/homeT1.png";
import t3 from "/images/temblateSecrol/homeT2.png";
import t4 from "/images/temblateSecrol/homeT3.png";
import t5 from "/images/temblateSecrol/homeT4.png";
import Card from '../Card/Card'

const abril=Abril_Fatface({
    subsets:['latin'],
    weight:'400',   
})

function MainHeaderLG() {

  const {theme}: any = useContext(ThemeContext);
  const {lang}: any = useContext(LangContext);
  const dataHomeLg=(lang=='Ar')?dataHome.ar:(lang=='En')?dataHome.en:dataHome.tr;

  const cardsTemplateHome = [
      {
          id: 1,
          title: "Template 1",
          description: "Template",
          image: t1,
          link: "/",
      },
      {
          id: 2,
          title: "Template ",
          description: "Template",
          image: t2,
          link: "/",
      },
      {
          id: 3,
          title: "Template ",
          description: "Template",
          image: t3,
          link: "/",
      },
      {
          id: 4,
          title: "Template ",
          description: "Template",
          image: t4,
          link: "/",
      },
      {
          id: 5,
          title: "Template",
          description: "Template",
          image: t5,
          link: "/",
      }
  ];

    const video = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
      target: video,
      offset: ["start end", "end start"],
    });
  
    const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
    const scale = useTransform(
      scrollYProgress,
      [0, 0.6, 0.8, 0.9],
      [1, 0.8, 0.8, 0]
    );

    const hero=useRef<HTMLDivElement>(null);

    const hoverHero = hover3d(hero, {
        x:30,
        y:-40,
        z:30
    });
    const imageHover = hover3d(hero, {
        x:20,
        y:-5,
        z:11
    });

    return (
    
        <div ref={hero} className='childContentHeader' >
            {
            /* 
            <nav>

                <div className="logo">
                    <Image src={logo} alt='logo' width={128} height={77} />
                    <h2>ai</h2>
                </div>

                <div className="input">
                    <input type='text' placeholder='Search' />
                </div>

                <ul className=' nav-items'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                    <a href='#'>Actions</a>

                    </li>
                    <li>
                    <a href='#'>Marketplace</a>
                    </li>
                    <li>
                    <a href='#'>About</a>
                    </li>
                    <Button name='Connect' icon={<FaWallet />} />
                </ul>
            </nav> 
            */
            }

            <div className="flex  flex-row w-full h-[100vh] px-10 py-20  xl:px-30 justify-center align-middle items-center">
                <div className='flex flex-col  w-[70vw]  xl:w-[50vw] h-[100vh]  justify-center  gap-20 align-middle items-center'>
                        <span className=' text-[36px]  '>
                            <TextAnimation2 text1={dataHomeLg.textHeader.text8+','} text2={dataHomeLg.textHeader.text4} width='200px' />
                        </span>
                        <div className='flex flex-col justify-center align-middle items-center gap-[50px] p-5'>
                          <span className=' text-[26px]  '>
                          <TextAnimation5 text={dataHomeLg.textHeader.text5 +','+dataHomeLg.textHeader.text6+','+dataHomeLg.textHeader.text7} />
                          </span>
                        </div>
                        
                        <span className='flex translate-x-8  z-10  '>
                            <TextAnimation4  h='100px'  text0={dataHomeLg.textHeader.text9} text1={dataHomeLg.textHeader.text1} text2={dataHomeLg.textHeader.text2} text3={dataHomeLg.textHeader.text3} />
                        </span>
                </div>

                <div className=' imge-content'>

                    <div 
                            className='image flex flex-col p-4  m-0 justify-center items-center' 
                            style={{transform: hoverHero.transform}}
                    >

                        <Image 
                            src='/images/LOGO-AC.PNG ' 
                            alt='logo AC' 
                            width={500} 
                            height={500} 
                            style={{transform:imageHover.transform,}}
                            className='flex   p-0 m-0  '

                        />
                        <span 
                            className=' text-[40px] p-0 m-0     '
                            style={{transform:imageHover.transform,}}
                        >
                            <TextAnimation1 text={'AI CREAT'} width={300} height={100} stroke={'#aaa'} fill={'#87a2c1'}/>
                        </span>

                    </div>

                </div>
            
            </div>
            <style jsx>{`
                nav {
                    padding: 0 4rem;
                    min-height: 10vh;
                    border-bottom: 1px solid var(--color-border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .logo{
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        cursor: pointer;
                    }
                    .nav-items{
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        li {
                            transition: all 0.2s ease-in-out;
                            &:hover{
                                color: white;
                                transform: scale(1.1);
                            }     
                        }
                    }
                    .input{
                        flex: 2;
                        display: flex;
                        justify-content: center;
                        input{
                            width: 55%;
                            padding: 0.6rem 0.8rem;
                            border-radius: 8px;
                            background-color: #161616;
                            border: 1px solid var(--color-border);
                            &::placeholder{
                                color: var(--color-border);
                                font-weight: 500;
                            }
                        }
                    }
                }

            .header-content{
                padding: 0 10rem 5rem 10rem;
                display: flex;   
                justify-content: space-between;
                align-items: center;
                gap: 4rem;
                min-height: calc( 100vh - 10vh );  
                .text-content{
                    > h1{
                        font-size: clamp(2rem,5vw,5rem);
                        color: #f2994a;
                        transition: all 0.01s linear;
                        padding-bottom: 1.5rem;
                    }
                    .buttons{
                        display: flex;
                        gap: 1rem;
                        margin-top: 2.5rem;
                    }
                } 
                .imge-content .image{
                    padding: 1rem;
                    border-radius: 8px;
                    background-color: var(--color-bg);
                    border: 1px solid var(--color-border);
                    img{
                        border-radius:8px ;
                        
                    }
                }
            }
            

            `}</style>


<MainStyled>
        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={-1400}>
            <div className="cards">
              {cardsTemplateHome.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>
        <div id='Business'> <Business /></div>

        <Fullpage />

        <SectionLayout>
          <HorizontalWrapper height="40rem" direction={1400}>
            <div className="cards" style={{ right: 0 }}>
              {cardsTemplateHome.map((card, index) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <motion.div
            className="video"
            ref={video}
            style={{
              opacity,
              scale,
            }}
          >
            <SectionLayout>
              <TextSection 
                text1={dataHomeLg.textSection.text1} 
                text2={dataHomeLg.textSection.text2} 
                text3={dataHomeLg.textSection.text3} 
                text4={dataHomeLg.textSection.text4} 
                text5={dataHomeLg.textSection.text5} 
              />
            </SectionLayout>
          </motion.div>
        </SectionLayout>

      </MainStyled>
        </div>
    )
}
const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #202020;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
export default MainHeaderLG







