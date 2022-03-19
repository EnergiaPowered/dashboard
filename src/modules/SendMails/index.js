import {React,useState} from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import Layout from "../../shared/Layout/index";

const Email = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Layout>
      <h1>Send Emails</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Emails</Form.Label>
            <Form.Control required as="textarea" placeholder="Emails" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>From</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="From"
              maxlength="10"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Subject"
              maxlength="10"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              placeholder="Write a Message"
            />
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Layout>
  );
};

export default Email;
