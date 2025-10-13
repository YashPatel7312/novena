import React from "react";
import "./BlogPage.css";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg"; // ✅ Import your third image here

const BlogPage = () => {
  return (
    <div className="container">
      <div className="blog-wrapper">
        {/* Left Content */}
        <div className="blog-content">
          {/* Post 1 */}
          <div className="blog-post">
            <img
              src={blog1}
              alt="Dental tools"
              className="post-image"
            />
            <div className="post-meta">
              <span>💬 5 Comments</span>
              <span>📅 28th January</span>
            </div>
            <h2 className="post-title">
              Choose quality service over cheap service all type of things
            </h2>
            <p className="post-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis
              aliquid architecto facere commodi cupiditate omnis voluptatibus
              inventore atque velit cum rem id assumenda quam recusandae ipsam ea
              porro, dicta ad.
            </p>
            <button className="read-more">READ MORE →</button>
          </div>

          {/* Post 2 */}
          <div className="blog-post">
            <img
              src={blog2}
              alt="Lab"
              className="post-image"
            />
            <div className="post-meta">
              <span>💬 5 Comments</span>
              <span>📅 28th January</span>
            </div>
            <h2 className="post-title">
              All test cost 25% in always in our laboratory
            </h2>
            <p className="post-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis
              aliquid architecto facere commodi cupiditate omnis voluptatibus
              inventore atque velit cum rem id assumenda quam recusandae ipsam ea
              porro, dicta ad.
            </p>
            <button className="read-more">READ MORE →</button>
          </div>

          {/* ✅ Post 3 */}
          <div className="blog-post">
            <img
              src={blog3}
              alt="Consultation"
              className="post-image"
            />
            <div className="post-meta">
              <span>💬 5 Comments</span>
              <span>📅 28th January</span>
            </div>
            <h2 className="post-title">
              Get Free consultation from our special surgeon and doctors
            </h2>
            <p className="post-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blanditiis
              aliquid architecto facere commodi cupiditate omnis voluptatibus
              inventore atque velit cum rem id assumenda quam recusandae ipsam ea
              porro, dicta ad.
            </p>
            <button className="read-more">READ MORE →</button>
          </div>

          {/* ✅ Pagination Section */}
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">&gt;</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="sidebar">
          {/* Search */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Search Here</h3>
            <div className="underline"></div>
            <input type="text" placeholder="search" className="search-input" />
          </div>

          {/* Popular Posts */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Popular Posts</h3>
            <div className="underline"></div>
            <ul className="popular-posts">
              <li>
                <span className="post-date">03 Mar 2018</span>
                <p>Thoughtful living in Los Angeles</p>
              </li>
              <li>
                <span className="post-date">03 Mar 2018</span>
                <p>Vivamus molestie gravida turpis.</p>
              </li>
              <li>
                <span className="post-date">03 Mar 2018</span>
                <p>Fusce lobortis lorem at ipsum semper sagittis</p>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Categories</h3>
            <div className="underline"></div>
            <ul className="category-list">
              <li>Medicine <span>(14)</span></li>
              <li>Equipments <span>(2)</span></li>
              <li>Heart <span>(10)</span></li>
              <li>Free counselling <span>(5)</span></li>
              <li>Lab test <span>(5)</span></li>
            </ul>
          </div>

          {/* Tags */}
          <div className="sidebar-section">
            <h3 className="sidebar-title">Tags</h3>
            <div className="underline"></div>
            <div className="tags">
              {["DOCTORS", "AGENCY", "COMPANY", "MEDICINE", "SURGERY", "MARKETING", "SOCIAL MEDIA", "BRANDING"].map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="sidebar-section-2">
            <h3 className="sidebar-title">Time Schedule</h3>
            <div className="underline"></div>
            <ul className="schedule-list">
              <li><span>Monday - Friday</span><span>9:00 - 17:00</span></li>
              <li><span>Saturday</span><span>9:00 - 16:00</span></li>
              <li><span>Sunday</span><span>Closed</span></li>
            </ul>
            <p className="help-text">
              Need Urgent Help? <br />
              <strong>+23-4565-65768</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
