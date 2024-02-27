import React, { Children } from 'react'
export default function TextAnimation1(
    {text,width='100%',height='50px',stroke='#aaa',fill}:any
    ) {
        const strokeText=stroke;
        const fillText=fill;
    return (
        <>
            <style jsx>
                {`
                    @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                    .TA1 {
                        font-family: Lora;
                        letter-spacing: 10px;
                        stroke: ${strokeText};
                        font-weight: 700;
                        stroke-width: 1;

                        animation: textAnimate 5s infinite alternate;
                        
                    }

                    @keyframes textAnimate {
                        0% {
                        stroke-dasharray: 0 50%;
                        stroke-dashoffset:  20%;
                        fill:${fillText};
                        }
                        100% {
                        stroke-dasharray: 50% 0;
                        stroke-dashoffstet: -20%;
                        fill: ${fillText+'00'};
                        }
                    }
                `}
            </style>
            <svg width={width} height={height} >
                <text x="50%" y="60%"  text-anchor="middle" className='TA1' >
                    {text}
                </text>
            </svg>


        </>
    )
}
