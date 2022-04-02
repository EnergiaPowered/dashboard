import axios from "axios";
import React, { useEffect, useState } from "react";
import configs from "../../globals/config";
import Layout from "../../shared/Layout";
import CommitteeCard from "./Components/CommitteeCard";
import { Button } from "react-bootstrap";


const Committees = () => {
  const [committees, setCommittees] = useState([]);

  useEffect(() => {
    axios.get(`${configs.HOST}/committees`).then((res) => {
      console.log(res.data);
      setCommittees(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`${configs.HOST}/committees/${id}`).then((res) => {
      setCommittees(res.data);
    });
  };
  const handleDeleteAll = async () => {
    axios.delete(`${configs.HOST}/committees/`).then((res) => {
      setCommittees([]);
    });
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Committees</h1>
      <Button variant="danger" onClick={() => handleDeleteAll()}>
        Delete All
      </Button>
      {committees ? (
        <div className="flex-container">
          {committees.map((committee, index) => (
            <CommitteeCard
              key={index}
              committee={committee}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <h3>There are no committees yet</h3>
      )}
    </Layout>
  );
};

export default Committees;
