import React from "react";
import "../blogsinglecompo/SingleBlogPage.css"
import blogSingle from "../assets/blog-1.jpg";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";

const SingleBlogPage = () => {
  return (
    <div className="container">
      <div className="blog-single-wrapper">
        {/* LEFT CONTENT */}
        <div className="blog-single-content">
          <img src={blogSingle} alt="Blog" className="single-post-image" />

          <div className="single-meta">
            <span className="meta-cat">🩺 Equipment</span>
            <span>💬 5 Comments</span>
            <span>📅 28th January 2019</span>
          </div>

          <h1 className="single-title">
            Healthy environment to care with modern equipment
          </h1>

          <p className="single-text">
            Non illo quas blanditiis repellendus laboriosam minima animi.
            Consectetur accusantium pariatur repudiandae!
          </p>

          <p className="single-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium maxime, consequatur libero! Nam laborum incidunt officiis,
            doloribus voluptas, corrupti soluta, consequatur optio obcaecati iure,
            nulla cupiditate atque maxime similique deserunt tempora! Voluptatem
            fuga molestiae facere explicabo molestias, ipsam perferendis
            recusandae sunt?
          </p>

          <blockquote className="quote-block">
            A brand for a company is like a reputation for a person. You earn
            reputation by trying to do hard things well.
          </blockquote>

          <p className="single-text">
            The same is true as we experience the emotional sensation of stress
            from our first instances of social rejection ridicule. We quickly
            learn to fear and thus automatically...
          </p>

          {/* Tags & Share */}
          <div className="post-bottom-meta">
            <div className="tags">
              <span className="tag">Advance</span>
              <span className="tag">Landscape</span>
              <span className="tag">Travel</span>
            </div>
            <div className="share-icons">
              <span>Share:</span>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-pinterest"></i>
            </div>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h3>2 Comments on Healthy environment…</h3>

            <div className="comment">
              <img src={user1} alt="John" className="comment-avatar" />
              <div className="comment-body">
                <h4>John <span>- Posted April 7, 2019</span></h4>
                <p>
                  Some consultants are employed indirectly by the client via a consultancy
                  staffing company, a company that provides consultants on an agency basis.
                </p>
              </div>
            </div>

            <div className="comment">
              <img src={user2} alt="Philip" className="comment-avatar" />
              <div className="comment-body">
                <h4>Philip W <span>- Posted June 7, 2019</span></h4>
                <p>
                  Some consultants are employed indirectly by the client via a consultancy
                  staffing company, a company that provides consultants on an agency basis.
                </p>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <div className="comment-form">
            <h3>Write a comment</h3>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
              </div>
              <textarea placeholder="Comment" rows="4" required></textarea>
              <button type="submit" className="submit-btn">SUBMIT MESSAGE</button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
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

          {/* Time Schedule */}
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

export default SingleBlogPage;
