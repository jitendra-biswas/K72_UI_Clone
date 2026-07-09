import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Peoples from "../components/Agence/Peoples";
import Marquee from "../components/Agence/Marquee";
import AgenceText from "../components/Agence/AgenceText";
import StickyPage from "../components/Agence/StickyPage";

const Agence = (props) => {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const mainPageRef = useRef();
  const imgBoxRef = useRef();
  const imgRef = useRef();
  const marqueImageContainerRef = useRef();
  const marqueImageRef = useRef();
  const imgList = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let index;
      //GSAP for text animation
      const tl = gsap.timeline();
      
      tl.from(text1Ref.current,{
        opacity:0,
        yPercent:-100,
        delay:1,
        duration:0.3
      })
      tl.from(text2Ref.current,{
        opacity:0,
        yPercent:-100,
        duration:0.3
      })
      tl.from(imgRef.current,{
        opacity:0,
        xPercent:-100,
        duration:0.3,
      })

    //GSAP FOR CHANGING IMAGE ON SCROLL
    gsap.to(imgBoxRef.current, {
      scrollTrigger: {
        trigger: imgBoxRef.current,
        start: "top 15%",
        end: "bottom -40%",
        pin: true,
        onUpdate: (e) => {
          if (e.progress < 1) {
            index = Math.floor(e.progress * imgList.length);
          } else {
            index = Math.floor(e.progress * imgList.length - 1);
          }
          imgRef.current.src = imgList[index];
        },
      },
    });

    
  });

  return (
    <>
      <div ref={mainPageRef} className="w-full min-h-screen bg-white">
        <div
          ref={imgBoxRef}
          className="image w-[14vw] h-72 absolute top-32 left-[30vw] rounded-xl overflow-hidden"
        >
          <img
            ref={imgRef}
            src="/img1.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-center leading-65 pt-[50vh] relative">
          <div  className="h-[17vw] overflow-hidden">
            <h1 ref={text1Ref} className="font-[font2] text-[19vw] uppercase">Soixan7e</h1>
          </div>
          <div  className="h-[17vw] overflow-hidden">
            <h1 ref={text2Ref} className="font-[font2] text-[19vw] uppercase">Douze</h1>
          </div>
        </div>

        <div className="w-full flex justify-end pr-10">
          <p className="paragraph font-[font2] w-[50vw] text-[3vw] leading-12">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
            curiosité nourrit notre créativité. On reste humbles et on dit non
            aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>

        {/* Agence Text */}
        <AgenceText />


       {/* MARQUEE EFFECT */}
        <Marquee mainPageRef={mainPageRef}/>


         {/*Peoples */}
        <Peoples />

        {/* Sticky pages */}
        <StickyPage />
      </div>
    </>
  );
};

export default Agence;
