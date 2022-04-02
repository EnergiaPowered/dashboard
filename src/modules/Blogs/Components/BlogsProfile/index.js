import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../../shared/Layout/index";
import configs from "../../../../globals/config";

const BlogProfile = (props) => {
  const [blog, setBlog] = useState();

  useEffect(() => {
    axios.get(`${configs.HOST}/blogs/${props.match.params.id}`).then((res) => {
      setBlog(res.data);
    });
  }, [props.match.params.id]);
  console.log(blog);

  return (
    <Layout>
      <h1>Blog Profile</h1>
      {blog && (
        <>
          <h4>{blog.title}</h4>
          
        </>
      )}
    </Layout>
  );
};

export default BlogProfile;
