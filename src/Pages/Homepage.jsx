import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="background-video w-full min-h-screen overflow-hidden relative">
       <div className="w-full h-screen">
         <video src="./background.mp4" autoPlay muted loop className="w-full h-full object-center object-cover"></video>
       </div>
        <div className="homepage-container w-full h-full absolute left-0 top-0 max-md:flex max-md:flex-col max-md:gap-6">
          <div className="top flex flex-col items-center text-zinc-200 max-md:pt-[50vh]">
            <h1 className="font-[font1] uppercase text-[9vw] max-md:text-[12vw] leading-[9vw] max-md:leading-[12vw] mt-2">
              L'étincelle
            </h1>
            <h1 className="font-[font1] uppercase text-[9vw] max-md:text-[12vw] leading-[9vw] max-md:leading-[12vw] flex items-center">
              qui{" "}
              <div className="w-[15vw] h-[7vw] overflow-hidden rounded-full ">
                <video
                  src="./background.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
              </div>{" "}
              génère
            </h1>
            <h1 className="font-[font1] uppercase text-[9vw] max-md:text-[12vw] leading-[9vw] max-md:leading-[12vw]">
              la créativité
            </h1>
          </div>
          <div className="middle w-full flex justify-end">
            <p className="w-[20vw] max-md:w-[80vw] font-[font2] text-white text-sm pr-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque.
              Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée
              l’étincelle pour générer de l’émotion. Pour assurer une relation
              honnête, on est sans filtre, on dit ce qui doit être dit, on fait
              ce qui doit être fait.
            </p>
          </div>
          <div className="bottom flex justify-center gap-5">
            <Link to="/projects" className="uppercase text-white text-8xl max-md:text-2xl font-[font2] border-2 rounded-full px-5 max-md:px-1 py-2 max-md:py-0 hover:text-[#D3FD50] transition-all">projects</Link>
            <Link to="/agence" className="uppercase text-white text-8xl max-md:text-2xl font-[font2] border-2 rounded-full px-5 max-md:px-1 py-2 max-md:py-0 hover:text-[#D3FD50] transition-all">agence</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
