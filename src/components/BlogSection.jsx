// src/components/BlogSection.jsx
import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogService";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs();
        // Get only latest 3 blogs
        setBlogs(data.slice(0, 3));
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading blogs...</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center py-10">No blogs found.</div>;
  }

  return (
    <div className="blog-section">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="/blog" className="more">
              View All Posts
            </a>
          </div>
        </div>

        {/* Posts */}
        <div className="row">
          {blogs.map((blog, idx) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0" key={idx}>
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <div
                    style={{
                      width: "100%",
                      height: "200px", // standard image height
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`http://127.0.0.1:8000/storage/${blog.image}`}
                      alt={blog.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </a>
                <div className="post-content-entry">
                  <h3>
                    <a href="#">{blog.title}</a>
                  </h3>
                  <div className="meta">
                    <span>{blog.excerpt?.substring(0, 50)}...</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
