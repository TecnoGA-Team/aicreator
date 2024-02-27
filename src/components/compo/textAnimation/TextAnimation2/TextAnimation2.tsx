import React from 'react'

export default function TextAnimation2({text1,text2,width}:any) {
    return (
        <>
                <style jsx>
                    {`
                        @import url('https://fonts.googleapis.com/css?family=Roboto:300');

                        .bodyTA2 {
                            font-family:'Roboto';
                            overflow:hidden;
                            -webkit-backface-visibility: hidden;
                            -webkit-perspective: 1000;
                            -webkit-transform: translate3d(0,0,0);
                        }

                        .divTA2{
                            display:inline-block;
                            overflow:hidden;
                            white-space:nowrap;
                        }

                        .div1TA2 {    
                            animation: showup 10s infinite;
                        }

                        .div2TA2{
                            width:0px;
                            animation: reveal 10s infinite;
                        }

                        .div2TA2 span {
                            margin-left:-${width};
                            animation: slidein 16s infinite;
                        }

                        @keyframes showup {
                            0% {opacity:0;}
                            20% {opacity:1;}
                            80% {opacity:1;}
                            100% {opacity:0;}
                        }

                        @keyframes slidein {
                            0% { margin-left:calc(-${width} * 2)px; }
                            20% { margin-left:calc(-${width} * 2)px; }
                            35% { margin-left:0px; }
                            100% { margin-left:0px; }
                        }

                        @keyframes reveal {
                            0% {opacity:0;width:0px;}
                            20% {opacity:1;width:0px;}
                            30% {width:${width};}
                            80% {opacity:1;}
                            100% {opacity:0;width:${width};}
                        }
                    `}
                </style>
                <div className='bodyTA2 '></div>
                <div className='divTA2 div1TA2'>{text1}</div>
                <div className='divTA2 div2TA2'>
                    <span>&nbsp;{text2}&nbsp;</span>
                </div>
        </>
    )
}
