import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../shared/Layout";
import configs from "../../globals/config";
import { Button } from "react-bootstrap";

import BlogsCard from "./Components/BlogsCard/index";
import "./style.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/blogs/`).then((res) => {
      setBlogs(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    axios.delete(`${configs.HOST}/blogs/${id}`).then((res) => {
      setBlogs([]);
    });
  };
  const handleDeleteAll = async () => {
    axios.delete(`${configs.HOST}/blogs/`).then((res) => {
      setBlogs(res.data);
    });
  };
  const CreateBlog = async () => {
    axios.delete(`${configs.HOST}/blogs/`).then((res) => {
      setBlogs(res.data);
    });
  };
  console.log(blogs);

  return (
    <Layout>
      <h1>Blogs</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="primary" onClick={() => handleDeleteAll()}>
          Create Blog
        </Button>
        <Button variant="danger" onClick={() => CreateBlog()}>
          Delete All
        </Button>
      </div>
      {blogs ? (
        <div className="flex-container">
          {blogs.map((e, index) => (
            <BlogsCard
              key={index}
              title={e.title}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default Blogs;
