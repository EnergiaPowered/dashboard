import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./../../../../../../shared/Layout/index";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ResponseTable = (props) => {
  const [form, setForm] = useState();
  async function u() {
    axios
      .get(`http://localhost:8000/api/form/response/${props.match.params.name}`)
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
      });
  }
  useEffect(() => {
    u();
  }, []);

  return (
    <Layout>
      {form ? (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h1 style={{ margin: "auto" }}>Form {form.name} Responses</h1>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename={`Response-Table-${form.name}`}
              sheet={`Response-Table-${form.name}`}
              buttonText="Download as XLS"
            />
          </div>
          <hr />
          <table id="table-to-xls" className="table">
            <thead>
              <tr>
                {form["headers"].map((header, index) => {
                  return <th key={index}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {form["content"].map((row, index) => {
                return (
                  <tr key={index}>
                    {row.map((tdata, indx) => {
                      return <td key={indx}>{tdata}</td>;
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
