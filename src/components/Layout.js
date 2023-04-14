import React from "react";
import { useParams } from "react-router-dom";

import Home from "./Home/Home";
import HomeNavbar from "./HomeNavbar/HomeNavbar";
import Page404 from "../pages/Page404";

const HomeLayout = () => {
  const { component } = useParams();

  console.log("component", component);

  return (
    <>
      <HomeNavbar />
      {component === undefined || component === null ? <Home /> : <Page404 />}
    </>
  );
};

export default HomeLayout;
