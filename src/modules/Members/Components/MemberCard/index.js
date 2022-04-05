import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const MemberCard = ({ member, handleDelete }) => {
  return (
    <Card style={{ flex: "30%", margin: "0.5em" }}>
      <Container style={{ padding: 0 }}>
        <Card.Img
          variant="top"
          src={`https://drive.google.com/uc?exort=view&id=${member.imageID}`}
          style={{ maxWidth: "100%", objectFit: "cover", height: "17rem" }}
        />
      </Container>
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <Card.Text>{member.committee}</Card.Text>
        <Card.Text>{member.position}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary">
            <Link
              to={"/member/profile/" + member.ID}
              style={{ color: "white" }}
            >
              Open Profile
            </Link>
          </Button>
          <Button variant="danger" onClick={() => handleDelete(member.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
