import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Marquee = (props) => {
    const marqueImageRef = useRef();
    const mainPageRef = props.mainPageRef;
    gsap.registerPlugin(ScrollTrigger)
   useGSAP(()=>{
       //SCROLLER TRIGGER TO CHANGE THE BACKGROUND COLOR
    gsap.to(mainPageRef.current, {
      scrollTrigger: {
        trigger: marqueImageRef.current,
        start: "top 90%",
        end: "bottom -400%",
        

        onEnter: () => {
          gsap.to(mainPageRef.current, {
            backgroundColor: "black",
            color: "white",
            duration: 0.5,
          });
        },

        onLeave: () => {
          gsap.to(mainPageRef.current, {
            backgroundColor: "white",
            color: "black",
            duration: 0.5,
          });
        },

        onEnterBack: () => {
          gsap.to(mainPageRef.current, {
            backgroundColor: "black",
            color: "white",
            duration: 0.5,
          });
        },

        onLeaveBack: () => {
          gsap.to(mainPageRef.current, {
            backgroundColor: "white",
            color: "black",
            duration: 0.5,
          });
        },
      },
    });
   })
  return (
    <>
    <div ref={marqueImageRef} className="marqueImage min-h-screen max-md:h-screen max-md:overflow-hidden max-md:flex max-md:flex-col max-md:gap-10">
          <div className="sticky top-0 h-screen flex justify-center items-start">
            <div className="image-container w-[30vw] max-md:w-[50vw] h-screen max-md:h-[35vh] rounded-xl  overflow-hidden relative">
              <img
                src="/img5.png"
                alt=""
                className="w-full h-full object-center object-cover "
              />
            </div>
            <div className="marquee1  absolute -z-1 w-full top-20 flex overflow-hidden whitespace-nowrap">
              <div className=" moveLeft w-max h-full font-[font2] text-[9vw] flex gap-[50vw] text-[#eaff4c]">
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>
                <h1>MÉLANIE</h1>

              </div>
            </div>
            
            <div className="marquee1 w-full font-[font2] absolute bottom-20 flex ">
                <div className="moveRight  flex items-center gap-10 max-md:-mt-62">
                    <h1 className=" text-[8vw]">LAVIOLETTE</h1>
              <p className="text-3xl mt-10 max-md:mt-0 whitespace-nowrap">Directrice artistique</p>
                </div>
            </div>
           
          </div>
          <div className="flex justify-center items-start  sticky top-0 bg-black">
            <div className="image-container w-[30vw] max-md:w-[50vw] h-screen max-md:h-[40vh] rounded-xl relative overflow-hidden">
              <img
                src="/img2.png"
                alt=""
                className="w-full h-full object-center object-cover "
              />
            </div>
            <div className="marquee1  absolute -z-1 w-full top-20 flex overflow-hidden whitespace-nowrap">
              <div className=" moveLeft w-max h-full font-[font2] text-[9vw] flex gap-[50vw] text-[#eaff4c]">
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>
                <h1>AUDREY</h1>

              </div>
            </div>
            
            <div className="marquee1 w-full font-[font2] absolute bottom-20 flex gap-[50vw]">
                <div className="moveRight  flex items-center gap-10">
                    <h1 className=" text-[8vw]">
GAUCHER</h1>
              <p className="text-3xl mt-10 max-md:mt-0 whitespace-nowrap">Directrice artistique / Design</p>
                </div>
            </div>
           
          </div>
        </div>
    </>
  )
}

export default Marquee
