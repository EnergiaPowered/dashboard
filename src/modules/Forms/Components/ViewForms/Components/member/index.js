import React, { useState, useEffect } from "react";
import Layout from "./../../../../shared/Layout/index";
import axios from "axios";

const MemberProfile = (props) => {
  const [user, setUser] = useState();
  async function u (){
        axios
        .get(`http://localhost:8000/members/${props.match.params.id}`)
        .then((res) => {
           setUser(res.data)
          console.log(res);
        });    
      }
      useEffect(() => {
        u()
      },[]);
  return (
    <Layout>
      <h1> member profile</h1>
      {user ? <h2>name: {user.name}</h2> : null}
    </Layout>
  );
};

export default MemberProfile;
