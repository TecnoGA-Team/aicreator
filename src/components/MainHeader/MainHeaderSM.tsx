import React from 'react'
import TextAnimation1 from '../compo/textAnimation/TextAnimation1/TextAnimation1'
import Business from '../Business/Business'

import BusinessNav2 from '../BusinessNav/BusinessNav2'
import TextAnimation2 from '../compo/textAnimation/TextAnimation2/TextAnimation2'
import TextAnimation4 from '../compo/textAnimation/TextAnimation4/TextAnimation4'
import TextAnimation3 from '../compo/textAnimation/TextAnimation3/TextAnimation3'
import TextAnimation5 from '../compo/textAnimation/TextAnimation5/TextAnimation5'
import BannerAC from '../BannerAC'


// TecnoGA company
// To make your life project successful
// To keep pace with modern technology
// to communicate with the world
// Do not be afraid
// Step by Step
// We will be with you as you continue your journey and move towards your goal



function MainHeaderSM() {
    return (
        <div className='flex flex-col w-[100vw] relative h-[100vh]'>
            <div className=' flex flex-col relative w-full h-1/3 items-center pt-24 gap-4'>
                <span className=' text-[16px]  '>
                    <TextAnimation2 text1='STEP,' text2='By Step ' width='100px' />
                </span>
                <span className=' text-[12px]  '>
                    <TextAnimation5 text='We will be with you as you continue your journey and move towards your goal' />
                </span>

                <span className=' w-full  text-[10px]  z-10  '>
                    <TextAnimation4   text0={'To'} text1={'make your life project successful..'} text2={'keep pace with modern technology..'} text3={'communicate with the world'} />
                </span>

            </div>


            <div className=' flex relative w-full h-1/4 justify-center items-center align-middle'>
                <span className=' text-[30px]  absolute '>
                    <TextAnimation1 text={'AI CREAT'} width={300} height={100} stroke={'#dfdfdf'} fill={'#87a2c1'}/>
                </span>
                <video
                        className=' w-[90vw]  justify-center align-middle items-center'
                        src={'/video/video-1.mp4'}
                        controls={false}
                        playsInline
                        autoPlay
                        muted
                        loop
                />
            </div>
            
            <div className=' flex relative w-full h-1/3 bg-sky-200'>
                <h2 className=" text-[25px] sm:text-[50px]   font-mono p-3  font-extrabold opacity-35 absolute top-3 sm:top-3   z-10">what do you need ?</h2>
                <BusinessNav2 />
            </div>


            
            
        </div>
    )
}

export default MainHeaderSM