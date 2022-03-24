import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../shared/Layout/index";
import configs from "../../../../globals/config";
import { Card, Container } from "react-bootstrap";

const MemberProfile = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/crew/${props.match.params.id}`).then((res) => {
      setUser(res.data);
    });
  }, [props.match.params.id]);

  return (
    <Layout>
      <h1>Member Profile</h1>
      {user && (
        <>
          <Container style={{ padding: 0, width: "30%" }}>
            <Card.Img
              variant="top"
              src={`https://drive.google.com/uc?exort=view&id=${user.imageID}`}
              style={{ maxWidth: "100%", objectFit: "cover" }}
            />
          </Container>
          <h4>{user.name}</h4>
          <h4>
            {user.committee} Committee - {user.position}
          </h4>
        </>
      )}
    </Layout>
  );
};

export default MemberProfile;
