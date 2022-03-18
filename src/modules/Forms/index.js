import React from "react";
import Layout from "../../shared/Layout";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const Form = () => {
  return (
    <Layout>
      <h1>Forms</h1>
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Link to={"/form/create"} id={"/form/create"}>
              Create Form
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Link to={"/form/view-form"} id={"/form/view-form"}>
              View Forms
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
      <Card className="Card">
        <Card.Body>
          <Card.Title>
            <Link to={"/form/form-responses"} id={"/form/form-responses"}>
              View Responses
            </Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Form;
