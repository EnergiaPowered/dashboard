import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/EPLogo.png";

const NavBar = ({ toggleCollapsed, collapsed }) => {
  return (
    <Navbar
      style={{
        background: "#010e30",
        position: "fixed",
        width: "100%",
        zIndex: 20,
      }}
      expand={false}
    >
      <Container fluid bg="#010e30">
        <Row xs={4}>
          <Col xs={2}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "3.3em",
                margin: "-5px 0 -5px 0",
                padding: "0",
              }}
            />
          </Col>
          <Col xs={6}>
            <h2 style={{ color: "white" }}>Dashboard</h2>
          </Col>
          <Col xs={1}>
            <div
              onClick={toggleCollapsed}
              style={{
                marginLeft: "0.4em",
                color: "#fff",
                fontSize: "1.3em",
                cursor: "pointer",
              }}
              type="ghost"
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
