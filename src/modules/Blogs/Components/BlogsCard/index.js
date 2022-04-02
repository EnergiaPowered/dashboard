import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const BlogsCard = ({ title, handleDelete }) => {
  console.log(title);
  return (
    <Card style={{ flex: "30%", margin: "0.5em" ,maxWidth: "30%"}}>
      <Card.Body>
        <Card.Title style={{ minHeight: "100px"}}>{title}</Card.Title>
        
        <div className="d-flex justify-content-between">
          <Button variant="primary">
            <Link to={"/blog/profile/" + title.ID} style={{ color: "white" }}>
              view blog
            </Link>
          </Button>
          <Button variant="danger" onClick={() => handleDelete(title.id)}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogsCard;
