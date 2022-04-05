import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";
import NavBar from "../../shared/Navbar";
import { login } from "./Services";
import authHeader from "../../globals/auth-header";
import "./style.css";

export default function Login(props) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(
    Object.keys(authHeader()).length !== 0
  );
  const [form] = Form.useForm();

  const handleLogin = (data) => {
    setMessage("");
    setLoading(true);
    login(data)
      .then(() => {
        form.resetFields();
        setLoggedIn(true);
      })
      .catch((error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };

  if (loggedIn) return <Redirect to="/" />;

  return (
    <>
      <NavBar />
      <main className="container" style={{ marginTop: "5rem" }}>
        <h1>Log In</h1>
        <Form form={form} onFinish={handleLogin}>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <Form.Item
            name={"email"}
            label="Email"
            style={{ display: "block" }}
            rules={[
              {
                type: "email",
                message: "Please enter a valid email",
              },
              {
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            style={{ display: "block" }}
            rules={[
              {
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="login-submit">
            <Button
              type="secondary"
              htmlType="submit"
              size="large"
              disabled={loading}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}
