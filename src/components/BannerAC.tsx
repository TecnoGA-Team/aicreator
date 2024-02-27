


'use client'

import Image from "next/image";


export default function BannerAC({img1,img2,img3,img4,img5,img6,img7,swipeToRight}:any) {
    const swipe=(swipeToRight)?'swipeToRight':'swipeToLift';
    const images = [
        img1,img2,img3,img4,img5,img6,img7
        ].map((image) => ({
            id: crypto.randomUUID(),
            image
        }));
    return (
        <div>
            <style jsx>{`
                img {
                    max-width: 450px;
                    height: 11rem;
                    padding: 0 25px;
                    object-fit: cover;
                }

                img:last-of-type {
                    padding-left: 0;
                }

                .inner {
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                    height: 19rem;
                }

                .wrapper {
                    position: absolute;
                    display: flex;
                }

                section {
                    display: flex;
                    animation: ${swipe} 9000ms linear infinite backwards;
                }

                @keyframes swipeToRight {
                    0% {
                    transform: translate(0);
                    }

                    100% {
                    transform: translate(-100%);
                    }
                }
                @keyframes swipeToLift {
                    0% {
                    transform: translate(-100%);
                    }

                    100% {
                    transform: translate(0);
                    }
                }

            `}</style>
            <div className="inner">
                <div className="wrapper">
                <section  className="">
                    {images.map(({ id, image }:any) => (
                    <div className="image w-[150px] justify-center items-center align-middle" key={id}>
                        <Image
                            className="justify-center items-center align-middle"
                            width={300} height={300}
                            src={image}
                            alt={id}
                          
                        />
                        {/* <img src={image} alt={id} /> */}
                    </div>
                    ))}
                </section>
                <section className="justify-center items-center align-middle">
                    {images.map(({ id, image }:any) => (
                    <div className="image w-[150px] justify-center items-center align-middle " key={id}>
                        <Image
                            width={300} height={300}

                            className="justify-center items-center align-middle"
                            src={image}
                            alt={id}
                        
                        />
                        {/* <img src={image} alt={id} /> */}
                    </div>
                    ))}
                </section>
                <section className="">
                    {images.map(({ id, image }:any) => (
                    <div className="image w-[150px] justify-center items-center align-middle" key={id}>
                        <Image
                            width={300} height={300}
                            className="justify-center items-center align-middle "
                            src={image}
                            alt={id}
                          
                        />
                        {/* <img src={image} alt={id} /> */}
                    </div>
                    ))}
                </section>
                </div>
            </div>
        </div>

    );
};


