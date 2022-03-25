import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../../../../shared/Layout/index";
import FormCard from "./Components/FormCard/index";
import configs from "../../../../globals/config";

const ViewResponses = () => {
  const [forms, setForms] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/form/`).then((res) => {
      setForms(res.data);
    });
  }, []);

  const handleDelete = async (name) => {
    axios.delete(`${configs.HOST}/formRes/${name}`).then((res) => {
      setForms(res.data);
    });
  };

  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Forms</h1>
      {forms ? (
        <div className="flex-container">
          {forms.map(({ title: formName }, index) => (
            <FormCard
              key={index}
              formName={formName}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default ViewResponses;
