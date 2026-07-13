import React, { useRef, useState } from "react";
import MoveXLink from "./MoveXLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FullScreenNav = (props) => {
  const [HoverStatus, setHoverStatus] = useState(false);
  const linkContainer = useRef();
  const [FullScreenVisibleStatus, setFullScreenVisibleStatus] = useState(true);
   const loaderRef = useRef();
   const fullScreenNavRef = useRef()

  {/* Method for hover effect for cross */}
  const hoverIn = () => {
    setHoverStatus(true);
  };

  const hoverOut = () => {
    setHoverStatus(false);
  };

  
 useGSAP(() => {
  if (!props.hambargarStatus) return;

  gsap.to(fullScreenNavRef.current, {
    y: 0,
  });
  gsap.from(linkContainer.current.children, {
      opacity: 0,
      rotateX: 90,
      duration: 0.6,
      stagger: 0.2,
     
    });
}, [props.hambargarStatus]);

  const cross = () => {
     gsap.to(fullScreenNavRef.current,{
      y:"-100%"
     })
     props.setHambargarStatus(false)
  };

  


  const MoveLinkList = [
    {
      linkName: "projets",
      MoveLinkName: "pour tour voir",
      img1: "/navImgA1.png",
      img2: "/navImgA2.png",
    },
    {
      linkName: "agence",
      MoveLinkName: "pour tout savoir",
      img1: "/navImgB1.png",
      img2: "/navImgB2.png",
    },
    {
      linkName: "contact",
      MoveLinkName: "pour envoyer un fax",
      img1: "/img3.png",
      img2: "/img4.png",
    },
    {
      linkName: "agence",
      MoveLinkName: "Lire les articles",
      img1: "/navImgD1.png",
      img2: "/navImgD2.png",
    },
  ];




  return (
    <>

      <div
      ref={fullScreenNavRef}
        className={`w-full h-screen absolute bg-black -translate-y-full z-40 top-0 left-0 font-[font2] text-white ${FullScreenVisibleStatus ? "visible" : "invisible"} max-md:flex max-md:flex-col max-md:gap-25`}
      >
        <div  className="top w-full flex justify-end">
          <div
          onClick={cross}
            onMouseEnter={hoverIn}
            onMouseLeave={hoverOut}
            className="cross  w-40 h-26 flex flex-col items-center justify-center p-2 my-2 cursor-pointer"
          >
            <div
              className={`line w-full h-[1.5px]  ${HoverStatus ? "bg-[#D3FD50]" : "bg-white"} -rotate-45 origin-top`}
            ></div>
            <div
              className={`line w-full h-[1.5px] ${HoverStatus ? "bg-[#D3FD50]" : "bg-white"} rotate-45 origin-top`}
            ></div>
          </div>
        </div>
        <div ref={linkContainer} className="all_Links">
          {/* Link.jsx */}
          {MoveLinkList.map((elem, idx) => {
            return (
              <MoveXLink
                key={idx}
                name={elem.linkName}
                moveLinkName={elem.MoveLinkName}
                img1={elem.img1}
                img2={elem.img2}
              />
            );
          })}
        </div>

        <div className="footer h-16 flex items-center justify-between px-20 max-md:flex-col">
          <ul className="uppercase flex max-md:flex-col max-md:items-start max-md:gap-0 items-center gap-3 text-xs">
            <li className="hover:text-[#D3FD50] cursor-pointer">Politique de confidentialité</li>
            <li className="hover:text-[#D3FD50] cursor-pointer">Avis de confidentialité</li>
            <li className="hover:text-[#D3FD50] cursor-pointer">Rapport éthique</li>
            <li className="hover:text-[#D3FD50] cursor-pointer">Options de consentement</li>
          </ul>

          <ul className="text-5xl max-md:text-2xl uppercase flex items-center gap-2 max-md:mt-1">
            <li className="border-2 rounded-full px-2 hover:text-[#D3FD50] cursor-pointer max-md:h-fit max-md:px-2">fg</li>
            <li className="border-2 rounded-full px-2 hover:text-[#D3FD50] cursor-pointer max-md:h-fit max-md:px-2">ig</li>
            <li className="border-2 rounded-full px-2 hover:text-[#D3FD50] cursor-pointer max-md:h-fit max-md:px-2">in</li>
            <li className="border-2 rounded-full px-2 hover:text-[#D3FD50] cursor-pointer max-md:h-fit max-md:px-2">be</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FullScreenNav;
