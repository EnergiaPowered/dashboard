import React, { useState } from "react";
import NavBar from "./../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import NavMenu from "./../Menu";
import "./style.css";
import { Redirect } from "react-router-dom";
import authHeader from "../../globals/auth-header";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  if (!Object.keys(authHeader()).length) {
    return <Redirect to="/login" />;
  }
  return (
    <Container fluid>
      <Row>
        <NavBar toggleCollapsed={toggleCollapsed} collapsed={collapsed} flag={true} />
      </Row>
      <Row>
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
              paddingTop: "4rem",
            }}
          >
            <NavMenu collapsed={collapsed} />
          </div>
        </Col>
        <Col style={{ paddingTop: "6rem" }}>
          <div>{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
