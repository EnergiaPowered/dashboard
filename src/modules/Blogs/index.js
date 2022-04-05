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
            setBlogs(res.data);
    });
  };
  const handleDeleteAll = async () => {
    axios.delete(`${configs.HOST}/blogs/`).then((res) => {
            setBlogs([]);
    });
  };
  const CreateBlog = async () => {
    console.log("create blog");
  };
  console.log(blogs);

  return (
    <Layout>
      <h1>Blogs</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="primary" onClick={() => CreateBlog()}>
          Create Blog
        </Button>
        <Button variant="danger" onClick={() => handleDeleteAll()}>
          Delete All
        </Button>
      </div>
      {blogs ? (
        <div className="flex-container">
          {blogs.map((blog, index) => (
            <BlogsCard
              key={index}
              title={blog.title}
              id={blog.id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      ) : null}
    </Layout>
  );
};

export default Blogs;
