import React from 'react'

export default function TextAnimation4({text0,text1,text2,text3,h='7vmin'}:any) {
    return (
        <>
            <style jsx>{`
              .bodytext4 {
                font-size: 2vmin;
                font-family: JetBrains Mono, monospace;
        
                display: flex;
                justify-content: center;
                align-items: center;
                height:${h};
              }
              
              .string {
                display: flex;
                flex-direction: column;
                text-align: center;
                animation: move 10s infinite;
              }
              
              .greeting {
                position: relative;
                top: 17.2vmin;
                animation: white-out 15s infinite;
              }
              
              @keyframes move {
                25% {
                  transform: translatey(-11.6vmin);
                  opacity: 1;
                }
                50% {
                  transform: translatey(-22vmin);
                }
                75% {
                  transform: translatey(-33vmin);
                }
              }
                `}
            </style>
            <div className="bodytext4 overflow-hidden">
                <h1 className='text-[5vmin] translate-y-[-1vmin]'>{text0} </h1>
                <div className="string pl-4">
                <h1 className="greeting text-[5vmin]"></h1>
                <h1 className="greeting ">{text1}</h1>
                <h1 className="greeting ">{text2}</h1>
                <h1 className="greeting ">{text3}</h1>  
                </div>
                
            </div>
        </>
    )
}
