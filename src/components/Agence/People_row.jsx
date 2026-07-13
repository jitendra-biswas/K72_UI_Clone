import React, { useState } from "react";

const People_row = (props) => {
  const [Status, setStatus] = useState(false);

  const showAnimation = () => {
    setStatus(true);
    props.setCurrentImg(props.img);
  };

  const endAnimation = () => {
    setStatus(false);
    props.setCurrentImg("");
  };

  return (
    <div className="peoples w-full">
      <div
        onMouseEnter={showAnimation}
        onMouseLeave={endAnimation}
        className={`row w-full h-18 border-t-2 border-zinc-500 ${
          props.lastRole ? "border-b-2" : ""
        }`}
      >
        <div className="row-text w-full h-full font-[font2] p-3">
          <h3
            className={`absolute z-10 ${
              Status ? "text-black" : "text-white max-md:text-[#D3FD50]"
            } text-md`}
          >
            {props.role}
          </h3>

          <h1
            className={`absolute right-[1vw] z-10 ${
              Status ? "text-black" : "text-white"
            } text-[2.5vw] uppercase`}
          >
            {props.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default People_row;