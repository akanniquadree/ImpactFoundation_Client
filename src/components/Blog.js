import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBlog } from "../redux_file/action/blogAction";

function Blog() {
  const blogPost = useSelector((state) => state.blogPost);
  const { loading, posts, error } = blogPost;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog());

    return {
      //
    };
  }, [dispatch]);
  return (
    <div>
      {/* <section className="blog-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <div className="section-heading blog-heading">
                                    <div className="section-icon">
                                        <img src="/images/section-icon.png" alt="section-icon" />
                                    </div>
                                    <h2 className="section__title">Recent Blog Posts</h2>
                                    <p className="section__meta">news and updates</p>
                                </div>
                            </div>
                        </div>
                        <div className="row recent-post-wrap">
                            <div className="col-lg-6">
                                {
                                    posts.slice(0, 1).map((item, index)=>(
                                        <div className="recent-item">
                                            <div className="recent__img">
                                                <span className="meta__date-date">{new Date(item.createdAt).toDateString()}</span>
                                                    {item.image && (<img src={item.image} alt="service-post" />)}
                                            </div>
                                            <div className="news__content">
                                                <h3 className="news__content-title">
                                                        <Link to={`/posts/${item._id}`}>
                                                                {item.heading}
                                                        </Link>
                                                </h3>
                                                <ul className="news__content-list">
                                                    <li className="news__content-active__dot">
                                                        <Link to={`/?author=${item.author}`}>{item.author}</Link>
                                                    </li>
                                                    <li>
                                                        <a href="#none">3 comments</a>
                                                    </li>
                                                </ul>
                                                <p className="news__content-text">
                                                {
                                                                    item.detail
                                                                }
                                                </p>
                                                <Link to={`/posts/${item._id}`} className="theme-btn">
                                                    read more
                                                </Link>
                                            </div>
                                        </div>
                            
                                    ))
                                }
                                </div>
                            
                            
                            <div className="col-lg-6">
                                <div className="third-recent-box">
                                    {
                                        posts.slice(1, 3).map((item,index)=>(
                                            <ul className="third-recent-item" key={index}>
                                                <li>
                                                    <div className="recent__img">
                                                        <Link to={`/posts/${item._id}`}>
                                                            <img src="/images/blog-img2.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="recent__content">
                                                        <span>{new Date(item.createdAt).toDateString()}</span>
                                                        <h4>
                                                            <Link to={`/posts/${item._id}`}>
                                                               {item.heading}
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                </li>

                                            </ul>
                               
                                        ))
                                    }
                                     </div>
                            </div>
                        </div>
                    </div>
                </section> */}
    </div>
  );
}

export default Blog;
