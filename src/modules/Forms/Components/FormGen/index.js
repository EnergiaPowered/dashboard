import React, { useState } from "react";
import { Form, Input, Button, DatePicker } from "antd";
import axios from "axios";
import configs from "../../../../globals/config";
import Layout from "../../../../shared/Layout";
import QuestionGen from "./QuestionGen";
import "./style.css";

const FormGen = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fields, setField] = useState([{ id: 1, value: {} }]);

  const { TextArea } = Input;

  const getObjects = (someObj, partOfKey) => {
    let neededObjects = [];

    for (let key in someObj) {
      if (`${key}`.includes(partOfKey))
        neededObjects.push({ [key]: someObj[key] });
    }

    return neededObjects;
  };

  const getValue = (someArrOfObjs, partOfKey) => {
    let neededItem;

    for (let obj of someArrOfObjs) {
      for (let key in obj) {
        if (`${key}`.includes(partOfKey)) neededItem = obj[key];
      }
    }

    return neededItem;
  };

  const getField = (fieldProps) => {
    const fields = [];

    for (let i = 1; i <= fieldProps.fieldLabels.length; i++) {
      let field = {
        label: getValue(fieldProps.fieldLabels, `field_${i}_`),
        type: getValue(fieldProps.fieldAnswerTypes, `field_${i}_`),
        isRequired: getValue(fieldProps.fieldIsRequired, `field_${i}_`),
      };

      if (field.type === "Selection") {
        const modified = [];
        const options = getValue(fieldProps.fieldSelections, `field_${i}_`);

        for (let item of options) {
          modified.push({
            value: Object.values(item)[0],
            label: Object.values(item)[0],
          });
        }

        field["options"] = modified;
      } else {
        field["placeholder"] = getValue(
          fieldProps.fieldPlaceholders,
          `field_${i}_`
        );
      }

      fields.push(field);
    }

    return fields;
  };

  const submit = (values) => {
    const fieldProps = {
      fieldLabels: getObjects(values, "_label"),
      fieldAnswerTypes: getObjects(values, "_answerType"),
      fieldSelections: getObjects(values, "_selection"),
      fieldPlaceholders: getObjects(values, "_placeholder"),
      fieldIsRequired: getObjects(values, "_isRequired"),
    };

    const formData = {
      title: values.name.toLowerCase(), //"" Title of the event => also used to generate form's url
      description: values.description, //""
      postSubmit: values.postSubmit, //"" shown after the form is submitted
      postEvent: values.postEvent, //"" shown after the event is ended
      preEvent: values.preEvent, //"" shown before the event is starts
      resultSheet: values.resultSheet, //"" link of the sheet in-which results shall be stored
      startDate: values.startDate._d.toISOString(), //""
      endDate: values.endDate._d.toISOString(), //""
      fields: getField(fieldProps), //[{label:"", type:"", placeholder:""?, option:[{value,label}]?,isReq:bool}]
    };
    const formRes = {
      name: formData.title,
      headers: fieldProps.fieldLabels,
      content: [],
    };

    axios
      .post(`${configs.HOST}/form`, formData)
      .then((response) => {
        console.log(response);
      })
      .then(() => setSubmitted(true))
      .catch(function (error) {
        console.log(error);
      });
    axios
      .post(`${configs.HOST}/formRes`, formRes)
      .then((response) => {
        console.log(response);
      })
      .then(() => setSubmitted(true))
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeField = (id) => {
    const f = fields.filter((f) => f.id !== id);
    setField(f);
  };

  const addField = () => {
    const id = fields.length ? fields[fields.length - 1].id + 1 : 1;
    setField([...fields, { id: id, value: {} }]);
  };

  return (
    <Layout>
      <div style={{ paddingBottom: " 3rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: " 3rem" }}>
          Create Form
        </h1>

        {submitted ? (
          <h2 style={{ textAlign: "center", padding: "5em" }}>
            Form is successfully created
          </h2>
        ) : (
          <div className="row">
            <div className="col-lg-2 col-sm-0"></div>
            <div className="col-lg-8 col-sm-12">
              <Form onFinish={submit} autoComplete="off">
                <Form.Item
                  name={"name"}
                  label="Event Title :"
                  style={{ display: "block" }}
                  rules={[
                    {
                      required: true,
                      message: "Please give a name for the Event :D",
                    },
                  ]}
                >
                  <Input placeholder="Event title" />
                </Form.Item>
                <Form.Item
                  name={"description"}
                  label="Event Description :"
                  style={{ display: "block" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a description for the form",
                    },
                  ]}
                >
                  <TextArea placeholder="Write a description for the form" />
                </Form.Item>
                <Form.Item>
                  {fields.map(({ id }) => (
                    <QuestionGen id={id} key={id} onRemove={removeField} />
                  ))}
                </Form.Item>
                <Button onClick={addField} block>
                  + Add field
                </Button>
                <br />
                <br />
                <Form.Item
                  name={"postSubmit"}
                  label="Post-Submission message"
                  style={{ display: "block" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a message",
                    },
                  ]}
                >
                  <TextArea placeholder="Write a message to be shown after the form is submitted" />
                </Form.Item>
                <Form.Item
                  name={"preEvent"}
                  label="Pre-Event message"
                  style={{ display: "block" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a message",
                    },
                  ]}
                >
                  <TextArea placeholder="Write a message to be shown before the event starts" />
                </Form.Item>
                <Form.Item
                  name={"postEvent"}
                  label="Post-Event message"
                  style={{ display: "block" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a message",
                    },
                  ]}
                >
                  <TextArea placeholder="Write a message to be shown after the event ends" />
                </Form.Item>

                <Form.Item
                  name={"resultSheet"}
                  label="Google Sheet link"
                  style={{ display: "block" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a the link of the sheet",
                    },
                  ]}
                >
                  <Input placeholder="Insert link of the sheet in-which results shall be stored " />
                </Form.Item>

                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Date required",
                    },
                  ]}
                  label="Start Date"
                  name={"startDate"}
                >
                  <DatePicker showTime={{ format: "HH:mm" }} />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Date required",
                    },
                  ]}
                  label="End  Date"
                  name={"endDate"}
                >
                  <DatePicker
                    showTime={{ format: "HH:mm" }}
                    style={{ marginLeft: "5px" }}
                  />
                </Form.Item>

                <Button htmlType="submit" size="large" block>
                  Apply
                </Button>
              </Form>
            </div>
            <div className="col-lg-2 col-sm-0"></div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FormGen;
