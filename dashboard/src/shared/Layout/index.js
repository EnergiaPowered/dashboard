import React, { useState } from "react";
import Navbar1 from "./../Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./../Menu/index";

const Layout = ({ children , route }) => {
  const [toggle, setToggle] = useState("open");
  function handleToggle() {
    toggle === "close" ? setToggle("open") : setToggle("close");
  }
  return (
    <Container fluid>
      <Row>
        <Navbar1 toggle={handleToggle} />
      </Row>
      <Row
        style={{
          height: "100vh",

          overflow: "auto",
        }}
      >
        <Col xs={4} md={4} lg={3}>
          <Menu toggle={toggle} currentRoute={route} />
        </Col>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
