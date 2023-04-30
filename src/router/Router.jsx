import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Header from "components/Header/Header";
import {route} from "router/route";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={route.root} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
