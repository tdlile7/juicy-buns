import React, { useReducer } from "react";
import loaderReducer from "./loaderReducer";
import LoaderContext from "./loaderContext";
import { SHOW_LOADER, HIDE_LOADER } from "../types";

const LoaderState = props => {
  const [state, dispatch] = useReducer(loaderReducer, true);

  //Show Loader
  const showLoader = () => dispatch({ type: SHOW_LOADER });

  //Hide Loader
  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const contextPayload = { loading: state, showLoader, hideLoader };

  return (
    <LoaderContext.Provider value={contextPayload}>
      {props.children}
    </LoaderContext.Provider>
  );
};

export default LoaderState;
