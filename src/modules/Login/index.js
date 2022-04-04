import React from "react";
import { Helmet } from "react-helmet";
import "./style.css";
import Login from "./Components/index";
import Layout from "../../shared/Layout/index";

export default function LoginPage(props) {
  
  return (
    <div className="page-component" id="sign-in">
      <Helmet>
        <title>Energia Powered Dashboard| Log In</title>
      </Helmet>

      <Layout>
        <main>
          <div className="container">
            <Login props={props} />
          </div>
        </main>
      </Layout>
    </div>
  );
}
