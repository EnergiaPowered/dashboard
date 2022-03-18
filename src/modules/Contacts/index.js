import axios from "axios";
import React, { useEffect, useState } from "react";
import configs from "../../globals/config";
import Layout from "../../shared/Layout";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});

  useEffect(() => {
    axios.get(`${configs.HOST}/contactInfo`).then((res) => {
      setContactInfo(res.data);
    });
  }, []);

  return (
    <Layout>
      <h1>Contacts</h1>
      <h4>Address: {contactInfo.address}</h4>
      <h4>Email: {contactInfo.email}</h4>
      <h4>Phone: {contactInfo.phone}</h4>
    </Layout>
  );
};

export default Contact;
