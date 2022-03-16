import React from "react";
import { Button } from "react-bootstrap";
import Layout from "../../shared/Layout";
import { Card } from "react-bootstrap";
const Form = () => {

  return (
    <Layout route="/form">
      <h1>Form</h1>
      <Card>
        
          <Card.Body>
            <Card.Title>View Forms</Card.Title>
          </Card.Body>
    
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>View Responses</Card.Title>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Form;
