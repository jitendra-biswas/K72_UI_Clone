import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
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

    //SCROLLER TRIGGER TO CHANGE THE BACKGROUND COLOR
    gsap.to(mainPageRef.current, {
      scrollTrigger: {
        trigger: marqueImageRef.current,
        start: "top 90%",
        end: "bottom -20%",

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
  });

  return (
    <>
      <div ref={mainPageRef} className="w-full min-h-screen bg-white">
        <div
          ref={imgBoxRef}
          className="image w-[14vw] h-72 bg-red-400 absolute top-32 left-[30vw] rounded-xl overflow-hidden"
        >
          <img
            ref={imgRef}
            src="/img1.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-center leading-65 pt-[50vh] relative">
          <h1 className="font-[font2] text-[19vw] uppercase">Soixan7e</h1>
          <h1 className="font-[font2] text-[19vw] uppercase">Douze</h1>
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

        <div className="h-screen p-[10vw] text-xl flex">
          <div className="left font-[font2] flex flex-col ">
            <p className="h-42">Expertise</p>
            <p>
              Nos projets_ naissent dans l’humilité, grandissent dans la
              curiosité et vivent grâce à la créativité sous toutes ses formes.
            </p>
          </div>
          <div className="right flex flex-col font-[font2]">
            <p className="h-42">
              Stratégie Publicité <br />
              Branding <br />
              Design <br />
              Contenu
            </p>
            <div className="flex gap-10">
              <p>
                Notre création_ bouillonne dans un environnement où le talent a
                le goût d’exploser. Où on se sent libre d’être la meilleure
                version de soi-même.
              </p>
              <p>
                Notre culture_ c’est l’ouverture aux autres. Point. Tout
                l’équipage participe à bâtir une agence dont on est fiers.
              </p>
            </div>
          </div>
        </div>


       {/* MARQUEE EFFECT */}
        <div ref={marqueImageRef} className="marqueImage min-h-[200vh]">
          <div className="flex justify-center items-start  sticky top-0">
            <div className="image-container w-[30vw] h-screen rounded-xl  overflow-hidden relative">
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
            
            <div className="marquee1 w-full font-[font2] absolute bottom-20 flex gap-[50vw]">
                <div className="moveRight  flex items-center gap-10">
                    <h1 className=" text-[8vw]">LAVIOLETTE</h1>
              <p className="text-3xl mt-10 whitespace-nowrap">Directrice artistique</p>
                </div>
            </div>
           
          </div>
          <div className="flex justify-center items-start  sticky top-0 bg-black">
            <div className="image-container w-[30vw] h-screen rounded-xl relative">
              <img
                src="/img2.png"
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
            
            <div className="marquee1 w-full font-[font2] absolute bottom-20 flex gap-[50vw]">
                <div className="moveRight  flex items-center gap-10">
                    <h1 className=" text-[8vw]">LAVIOLETTE</h1>
              <p className="text-3xl mt-10 whitespace-nowrap">Directrice artistique</p>
                </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Agence;
