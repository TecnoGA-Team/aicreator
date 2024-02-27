'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleGallery.css'
export default function Gallery() {
    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    const [pageNum,setPageNum]=useState(0);


    // const [imagesT,setImagesT]=useState(
    //     [
    //         "/images/p1/temblite/t1.PNG",
    //         "/images/p1/temblite/t2.PNG",
    //         "/images/p1/temblite/t3.PNG",
    //         "/images/p1/temblite/t4.PNG",
    //         "/images/p1/temblite/t5.PNG",
    //         "/images/p1/temblite/t6.PNG",
    //         "/images/p1/temblite/t7.PNG",
    //         "/images/p1/temblite/t8.PNG",
    //         "/images/p1/temblite/t9.PNG",
    //     ]
    // )
    const [imagesT,setImagesT]=useState(
        [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ]
    )

    


    return (
        <div>
            <style jsx>
                {`
                ${ (theme=='dark') ? '.gallery { background-color-dark: var(--section-background);}' : '.gallery {background-color: var(--section-background);}' }
                ${ (pageNum==0) ? '.num1 { color: #eee;background-color: rgb(3,105,161);}' : '.num1 { color:rgb(3,105,161);}' }
                ${ (pageNum==1) ? '.num2 { color: #eee;background-color: rgb(3,105,161);}' : '.num2 { color:rgb(3,105,161);}' }
                ${ (pageNum==2) ? '.num3 { color: #eee;background-color: rgb(3,105,161);}' : '.num3 { color:rgb(3,105,161);}' }
                ${ (pageNum==3) ? '.num4 { color: #eee;background-color: rgb(3,105,161);}' : '.num4 { color:rgb(3,105,161);}' }

                .gallery {
                    padding-top: var(--main-padding-top);
                    padding-bottom: var(--main-padding-bottom);
                    position: relative;
                    
                }
                .gallery .container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 40px;
                }
                .gallery .box {
                    padding: 15px;
                    background-color: white;
                    box-shadow: 0px 12px 20px 0px rgb(0 0 0 / 13%), 0px 2px 4px 0px rgb(0 0 0 / 12%);
                }
                .gallery .box .image {
                    position: relative;
                    overflow: hidden;
                }
                .gallery .box .image::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgb(255 255 255 / 20%);
                    width: 0;
                    height: 0;
                    opacity: 0;
                    z-index: 2;
                }
                .gallery .box .image:hover::before {
                    animation: flashing 0.7s;   
                }
                .gallery .box .imgGA {
                    max-width: 100%;
                    transition: var(--main-transition);
                }
                .numPage{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border:solid rgb(3,105,161)  2px;
                    height: 50px;
                    width: 50px;
                    overflow: hidden;
                    transition: all 0.22s;
                }
                .numPage:hover{
                    color: #eee;
                    background-color: rgb(3,105,161);
                    transform:scale(1.1);
                }

                `}
            </style>
            {/* <!-- Start Gallery --> */}
            <div className="gallery" id="gallery">
            {/* <h2 className="main-title">Gallery</h2> */}
            <div className="container">

{imagesT.map((num,index)=>{
    const url="/images/p1/temblite/t"+pageNum+num+".PNG"
    return(
    
        <>
            <div className="box">
                <div className="image">
                    <Image className='imgGA ' width={500} height={500} key={index} src={url} alt="" />
                    
                </div>
            </div>
        </>
    )
})}

                
                {/* <div className="box">
                <div className="image">
                <Image className='imgGA' width={500} height={500} src="/images/p1/temblite/t3.PNG" alt="" />
                </div>
                </div>
                <div className="box">
                <div className="image">
                <Image className='imgGA' width={500} height={500} src="/images/p1/temblite/t4.PNG" alt="" />
                </div>
                </div>
                <div className="box">
                <div className="image">
                <Image className='imgGA' width={500} height={500} src="/images/p1/temblite/t5.PNG" alt="" />
                </div>
                </div>
                <div className="box">
                <div className="image">
                <Image className='imgGA' width={500} height={500} src="/images/p1/temblite/t6.PNG" alt="" />
                </div>
                </div>
                <div className="box">
                <div className="image">
                <Image className='imgGA' width={500} height={500} src="/images/p1/temblite/t7.PNG" alt="" />
                </div>
                </div> */}
            </div>
            <div className={' flex flex-row w-[100vw] h-[60px]  justify-center gap-4 pt-10 items-center '}>
                <span className=' numPage num1'
                        onClick={()=>{
                            setPageNum(0);
                        }}
                >
                    1
                </span>
                <span className=' numPage num2'
                        onClick={()=>{
                            setPageNum(1);
                        }}
                >
                    2
                </span>
                <span className=' numPage num3 '
                        onClick={()=>{
                            setPageNum(2);
                        }}
                >
                    3
                </span>
                <span className=' numPage num4 '
                        onClick={()=>{
                            setPageNum(3);
                        }}
                >
                    4
                </span>

        
    </div>
            </div>
    {/* <!-- End Gallery --> */}
    
        </div>
    )
}
