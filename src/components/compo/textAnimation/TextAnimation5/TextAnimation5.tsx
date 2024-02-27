import React from 'react'

export default function TextAnimation5({text}:any ) {
    return (
        <>
        <div className='body-text-5'>
        <style jsx>
            {`

                    .body-text-5 {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 15px;
                    
                    }
       
                    
                    p {
                        font-weight: 700;
                        text-align: center;
                        font-family: Hack, sans-serif;
                        text-transform: uppercase;
                        background: linear-gradient(90deg, #000, #fff, #000);
                        letter-spacing: 5px;
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-repeat: no-repeat;
                        background-size: 80%;
                        animation: shine 10s 5s linear infinite;
                        position: relative;
                    }
                    
                    @keyframes shine {
                        0% {
                        background-position-x: -500%;
                        }

                        100% {
                        background-position-x: 500%;
                        }
                    }

            `}
        </style>
        <p className='p-10'>{text} </p>
        </div>
        </>
    )
}
