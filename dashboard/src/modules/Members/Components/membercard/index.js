import React from 'react';
import { Card ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./style.css";
const MemberCard = ({user ,handledelete}) => {


    
    return (
      <Card style={{ flex: "30%", margin: "0.5em" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.age}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">
            <Link to={"/memberprofile/" + user.id}>More Details</Link>
          </Button>
          <Button variant="danger" onClick={()=>handledelete(user.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    );
}
 
export default MemberCard;