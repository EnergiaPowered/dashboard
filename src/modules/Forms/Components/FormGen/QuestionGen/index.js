import React, { useState } from "react";
import { Form, Input, Space, Button, Radio } from "antd";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import './QuestionGen.css';

const QuestionGen = ({ onRemove, id }) => {
  const [answer, setAnswer] = useState();

  const { TextArea } = Input;

  const handleAnswer = (type) => {
    const a = makeAnswerField(type);
    setAnswer(a);
  };

  const makeAnswerField = (t) => {
    if (t === "TextArea")
      return (
        <Form.Item
          label="Placeholder ::"
          name={`field_${id}_placeholder`}
          rules={[
            {
              required: true,
              message: "field required",
            },
          ]}
        >
          <TextArea
            style={{ maxWidth: "60%" }}
            rows={4}
            placeholder="write a placeholder"
          />
        </Form.Item>
      );

    if (t === "Selection")
      return (
        <Form.List name={`field_${id}_selection`}>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, `selectionItem_${key}`]}
                    fieldKey={[fieldKey, `selectionItem_${key}`]}
                    label={`Option #${index + 1}`}
                    rules={[
                      { required: true, message: "Missing Selection Item" },
                    ]}
                  >
                    <Input
                      placeholder="write a Selection Item"
                      style={{ marginLeft: "1em" }}
                    />
                  </Form.Item>
                  <span
                    className="menu-close"
                    onClick={() => remove(name)}
                    style={{ cursor: "pointer", marginLeft: "2em" }}
                  >
                    <FontAwesomeIcon icon={faTimes} title="Erase option" />
                  </span>
                </Space>
              ))}
              <Form.Item>
                <Button onClick={add} className={"col-3"}>
                  + Add option
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      );

    if (t === "Text" || t === "Email")
      return (
        <Form.Item
          rules={[
            {
              required: true,
              message: "field required",
            },
          ]}
          label="Placeholder ::"
          name={`field_${id}_placeholder`}
        >
          <Input
            style={{ maxWidth: "60%" }}
            placeholder="write a placeholder"
          />
        </Form.Item>
      );
  };

  return (
    <div
      style={{
        boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "1em",
        margin: "1em 0",
      }}
    >
      <Form.Item noStyle>
        <span
          className="menu-close"
          onClick={() => onRemove(id)}
          style={{
            cursor: "pointer",
            float: "right",
            margin: "1em",
            marginTop: "5px",
          }}
        >
          <FontAwesomeIcon icon={faTimes} title="Erase Field" />
        </span>
        <br />

        <Form.Item
          rules={[
            {
              required: true,
              message: "field required",
            },
          ]}
          label="Label ::"
          name={`field_${id}_label`}
        >
          <Input
            placeholder="Please enter a label for the field"
            style={{ maxWidth: "60%", marginLeft: "2.7em" }}
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "field required",
            },
          ]}
          label="Answer Type ::"
          name={`field_${id}_answerType`}
        >
          <Radio.Group
            onChange={(e) => {
              handleAnswer(e.target.value);
            }}
          >
            <Radio.Button value="Text" style={{ background: "transparent" }}>
              Text
            </Radio.Button>
            <Radio.Button value="Email" style={{ background: "transparent" }}>
              Email
            </Radio.Button>
            <Radio.Button
              value="TextArea"
              style={{ background: "transparent" }}
            >
              TextArea
            </Radio.Button>
            <Radio.Button
              value="Selection"
              style={{ background: "transparent" }}
            >
              Selection
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        {answer}
        <Form.Item
          rules={[
            {
              required: true,
              message: "field required",
            },
          ]}
          label="Is it required ::"
          name={`field_${id}_isRequired`}
        >
          <Radio.Group>
            <Radio.Button value={true} style={{ background: "transparent" }}>
              Yes
            </Radio.Button>
            <Radio.Button value={false} style={{ background: "transparent" }}>
              No
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form.Item>
    </div>
  );
};

export default QuestionGen;
