import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const FormCard = ({ formName, handledelete }) => {
  return (
    <Card style={{ flex: "50%", margin: "0.5em" }}>
      <Card.Body>
        <Card.Title>{formName}</Card.Title>

        <Button>
          <Link to={"/form/formresponse/" + formName} style={{ color: "#fff" }}>
            View Responses
          </Link>
        </Button>
        <Button variant="danger" onClick={() => handledelete(formName)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FormCard;
