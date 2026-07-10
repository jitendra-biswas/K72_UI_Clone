import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const MoveXLink = (props) => {
  // const [Visible, setVisible] = useState(false)
  const moveXRef = useRef();
  const visible = ()=>{
    // setVisible(true)
      gsap.to(moveXRef.current,{
        opacity:1,
        duration:0.2

      })

  }
  const hidden = ()=>{
    gsap.to(moveXRef.current,{
      opacity:0,
      duration:0.2
    })
  }
 
  return (
     <div
      onMouseEnter={visible}
      onMouseLeave={hidden}
     className="link w-full h-32  border-t border-t-zinc-300 relative cursor-pointer overflow-hidden">
            <div className="uppercase w-full h-full text-[7vw] flex items-center justify-center ">
              {props.name}
            </div>
            <div ref={moveXRef} className={`uppercase w-full h-full text-[7vw]  absolute top-0 left-0 flex whitespace-nowrap opacity-0`}>
              <div className="moveX h-full bg-[#D3FD50] text-black flex items-center justify-center gap-5">
                <h2>{props.moveLinkName}</h2>
                <div className={`img w-48 h-24 rounded-full bg-center bg-cover -mt-3 shrink-0` }  style={{ backgroundImage: `url(${props.img1})` }}></div>
                <h2>{props.moveLinkName}</h2>
                <div className={`img w-48 h-24 rounded-full  bg-center bg-cover -mt-3 shrink-0`}  style={{ backgroundImage: `url(${props.img2})` }}></div>
              </div>
              <div className="moveX h-full bg-[#D3FD50] text-black flex items-center justify-center gap-5">
                <h2>{props.moveLinkName}</h2>
                <div className={`img w-48 h-24 rounded-full bg-center bg-cover -mt-3 shrink-0` }  style={{ backgroundImage: `url(${props.img1})` }}></div>
                <h2>{props.moveLinkName}</h2>
                <div className={`img w-48 h-24 rounded-full  bg-center bg-cover -mt-3 shrink-0`}  style={{ backgroundImage: `url(${props.img2})` }}></div>
              </div>
              
              
            </div>
          </div>
  )
}

export default MoveXLink
