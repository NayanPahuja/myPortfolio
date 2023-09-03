// components/BlogPost.js
"use client";

import React from 'react';

const BlogPost = ({ post } : any) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Author: {post.user.name}</p>
    </div>
  );
};

export default BlogPost;
