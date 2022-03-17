import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../../../../shared/Layout/index";
import configs from "../../../../globals/config";

const MemberProfile = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`${configs.HOST}/members/${props.match.params.id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res);
      });
  }, [props.match.params.id]);
  return (
    <Layout>
      <h1>Member Profile</h1>
      {user ? <h2>name: {user.name}</h2> : null}
    </Layout>
  );
};

export default MemberProfile;
