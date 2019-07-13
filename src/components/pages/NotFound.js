import React, { useEffect, useContext } from "react";
import LoaderContext from "../../contexts/Loader/loaderContext";
import { Link } from "react-router-dom";

const NotFound = () => {
  //Context
  const loaderContext = useContext(LoaderContext);
  const { showLoader, hideLoader } = loaderContext;

  //Hide loader after page has mounted
  useEffect(() => {
    let id = setTimeout(hideLoader, 2000);

    return () => clearTimeout(id);
  }, [hideLoader]);

  return (
    <div className="not-found">
      <h2>404 Not Found</h2>
      <Link to="/" onClick={showLoader}>
        Home
      </Link>
    </div>
  );
};

export default NotFound;
