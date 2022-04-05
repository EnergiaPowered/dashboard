import React from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/EPLogo.png";
import authHeader from "../../globals/auth-header";

const NavBar = ({ toggleCollapsed, collapsed }) => {
  return (
    <Navbar
      style={{
        background: "#010e30",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
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
            <h2 style={{ color: "white", marginBottom: 0 }}>Dashboard</h2>
          </Col>
          <Col xs={1}>
            {Object.keys(authHeader()).length !== 0 && (
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
            )}
          </Col>
          <Col xs={4}></Col>
        </Row>
        {Object.keys(authHeader()).length !== 0 && (
          <Button
            variant="outline-light"
            onClick={() => {
              localStorage.removeItem("user");
              window.location.reload();
            }}
          >
            logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
