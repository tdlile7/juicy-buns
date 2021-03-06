import React, { useContext, useEffect } from "react";
import Intro from "../sections/Home/Intro";
import Links from "../sections/Home/Links";
import Reviews from "../sections/Home/Reviews";
import LoaderContext from "../../contexts/Loader/loaderContext";

const Home = () => {
  // Contexts
  const loaderContext = useContext(LoaderContext);
  const { hideLoader } = loaderContext;

  //Hide loader after page has mounted
  useEffect(() => {
    let id = setTimeout(hideLoader, 2000);

    return () => clearTimeout(id);
  }, [hideLoader]);

  return (
    <div className="home">
      <Intro />
      <Links />
      <Reviews />
    </div>
  );
};

export default Home;
