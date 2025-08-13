import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    title: "How I Built My Portfolio",
    date: "August 5, 2025",
    content:
      "In this post, I share how I created a modern portfolio using React, Tailwind, and MongoDB for blog storage.",
  },
  {
    title: "Top 5 React Interview Questions",
    date: "July 30, 2025",
    content:
      "A quick guide to the most common React questions I faced in fresher-level interviews and how I answered them.",
  },
];

function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="blog-title">Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
