import React , {useState} from 'react';
import {
  Container,
  Navbar,Row,Col
} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar1 = (props) => {

    return (
      <Navbar style={{background:"#010e30 "}} expand={false}>
        <Container fluid bg="#010e30">
          <Row xs={4}>
            <Col xs={2}>
              <img
                src="images/EPLogo.png"
                alt="logo"
                style={{
                  width: "3em",
                  margin: "-5px 0 -5px 0",
                  padding: "0",
                }}
              />
            </Col>
            <Col xs={6}>
              <h2 style={{color:"white"}}>Dashboard</h2>
            </Col>
            <Col xs={1}>
              <span onClick={props.toggle}>
                <FontAwesomeIcon
                  className="navbar-toggler-icon"
                  icon={faBars}
                  style={{ marginTop: "0.5em", color:"white" }}
                />
              </span>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </Navbar>
    );
}
 
export default Navbar1;