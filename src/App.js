import React, { Fragment, useContext } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Order from "./components/pages/Order";
import NotFound from "./components/pages/NotFound";
import Menu from "./components/sections/Menu/Menu";
import Loader from "./components/layout/Loader";
import Modal from "./components/layout/Modal";
import LoaderContext from "./contexts/Loader/loaderContext";
import MenuContext from "./contexts/Menu/menuContext";
import ModalContext from "./contexts/Modal/modalContext";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./assets/scss/App.scss";

const App = () => {
  //Contexts
  const loaderContext = useContext(LoaderContext);
  const { loading } = loaderContext;

  const menuContext = useContext(MenuContext);
  const { revealMenu } = menuContext;

  const modalContext = useContext(ModalContext);
  const { revealModal } = modalContext;

  return (
    <Router>
      <Fragment>
        {loading && <Loader />}
        <Navbar />
        {revealMenu && <Menu />}
        {revealModal && <Modal />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
