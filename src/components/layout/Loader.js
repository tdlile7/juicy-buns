import React, { useEffect, useRef } from "react";
import { TimelineMax } from "gsap/all";

const Loader = () => {
  // References
  const hamburgerRef = useRef();

  //Pulsing Animation for hamburger loader
  useEffect(() => {
    const tl = new TimelineMax({ repeat: -1, yoyo: true });

    tl.to(hamburgerRef.current, 0.5, { scale: 1.2 }).to(
      hamburgerRef.current,
      0.5,
      {
        scale: 0.85
      }
    );
  }, []);

  return (
    <div className="loading-container">
      <div className="loader">
        <i ref={hamburgerRef} className="fas fa-hamburger" />
      </div>
    </div>
  );
};

export default Loader;
