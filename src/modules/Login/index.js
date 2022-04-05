import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import Login from "./Components/index";
// import Layout from "../../shared/Layout/index";
import NavBar from "../../shared/Navbar";

export default function LoginPage(props) {
  return (
    <div className="page-component" id="sign-in">
      <NavBar props={false} />
      <Helmet>
        <title>Energia Powered Dashboard| Log In</title>
      </Helmet>

      {/* <Layout> */}
      <NavBar />
      <main>
        <div className="container">
          <Login props={props} />
        </div>
      </main>
      {/* </Layout> */}
    </div>
  );
}
