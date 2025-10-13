import React from "react";
import PageHero from "../components/PageHero";
import BlogPage from "../blogsidecompo/BlogPage";

const BlogWithSidebar = () => {
  return (
    <div className="page">
      <PageHero title="Blog articles" subtitle="Our blog" />
      <BlogPage />
    </div>
  );
};

export default BlogWithSidebar;  // ✅ default export
