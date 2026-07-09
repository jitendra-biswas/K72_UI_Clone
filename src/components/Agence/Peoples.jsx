import React, { useState } from "react";
import People_row from "./People_row";

const Peoples = () => {
  const [currentImg, setCurrentImg] = useState("");

  return (
    <div className="w-full h-screen py-20 relative">

      <div className="image w-[23vw] h-[75vh] absolute z-20 top-5 left-[20vw] rounded-xl overflow-hidden">
        {currentImg && (
          <img
            src={currentImg}
            alt=""
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <People_row
        role="Directeur principal"
        name="Carl Godbout"
        img="/img6.png"
        setCurrentImg={setCurrentImg}
      />

      <People_row
        role="Conceptrice-rédactrice"
        name="Chantal Gobeil"
        img="/img3.png"
        setCurrentImg={setCurrentImg}
      />

      <People_row
        role="Directeur de création adjoint"
        name="Joël Letarte"
        img="/img8.png"
        setCurrentImg={setCurrentImg}
      />

      <People_row
        role="Directrice artistique"
        name="Mélanie Laviolette"
        img="/img5.png"
        setCurrentImg={setCurrentImg}
      />

      <People_row
        role="Directrice de la stratégie"
        name="Michèle Riendeau"
        img="/img4.png"
        setCurrentImg={setCurrentImg}
      />

      <People_row
        role="Directrice conseil"
        name="Meggie Lavoie"
        img="/img7.png"
        setCurrentImg={setCurrentImg}
      />

      <People_row
        role="Directeur artistique"
        name="Olivier Duclos"
        img="/img2.png"
        setCurrentImg={setCurrentImg}
        lastRole={true}
      />
    </div>
  );
};

export default Peoples;