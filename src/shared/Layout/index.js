import React, { useState } from "react";
import Navbar1 from "./../Navbar/index";
import { Container, Row, Col } from "react-bootstrap";
import NavMenu from "./../Menu/index";
import "./style.css";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container fluid style={{ background: "#eee" }}>
      <Row
        style={{
          height: "7vh",
          overflow: "auto",
        }}
      >
        <Navbar1 toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      </Row>
      <Row
        style={{
          height: "93vh",
          overflow: "auto",
        }}
      >
        <Col
          xs={collapsed ? 1 : 2}
          md={collapsed ? 1 : 2}
          lg={collapsed ? 1 : 2}
        >
          <div
            style={{
              height: "100%",
              position: "fixed",
              background: "#fff",
              left: "0px",
              width: collapsed ? "" : "15%",
            }}
          >
            <NavMenu collapsed={collapsed} />
          </div>
        </Col>
        <Col>
          <div>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
