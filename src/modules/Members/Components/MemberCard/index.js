import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const MemberCard = ({ user, handleDelete }) => {
  return (
    <Card style={{ flex: "30%", margin: "0.5em" }}>
      <Container style={{ padding: 0 }}>
        <Card.Img
          variant="top"
          src={`https://drive.google.com/uc?exort=view&id=${user.imageID}`}
          style={{ maxWidth: "100%", objectFit: "cover", height: "17rem" }}
        />
      </Container>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.committee}</Card.Text>
        <Card.Text>{user.position}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">
            <Link to={"/member/profile/" + user.ID} style={{ color: "white" }}>
              Open Profile
            </Link>
          </Button>
          <Button variant="danger" onClick={() => handleDelete(user.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
