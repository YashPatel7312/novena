import React, { useState } from "react";
import "./BlogPagination.css";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

const posts = [
  {
    id: 1,
    img: blog3,
    title: "Get Free consultation from our special surgeon and doctors",
    date: "28th January",
    comments: "5 Comments",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad."
  },
  {
    id: 2,
    img: blog1,
    title: "Choose quality service over cheap service all type of things",
    date: "28th January",
    comments: "5 Comments",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad."
  },
  {
    id: 3,
    img: blog2,
    title: "All test cost 25% in always in our laboratory",
    date: "28th January",
    comments: "5 Comments",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis aliquid architecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda quam recusandae ipsam ea porro, dicta ad."
  }
];

const BlogPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="blog-pagination-wrapper">
      {currentPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.img} alt={post.title} className="blog-card-image" />
          <div className="blog-meta">
            <span>💬 {post.comments}</span>
            <span>📅 {post.date}</span>
          </div>
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-text">{post.text}</p>
          <button className="blog-read-more">READ MORE →</button>
        </div>
      ))}

      {/* Pagination */}
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="page-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BlogPagination;
