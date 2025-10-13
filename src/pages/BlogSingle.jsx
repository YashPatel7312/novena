import React from "react";
import PageHero from "../components/PageHero";
import SingleBlogPage from "../blogsinglecompo/SingleBlogPage";

const BlogSingle = () => {
  return (
    <div className="page">
      <PageHero title="Blog Single" subtitle="News details" />
      <SingleBlogPage />
    </div>
  );
};

export default BlogSingle; // ✅ This line is crucial
