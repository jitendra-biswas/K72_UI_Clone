import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

function Loader() {
  const loaderRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const bars = loaderRef.current.querySelectorAll("div");
    gsap.set(loaderRef.current, {
      display: "flex",
    });

    // Reset bars to their starting position
    gsap.set(bars, {
      y: 0,
    });
    gsap.to(bars, {
      y: "100%",
      delay:0.5,
      duration: 0.5,
      stagger: -0.1,
      onComplete: () => {
        loaderRef.current.style.display = "none";
      },
    });
  }, [location]);

  return (
    <div ref={loaderRef} className="loader flex fixed inset-0 z-50">
      <div className="w-5/6 bg-black h-screen"></div>
      <div className="w-5/6 bg-black h-screen"></div>
      <div className="w-5/6 bg-black h-screen"></div>
      <div className="w-5/6 bg-black h-screen"></div>
      <div className="w-5/6 bg-black h-screen"></div>
      <div className="w-5/6 bg-black h-screen"></div>
    </div>
  );
}

export default Loader;
