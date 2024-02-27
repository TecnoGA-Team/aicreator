'use client'

export default function BackgroundMain() {
    const myArray=[
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
        "circle",
        "x-shap",
    ]
    return (
        <>
        <style jsx>{`
                            
                    .lines{
                        position: absolute;
                        top: 0;
                        left:0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: space-evenly;
                        z-index:-1;
                        pointer-events: none;
                    }
                    
                    .lines .line-1,
                    .line-2,
                    .line-3,
                    .line-4{
                        width: 1px;
                        height: 100%;
                        background-color: var(--color-border);
                        position: relative;
                    }
                    
                    shape 
                    .shapes{
                        position: absolute;
                        height: 100%;
                        padding: 10rem 0;
                        top:0;
                        left:50%;
                        transform:translateX(-50%);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    
                    
                    .lines .circle {
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                        border: 4px solid var(--color-border);
                        background-color: var(--color-bg);
                    }
                    .lines .x-shap {
                        position: relative;
                        width: 1rem;
                        height: 1rem;
                    }
                    
                    .lines .x-shap::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        left: 50%;
                        transform: translateX(-50%) rotate(45deg);
                        width: 4px;
                        height: 100%;
                        background-color: var(--color-border);
                        border-radius: 5px;
                    
                    }
                    .lines .x-shap::before {
                        content: '';
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%) rotate(-45deg);
                        width: 4px;
                        height: 100%;
                        background-color: var(--color-border);
                        border-radius: 5px;
                        
                    }
        `} </style>
        


            <div className=" lines  ">

                <div className="line-1">
                <div className="shapes">
                    {myArray.map((shape,index)=>(
                    <div key={index} className={shape}></div>
                    ))}
                </div>
                </div>

                <div className="line-2">
                <div className="shapes">
                    {myArray.map((shape,index)=>(
                    <div key={index} className={shape}></div>
                    ))}
                </div>
                </div>

                <div className="line-3">
                <div className="shapes">
                    {myArray.map((shape,index)=>(
                    <div key={index} className={shape}></div>
                    ))}
                </div>
                </div>

                <div className="line-4">
                <div className="shapes">
                    {myArray.map((shape,index)=>(
                    <div key={index} className={shape}></div>
                    ))}
                </div>
                </div>

            </div> 
            
        </>
    )
}
