import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../../../../../../shared/Layout/index";
import ReactHTMLTableToExcel from "react-html-table-to-excel";


const ResponseTable = (props) => {
  const [form, setForm] = useState();
  async function u() {
    axios
    .get(`http://localhost:8000/forms/${props.match.params.name}`)
    .then((res) => {
      setForm(res.data);
      console.log(res.data);
    });
  }
  useEffect( () => {
       u();
  }, []); 
  
  return (
    <Layout>
      <h1> member profile</h1>
      {form ? (
        <>
          <h2>name: {form.name}</h2>
          <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                <table id="table-to-xls">
            <thead>
              <tr>
                {form["headers"].map((header, index) => {
                  return <th key={index}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {form["body"].map((element, index) => {
                return (
                  <tr key={index}>
                    {form.headers.map((header, indx) => {
                      return <td key={indx}>{element[header]}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : null}
    </Layout>
  );
};

export default ResponseTable;


