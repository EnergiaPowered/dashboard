import React, { useState, useEffect } from "react";
import routes from "../../globals/routes";
import { Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const Menu = ({toggle , currentRoute}) => {
  useEffect(()=>{


  })
  return (
    <div className={toggle + " menu"} >
      <Nav
        className="justify-content-start flex-column "
        style={{ heigth:"100vh" }}
      >
        {routes.map((route, index) => {
          return (
            route.display?
            (<Link to={route.path} key={index} id={route.path} className={currentRoute===route.path?"primary":""} >
              {route.path.slice(1) || "Home"}
            </Link>) :null
          );
        })}
      </Nav>
    </div>
  );
};

export default Menu;
