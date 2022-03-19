import {React,useState} from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Layout from "../../shared/Layout/index";
import configs from "../../globals/config";

const Email = () => {

  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [emails, setEmails] = useState("");
  const onSubjectChange = (e) => setSubject(e.target.value);
  const onFromChange = (e) => setFrom(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);
  const onEmailChange = (e) => setEmails(e.target.value);


  const [validated, setValidated] = useState(false);

  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { emails, text:message,subject };
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`${configs.HOST}/send-emails`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {console.log(res)});
  };

  

  return (
    <Layout>
      <h1>Send Emails</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit1}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Subject"
              maxlength="50"
              minilength="3"
              value={subject}
              onChange={onSubjectChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>From</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="From"
              maxlength="25"
              minilength="3"
              value={from}
              onChange={onFromChange}
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
              onChange={onEmailChange}
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
              onChange={onMessageChange}
            />
          </Form.Group>
        </Row>

        <Button type="submit" onClick={handleSubmit}>
          Send
        </Button>
      </Form>
    </Layout>
  );
};

export default Email;
