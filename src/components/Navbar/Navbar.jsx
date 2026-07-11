import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FullScreenNav from "./FullScreenNav";

const Navbar = (props) => {
  const [HambargarClicked, setHambargarClicked] = useState(false)
  const animationRef = useRef();
  const [LineColor, setLineColor] = useState(300);
  const location = useLocation();
  const navigate = useNavigate();


  const showAnimation = () => {
    animationRef.current.style.height = "100%";
    animationRef.current.style.transition = "all ease-in 0.1s";
    setLineColor(800);
  };
  const endAnimation = () => {
    animationRef.current.style.height = "0%";
    animationRef.current.style.transition = "all ease-in 0.1s";
    setLineColor(300);
  };

   const HambargarClickHandler = ()=>{
    setHambargarClicked(true);
   }

  return (
    <nav className="fixed w-full left-0 top-0 z-50 flex items-center justify-end">
      <div onClick={()=>navigate('/')} className="logo fixed z-50 top-3 left-3 pl-2.5 pt-1.5 w-[8vw] cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44" className="stroke-1 stroke-zinc-300 ">
          <path
            fill={location.pathname=="/" ? "white": "black"}
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>

      <div
       onClick={HambargarClickHandler}
        onMouseEnter={showAnimation}
        onMouseLeave={endAnimation}
        className="button bg-black h-[3.2vw] w-[14vw] mb-2 flex items-center justify-end pr-7 cursor-pointer relative z-30"
      >
        <div
          ref={animationRef}
          className="background-hover w-full h-[0%] bg-[#D3FD50] absolute left-0 top-0"
        ></div>
        <div className=" flex flex-col items-end gap-1 absolute">
          <div
            className={`line1 w-12 h-[1.6px] ${
              LineColor === 300 ? "bg-zinc-300" : "bg-zinc-800"
            }`}
          ></div>

          <div
            className={`line2 w-7 h-[1.5px] ${
              LineColor === 300 ? "bg-zinc-300" : "bg-zinc-800"
            }`}
          ></div>
        </div>
      </div>
      
     
     {/*Fullnav */}
     <FullScreenNav hambargarStatus={HambargarClicked} setHambargarStatus={setHambargarClicked} />

    </nav>
  );
};

export default Navbar;
