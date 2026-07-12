import React, { useRef } from "react";
import Card from "../components/Projects/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/Footer"

const Projects = (props) => {
  const imgList = [
    {
      img1: "./projectImages/img1.png",
      img2: "./projectImages/img2.png"
    },
    {
        img1:"./projectImages/img3.png",
        img2:  "./projectImages/img4.png"
    },
    {
        img1:"./projectImages/img5.png",
        img2: "./projectImages/img6.png"
    },
    {
        img1: "./projectImages/img7.png",
          img2: "./projectImages/img8.png"
    },
    
    {
        img1:   "./projectImages/img9.png",
    img2: "./projectImages/img10.png"
    }
  ];

 useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(".project",{
        y:-100,
        opacity:0,
        delay:1
    })

    tl.from(".card",{
        x:"-100%",
        stagger:0.2,
        opacity:0
    })
 })

  return (
    <div className="w-full bg-white font-[font2]">
      <div className="top w-full pt-[15vw]">
        <div className="project flex items-start">
            <h1 className=" text-[12.5vw] uppercase">Projets</h1>
            <sup className="text-5xl mt-20">17</sup>
        </div>
      </div>

      <div className="-mt-18 card-container">
        {
            imgList.map(function(elem,idx){
                return <div key={idx} className="card w-full px-3 flex gap-3 mb-3 sticky top-0">
                    <Card  img1={elem.img1} img2={elem.img2}/>
                </div>
            })
        }
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
