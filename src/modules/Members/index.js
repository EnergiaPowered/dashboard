import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../shared/Layout";
import configs from "../../globals/config";
import MemberCard from "./Components/MemberCard/index";
import "./style.css";

const Members = () => {
  const [members, setMembers] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/crew/`).then((res) => {
      setMembers(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`${configs.HOST}/crew/${id}`).then((res) => {
      setMembers(res.data);
    });
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Members</h1>
      {members ? (
        <div className="flex-container">
          {Object.keys(members).map((committee, index) => (
            <div key={committee}>
              <h1 className="mb-3">{committee}</h1>
              {members[committee].map((member) => (
                <MemberCard
                  key={index}
                  member={member}
                  handleDelete={handleDelete}
                />
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default Members;
