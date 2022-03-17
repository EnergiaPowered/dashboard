import React, { useState, useEffect } from "react";
import Layout from "../../shared/Layout";
import MemberCard from "./Components/membercard";
import axios from "axios";
import "./style.css";
const Members = () => {
  const [users, setUsers] = useState();
  async function getusers() {
    axios.get(`http://localhost:8000/members/`).then((res) => {
      setUsers(res.data);
    });
  }
  useEffect(() => {
    getusers();
  }, [users]);

  const handledelete = async (id) => {
    axios.delete(`http://localhost:8000/members/${id}`).then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <Layout>
      <h1>Members</h1>
      {users ? (
        <div className="flex-container">
          {users.map((user) => (
            <MemberCard key={user.id} user={user} handledelete={handledelete} />
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default Members;
