import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Layout from "../../../../../../shared/Layout";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import configs from "../../../../../../globals/config";
import "./style.css";

const ResponseTable = (props) => {
  const [form, setForm] = useState();

  useEffect(() => {
    axios
      .get(`${configs.HOST}/formRes/${props.match.params.name}`)
      .then((res) => {
        res.data.headers = res.data.headers.map(
          (header, index) => header[`field_${index + 1}_label`]
        );
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
            <h1 style={{ margin: "auto", textTransform: "capitalize" }}>
              {form.name}
            </h1>
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
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {form["content"].map((row, index) => {
                return (
                  <tr key={index}>
                    {form["headers"].map((header, indx) => {
                      return <td key={indx}>{row[header]}</td>;
                    })}
                    <td>
                      {moment(row.timestamp).format("DD/MM/YYYY, h:mm:ss A")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <h1> Form Response not Found</h1>
      )}
    </Layout>
  );
};

export default ResponseTable;
