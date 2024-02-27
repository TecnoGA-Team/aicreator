'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';
import { LangContext } from '@/context/LangContext';
import './styleConect.css'

// import DataConect from  '@/assets/json/DataConect.json'

export default function Conect() {

    const {theme}: any = useContext(ThemeContext);
    const {lang}: any = useContext(LangContext);
    // const DataC=(lang=='Ar')?DataConect.ar:(lang=='En')?DataConect.en:DataConect.tr;

    // const [storedConect,setStoredConect]=useState(localStorage.getItem('Conect')||'false')


    const [infoConect,setInfoConect]=useState(true)


    const handleOnClickOpenInfo=()=>{
        setInfoConect(!infoConect);
    }


    const [classHight,setClassHight]=useState('h-0')






    return (
        <div >
                <style jsx>
                    {`
         
                        ${ (infoConect) ? 
                        '.infoConectBox {  height: 290px;}' 
                        : '.infoConectBox {   height: 54px;}' }
                        ${ (theme=='dark') ? 
                        '.infoConect  { border-color: transparent transparent var(--section-background-dark) transparent;}' 
                        : '.infoConect  {border-color: transparent transparent var(--section-background) transparent;}' }
                        
                        ${ (theme=='dark') ? 
                        '.infoConectBox  {color:  var(--section-color-dark) ;}' 
                        : '.infoConectBox  {color:  var(--section-color) ;}' }
                        
                  
                        ${ (theme=='dark') ? 
                        '.infoConectBoxDiv  { border: 1px solid #a1a1a150;}' 
                        : '.infoConectBoxDiv  { border: 1px solid #8a8a8a50;}' }
                        
                        .infoConectBox{
                            position: fixed;
                            top: 30vh;
                            right:10px;
                            z-index:100;
                            border-radius: 0.375rem/* 6px */;
                        }

                        
                        .trans{
                            transition:all 2s 0s;
                        }
                        .trans2{
                            transition:all 1s 0s;
                        }
    
                    `}
                </style>



                <div className=' flex   flex-col  trans2 border-solid   justify-start     items-center  infoConectBox overflow-hidden'>
                    
                    <div className=' flex relative  justify-center align-middle  items-center text-[24px] '>
                        <span 
                            onClick={handleOnClickOpenInfo}
                            
                            className=' flex w-[45px] h-[45px]   cursor-pointer bg-opacity-35   sm:text-[26px] align-middle items-center   justify-center bg-slate-400   hover:bg-opacity-80 m-2  rounded-md'> 
                            {/* {DataC.ConectBox.button1} */}
                            {
                                (infoConect)?  '-':'+'
                            }
                        </span>
                    </div>

                        <div className=' flex flex-col   infoConectBoxDiv  justify-center align-middle  items-center  py-2  rounded-lg  gap-5  bg-slate-400   bg-opacity-25   p-0   '>

                            <span 
                                
                                className=' flex  justify-center cursor-pointer   bg-opacity-35 opacity-70  hover:opacity-90 m-2 rounded-md'> 
                                <svg fill="#4f85bf" height="40px" width="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#4f85bf"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </svg>
                            </span>
                            <span 

                                className=' flex  justify-center cursor-pointer  opacity-70  hover:opacity-90  rounded-md'> 
                                <svg viewBox="0 0 48 48" height="38px" width="38px" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">  <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-700.000000, -360.000000)" fill="#67C15E"> <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" id="Whatsapp"> </path> </g> </g></svg>
                            </span>
                            <span 

                                className=' flex  justify-center cursor-pointer  opacity-70  hover:opacity-90  rounded-md mt-2'> 
                                
                                <svg fill="#84b6bd" height="38px" width="38px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 487.766 487.766"  stroke="#84b6bd"> <g> <g> <path d="M345.487,487.566c2.2,0.1,4.3,0.2,6.5,0.2c23.5,0,43.1-8.5,58.5-25.2c0.1-0.1,0.3-0.3,0.4-0.4 c5.5-6.6,11.7-12.6,18.3-18.9c4.5-4.3,9.1-8.7,13.4-13.3c20.5-21.4,20.4-48.5-0.2-69.1l-57-57c-9.8-10.2-21.5-15.6-33.9-15.6 c-12.3,0-24.1,5.3-34.2,15.4l-33.7,33.7c-3-1.7-6.1-3.2-9.1-4.7c-3.8-1.9-7.3-3.7-10.4-5.6c-30.9-19.6-58.9-45.2-85.7-78.1 c-13.5-17-22.4-31.2-28.7-45.8c8.8-8,17-16.3,24.9-24.4c2.9-2.9,5.8-5.9,8.8-8.9c21.4-21.4,21.4-47.9,0-69.2l-28.3-28.3 c-3.3-3.3-6.5-6.6-9.7-9.8c-6.3-6.4-12.8-13.1-19.3-19.1c-9.8-9.8-21.4-14.9-33.7-14.9c-12.2,0-24,5.1-34.2,14.9l-35.5,35.4 c-13,13-20.4,28.8-22,47.1c-1.8,22.8,2.4,47,13.2,76.2c16.7,45.1,41.8,87,79,131.8c45.3,54,99.7,96.7,161.9,126.8 C278.487,472.066,310.187,485.266,345.487,487.566z M111.787,318.266c-35.4-42.6-59.1-82.2-74.8-124.6 c-9.7-26.1-13.3-46.4-11.8-65.7c1.1-12.5,5.9-22.9,14.9-31.8l35.3-35.3c5.4-5.2,11.3-7.9,17.1-7.9c5.7,0,11.3,2.7,16.7,8 c6.3,5.9,12.4,12.1,18.8,18.6c3.2,3.3,6.5,6.7,9.9,10l28.3,28.3c11.6,11.6,11.6,23,0,34.6c-3,3-6,6-8.9,9 c-8.8,8.9-17,17.3-26.1,25.4c-0.2,0.2-0.3,0.3-0.5,0.5c-8.1,8.1-6.9,15.9-4.9,21.7c0.1,0.3,0.2,0.5,0.3,0.8 c7.3,17.6,17.6,34.3,33.4,54.3c28.5,35.1,58.5,62.4,91.7,83.5c4.1,2.6,8.4,4.8,12.6,6.9c3.8,1.9,7.3,3.7,10.4,5.6 c0.4,0.2,0.7,0.4,1.1,0.6c3.2,1.6,6.3,2.4,9.5,2.4c7.9,0,12.9-5,14.5-6.7l35.5-35.5c5.4-5.4,11.2-8.2,16.9-8.2 c7,0,12.7,4.4,16.4,8.2l57.2,57.2c14,14,7.6,26.6-0.3,34.9c-4,4.3-8.2,8.3-12.6,12.6c-6.7,6.4-13.6,13.1-19.9,20.6 c-10.8,11.6-23.6,17-40.3,17c-1.6,0-3.3-0.1-4.9-0.2c-31.1-2-59.9-14.1-81.6-24.4 C206.487,410.166,154.787,369.666,111.787,318.266z"></path> <path d="M268.087,89.266c-6.7-1.1-13,3.4-14.1,10c-1.1,6.7,3.4,13,10,14.1c27.5,4.7,52.5,17.7,72.5,37.6 c19.9,19.9,32.9,45,37.6,72.5c1,6,6.2,10.2,12.1,10.2c0.7,0,1.4-0.1,2.1-0.2c6.7-1.1,11.2-7.5,10-14.1 c-5.5-32.5-20.9-62.2-44.4-85.7C330.187,110.066,300.587,94.766,268.087,89.266z"></path> <path d="M475.187,229.466c0.7,0,1.4-0.1,2.1-0.2c6.7-1.1,11.2-7.5,10-14.1c-9.1-53.8-34.5-102.7-73.4-141.6 c-39-38.9-87.9-64.3-141.7-73.4c-6.7-1.1-13,3.4-14.1,10c-1.1,6.7,3.4,13,10,14.1c48.7,8.3,93.1,31.3,128.4,66.6 s58.3,79.7,66.6,128.4C464.087,225.266,469.287,229.466,475.187,229.466z"></path> </g> </g></svg>
                            </span>
                        </div>

                </div>
                

        </div>
)

}
