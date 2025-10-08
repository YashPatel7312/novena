import React from "react";
import PageHero from "../components/PageHero";

const BlogSingle = () => {
  return (
    <div className="page">
      <PageHero title="Blog Single" subtitle="News details" />
      <h1>Blog Single Page</h1>
      <p>This is the blog single page content.</p>
    </div>
  );
};

export default BlogSingle; // ✅ This line is crucial
