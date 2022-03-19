import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../../../shared/Layout";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import configs from "../../../../../../globals/config";

const ResponseTable = (props) => {
  const [form, setForm] = useState();

  useEffect(() => {
    axios
      .get(`${configs.HOST}/form/response/${props.match.params.name}`)
      .then((res) => {
        console.log(res.data);
        setForm(res.data);
      });
  }, [props.match.params.name]);

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
              filename={form.name}
              sheet="Sheet1"
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
