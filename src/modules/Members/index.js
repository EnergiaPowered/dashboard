import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../shared/Layout";
import configs from "../../globals/config";
import MemberCard from "./Components/membercard";
import "./style.css";

const Members = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/crew/`).then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`${configs.HOST}/crew/${id}`).then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Members</h1>
      {users ? (
        <div className="flex-container">
          {users.map((user, index) => (
            <MemberCard key={index} user={user} handleDelete={handleDelete} />
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default Members;
