import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../shared/Layout";
import configs from "../../../../globals/config";
import { Button, Form } from "react-bootstrap";
import storage from "../../../../globals/db/db";


import "./style.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuther] = useState("");

  const [category, setCategory] = useState("");

  const [body, setBody] = useState("");


  const [image, setimage] = useState("");
  const [url ,seturl] = useState("");
    const [create, setCreate] = useState(false);

  const Data = {
    title: title,
    author: author,
    category: category,
    body: body,
    image_url: url,
  };
  const upload = async() => {
    if (image == null) return;
    const store =storage.ref(`/blogs /${image.name}`);
      store.put(image).on("state_changed", alert("success"), alert);

      store.getDownloadURL()
      .then((url) => {
        // got download URL
        seturl(url);
        console.log(url);
      });
      
  };



  
  
 
const CreateBloghandller = () => {
  console.log(category);
  axios
    .post(`${configs.HOST}/POST/blogs`, Data)
    .then((response) => {
      console.log(response);
    })
    .then(() => setCreate(true))
    .catch(function (error) {
      console.log(error);
    });
};;


  return (
    <Layout>
      {create ? (
        <h2 style={{ textAlign: "center", padding: "5em" }}>
          Form is successfully created
        </h2>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Create New Blog</h1>
          <Form autoComplete="off">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ marginTop: 10 }}>Title</Form.Label>
              <Form.Control
                style={{ width: "75%", padding: 10 }}
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>Author</Form.Label>
              <Form.Control
                style={{ width: "75%", padding: 10 }}
                type="text"
                placeholder="Enter Author"
                value={author}
                onChange={(e) => {
                  setAuther(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>Category</Form.Label>
              <Form.Control
                style={{ width: "75%", padding: 10 }}
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>Body</Form.Label>
              <Form.Control
                style={{ width: "75%", padding: 10 }}
                as="textarea"
                placeholder="Enter Body"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>image</Form.Label>
              <Form.Control
                style={{ width: "75%", padding: 10 }}
                type="file"
                placeholder="Enter img-Url"
                onChange={(e) => {
                  setimage(e.target.files[0]);
                }}
              />
                    <Button onClick={upload}>Upload</Button>

            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => {

                      CreateBloghandller();
              }}
            >
              Create
            </Button>
          </Form>
        </div>
      )}
    </Layout>
  );
};

export default CreateBlog;
