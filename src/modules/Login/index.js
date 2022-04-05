import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import Login from "./Components/index";
import NavBar from './../../shared/Navbar/index';

export default function LoginPage(props) {
  
  return (
    <div className="page-component" id="sign-in">
      <NavBar props={false}/>
      <Helmet>
        <title>Energia Powered Dashboard| Log In</title>
      </Helmet>
      <div style={{ paddingTop: "100px" }} className="container">
        <Login props={props} />
      </div>
    </div>
  );
}
