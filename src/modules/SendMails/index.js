import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import axios from "axios";
import Layout from "../../shared/Layout";
import configs from "../../globals/config";

const Email = () => {
  const [validated, setValidated] = useState(false);

  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [emails, setEmails] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

      return;
    }

    event.preventDefault();

    const data = { from, subject, emails, text: message };

    axios
      .post(`${configs.HOST}/send-emails`, data)
      .then((res) => {
        alert(res.data.message);
        setFrom("");
        setSubject("");
        setEmails("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Something went wrong :(\nPlease check that you entered correct information and try again."
        );
      });
  };

  return (
    <Layout>
      <div style={{ margin: "0 5rem" }}>
        <h1 className="mb-4">Send Emails</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>From</Form.Label>
              <Form.Control
                required
                autoFocus
                type="text"
                placeholder="Energia Powered"
                maxLength="25"
                minLength="3"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Subject"
                maxLength="50"
                minLength="3"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Emails</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="example1@gmail.com example2@gmail.com ..."
                value={emails}
                minLength="8"
                onChange={(e) => setEmails(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                placeholder="Write a Message"
                value={message}
                minLength="5"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Email;
