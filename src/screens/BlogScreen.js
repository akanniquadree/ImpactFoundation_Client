import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import blog from "../data/blogData"
import { useSelector, useDispatch } from "react-redux";
import { getBlog } from "../redux_file/action/blogAction";
import Header from "./screenComponent/Header";
import Footer from "./screenComponent/Footer";

function BlogScreen(props) {
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
      <Header />
      {/* <section className="breadcrumb-area"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb__title">BLOG</h2>
                                <ul className="breadcrumb__list">
                                    <li className="active__list-item">
                                    <Link to="/">home</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        
            
            <section className="blog-area blog-area2">
                <div className="container">
                    <div className="row recent-post-wrap">
                                {
                                    loading ? <div>Loading....</div>:
                                    error ? <div>{error}</div>:
                                    posts.map((item, index)=>
                                        (
                                            <div className="col-lg-6 col-sm-6" key={index}>
                                                <div className="recent-item" >
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
                                                                <Link to={`/posts/${item._id}`}>{item.author}</Link>
                                                                <Link to={`/?cat/${item._id}`}>{item.categories.map((c)=>(
                                                                        c.name
                                                                ))}</Link>
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
                                            </div>
                                        )
                                    )
                                }
                    </div>
                </div>
    </section> */}
      <Footer />
    </div>
  );
}

export default BlogScreen;
