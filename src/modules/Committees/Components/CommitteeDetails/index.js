import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../shared/Layout/index";
import configs from "../../../../globals/config";

const CommitteeDetails = (props) => {
  const [committee, setCommittee] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/committees`).then((res) => {
      const neededCommittee = res.data.filter(
        (committee) => committee.title === props.match.params.title
      )[0];
      console.log(neededCommittee);
      setCommittee(neededCommittee);
    });
  }, [props.match.params.title]);

  return (
    <Layout>
      {committee && (
        <>
          <h1>{committee.title}</h1>
          <h3>Vision:</h3>
          <p>{committee.vision}</p>
          <h3>Mission:</h3>
          <p>{committee.mission}</p>
        </>
      )}
    </Layout>
  );
};

export default CommitteeDetails;
