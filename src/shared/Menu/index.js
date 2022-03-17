import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, LinkOutlined } from "@ant-design/icons";

import routes from "../../globals/routes";
// import { Nav } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";

const NavMenu = ({ collapsed }) => {
  const { SubMenu } = Menu;

  return (
    <Menu
      mode="vertical"
      theme="light"
      inlineCollapsed={collapsed}
      style={{ minHeight: "100vh" }}
    >
      {routes.map((route, index) => {
        return route.display && !route.sub ? (
          <Menu.Item key={index} icon={<AppstoreOutlined />}>
            <Link to={route.path} key={index} id={route.path}>
              {route.sub ? null : route.label}
            </Link>
          </Menu.Item>
        ) : route.sub ? (
          <SubMenu
            title={
              <Link to={route.path} key={route.path} id={route.path}>
                {route.label}
              </Link>
            }
            key={index}
            icon={<LinkOutlined />}
          >
            {route.sub.map((subRoute, index) => {
              return subRoute.display ? (
                <Menu.Item key={subRoute.path}>
                  <Link
                    to={subRoute.path}
                    key={index + subRoute.path}
                    id={subRoute.path}
                  >
                    {subRoute.label}
                  </Link>
                </Menu.Item>
              ) : null;
            })}
          </SubMenu>
        ) : null;
      })}
    </Menu>
  );
};

export default NavMenu;
