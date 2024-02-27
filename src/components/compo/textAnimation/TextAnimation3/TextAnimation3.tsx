import React from 'react'


export default function TextAnimation3(
    {L1,L2,L3,L4,L5,L6,L7,L8,L9,L10,L11,L12,L13,L14,L15,L16,L17,L18,L19,L20}:any) 
{
    return (
        <>
        <div className='body-text-3'>
                <style jsx>
                    {`
     @import "compass/css3";

     @import url(https://fonts.googleapis.com/css?family=Finger+Paint);
     
     body-text-3 {
       background: black;
       overflow: hidden;
height:30px;
       text-align: center;
       color: transparent;
       backface-visibility: hidden;
     }
     
     span {
       display: inline-block;
       text-shadow: 0 0 0 whitesmoke;
       animation: smoky 5s 5s both  infinite;
     }
     
     span:nth-child(even){
       animation-name: smoky-mirror 8s 5s  infinite;
     }
     
     @keyframes smoky {
       60% {
         text-shadow: 0 0 40px whitesmoke;
       }
       to {
         transform:
           translate3d(15rem,-8rem,0)
           rotate(-40deg)
           skewX(70deg)
           scale(1.5);
         text-shadow: 0 0 20px whitesmoke;
         opacity: 0;
       }
     }
     
     @keyframes smoky-mirror {
       60% {
         text-shadow: 0 0 40px whitesmoke; }
       to {
         transform:
           translate3d(18rem,-8rem,0)
           rotate(-40deg) 
           skewX(-70deg)
           scale(2);
          text-shadow: 0 0 20px whitesmoke;
         opacity: 0;
       }
     }
     
     @for $item from 1 through 21 {
       span:nth-of-type(#{$item}){ 
         animation-delay: #{(3 + ($item/10))}s ; 
       }
     } 
                        
                        

                    `}
                </style>
            <div>
            <span>{L1}</span><span>{L2}</span><span>{L3}</span><span>{L4}</span><span>{L5}</span><span>{L6}</span><span>{L7}</span><span>{L8}</span><span>{L9}</span><span>{L10}</span><span>{L11}</span><span>{L12}</span><span>{L13}</span><span>{L14}</span><span>{L15}</span><span>{L16}</span><span>{L17}</span><span>{L18}</span><span>{L19}</span><span>{L20}</span>
            </div>
        </div>
        </>
    )
}
