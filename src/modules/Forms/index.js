import React from "react";
import Layout from "../../shared/Layout";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const Form = () => {
  return (
    <Layout>
      <h1>Form</h1>
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Link to={"/form/viewform"} id={"/form/viewform"}>
              View Forms
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Link to={"/form/formresponse"} id={"/form/formresponse"}>
              View Responses
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Link to={"/form/creation"} id={"/form/creation"}>
              Create Form
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Form;
