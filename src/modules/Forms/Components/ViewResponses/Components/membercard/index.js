import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const FormCard = ({ formName, handleDelete }) => {
  return (
    <Card style={{ flex: "50%", margin: "0.5em" }}>
      <Card.Body>
        <Card.Title>{formName}</Card.Title>

        <Button>
          <Link
            to={"/form/form-responses/" + formName}
            style={{ color: "#fff" }}
          >
            View Responses
          </Link>
        </Button>
        <Button variant="danger" onClick={() => handleDelete(formName)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FormCard;
