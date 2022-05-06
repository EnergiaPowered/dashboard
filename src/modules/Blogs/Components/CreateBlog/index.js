import React, { useState } from "react";
import axios from "axios";
import Layout from "../../../../shared/Layout";
import configs from "../../../../globals/config";
import { Button, Form } from "react-bootstrap";
import storage from "../../../../globals/db/db";

import "./style.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [create, setCreate] = useState(false);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImage = () => {
    if (!image) return;

    setLoading(true);
    const store = storage.ref(`/blogs/${image.name}`);
    store.put(image).on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert("Error uploading image");
        setLoading(false);
      },
      () => {
        storage
          .ref(`blogs`)
          .child(`${image.name}`)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            alert("Finished uploading image");
            setLoading(false);
          });
      }
    );
  };

  const CreateBlogHandler = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      author: author,
      category: category,
      body: body,
      bodyMobile: body,
      image_url: url,
    };

    setLoading(true);
    axios
      .post(`${configs.HOST}/blogs`, data)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setCreate(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error creating blog");
        setLoading(false);
      });
  };

  return (
    <Layout>
      {create ? (
        <h2 style={{ textAlign: "center", padding: "5em" }}>
          Blog created successfully
        </h2>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Create New Blog</h1>
          <Form onSubmit={CreateBlogHandler} autoComplete="off">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ marginTop: 10 }}>Title</Form.Label>
              <Form.Control
                style={{ padding: 10 }}
                type="text"
                placeholder="Enter Title"
                value={title}
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>Author</Form.Label>
              <Form.Control
                style={{ padding: 10 }}
                type="text"
                placeholder="Enter Author"
                value={author}
                required
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>Category</Form.Label>
              <Form.Control
                style={{ padding: 10 }}
                type="text"
                placeholder="Enter Category"
                value={category}
                required
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>Body</Form.Label>
              <Form.Control
                style={{ padding: 10 }}
                as="textarea"
                placeholder="Enter Body"
                value={body}
                required
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <Form.Label style={{ marginTop: 10 }}>image</Form.Label>
              <div className="d-flex align-items-start">
                <Form.Control
                  type="file"
                  required
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <Button
                  className="ms-2"
                  variant="warning"
                  onClick={uploadImage}
                  disabled={loading}
                >
                  Upload
                </Button>
              </div>
              {progress !== null ? (
                <p className="mt-2 p-0">{progress}% uploaded</p>
              ) : null}
            </Form.Group>
            <Button
              className="mb-3"
              variant="primary"
              type="submit"
              disabled={loading}
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
