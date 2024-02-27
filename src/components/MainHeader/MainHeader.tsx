
import React from 'react'
import MainHeaderSM from './MainHeaderSM'
import MainHeaderLG from './MainHeaderLG'
import Link from 'next/link'




export default function MainHeader() {

    return (
        <>
            <div className=' flex sm:hidden  w-[100vw] overflow-hidden'>
        
                <MainHeaderSM />
              
              
            </div>

            <div className='hidden  sm:flex'>
                <MainHeaderLG />


            </div>

          
        </>
    )
}

