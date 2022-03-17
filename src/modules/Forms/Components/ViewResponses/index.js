import React from "react";
import Layout from "./../../../../shared/Layout/index";
import axios from "axios";
import { useState, useEffect } from "react";
import FormCard from "./Components/membercard/index";

const ViewResponses = () => {
  const [forms, setForms] = useState();
  async function getForms() {
    axios.get(`http://localhost:8000/api/form/response/`).then((res) => {
      console.log(res.data);
      setForms(res.data);
    });
  }
  useEffect(() => {
    getForms();
  }, [forms]);

  const handleDelete = async (name) => {
    axios
      .delete(`http://localhost:8000/api/form/response/${name}`)
      .then((res) => {
        setForms(res.data);
      });
  };
  return (
    <Layout route="/forms">
      <h1>Forms</h1>
      {forms ? (
        <div className="flex-container">
          {forms.map((formName, index) => (
            <div>
              <FormCard
                key={index}
                formName={formName}
                handleDelete={handleDelete}
              />
            </div>
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default ViewResponses;
