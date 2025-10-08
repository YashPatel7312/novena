import React from "react";
import PageHero from "../components/PageHero";

const BlogWithSidebar = () => {
  return (
    <div className="page">
      <PageHero title="Blog articles" subtitle="Our blog" />
      <h1>Blog With Sidebar</h1>
      <p>This is the blog with sidebar page content.</p>
    </div>
  );
};

export default BlogWithSidebar;  // ✅ default export
