import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../shared/Layout/index";
import configs from "../../../../globals/config";

const BlogDetails = (props) => {
  const [blog, setBlog] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/blogs/${props.match.params.id}`).then((res) => {
      setBlog(res.data);
    });
  }, [props.match.params.id]);
  console.log(blog);

  return (
    <Layout>
      {blog && (
        <div className="d-flex">
	  <img src={blog.image_url} alt="blog" width="300" />
	  <div className="ms-3">
      	    <h1>Title: {blog.title}</h1>
            <h2>Category: {blog.category}</h2>
            <h3>Author: {blog.author}</h3>
            <p>{blog.body}</p>
	  </div>
        </div>
      )}
    </Layout>
  );
};

export default BlogDetails;
