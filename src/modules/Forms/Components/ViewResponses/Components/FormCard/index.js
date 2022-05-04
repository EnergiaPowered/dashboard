import React from "react";
import { Card, Button } from "react-bootstrap";
import { Popconfirm, message } from "antd";
import { Link } from "react-router-dom";
import "./style.css";

const FormCard = ({ formName, handleDelete }) => {
  const confirm = (e) => {
    handleDelete(formName);
    message.error("Responses Deleted");
  };

  function cancel(e) {
    message.success("Responses not Deleted");
  }
  return (
    <Card style={{ flex: "30%", margin: "0.5em" }}>
      <Card.Body>
        <Card.Title
          style={{ textTransform: "capitalize", marginBottom: "1rem" }}
        >
          {formName}
        </Card.Title>
        <div className="d-flex justify-content-between">
          <Button>
            <Link
              to={"/form/form-responses/" + formName.split(" ").join("-")}
              style={{ color: "#fff" }}
            >
              View Responses
            </Link>
          </Button>

          <Popconfirm
            title="Are you sure to delete that?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button variant="danger">Delete</Button>
          </Popconfirm>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FormCard;
