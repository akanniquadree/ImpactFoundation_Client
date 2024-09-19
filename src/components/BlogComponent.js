import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import postBoxImage from "../images/post-box-img.jpg";
import { getCat, getDetailBlog } from '../redux_file/action/blogAction';
import { commentBlog } from '../redux_file/action/commentAction';

function BlogComponent(props) {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [text, setText] = useState("")
const dispatch = useDispatch()
const DetailBlog = useSelector(state => state.DetailBlog) 
const {loading, post, error} = DetailBlog
const blogPost = useSelector(state=>state.blogPost)
const { posts} = blogPost
const Cat = useSelector(state=>state.Cat)
const {cats} = Cat
useEffect(() => {
  dispatch(getDetailBlog(props.match.params.id))
  dispatch(getCat())
  
  return () => {
    //
  }
}, [dispatch, props.match.params.id])

    return (
        <div>
            <section className="breadcrumb-area">
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
            
              <section className="causes-detail-area news-detail-area">
                      <div className="container">
                              <div className="row blog-content-wrap">
                                {
                                  loading ? <div>Loading....</div>:
                                  error ? <div>{error.msg}</div>:
                                  <div className="col-lg-8">
                                      <div className="blog-content">
                                          <div className="blog-item">
                                              <div className="blog-img">
                                                {
                                                  post.image && (
                                                    <img src={post.image} alt="" />
                                                  )
                                                } 
                                                  <span className="blog__date">{new Date (post.createdAt).toDateString()}</span>
                                              </div>
                                              <div className="blog-inner-content">
                                                  <div className="inner-causes-box">
                                                      <h3 className="blog__title">
                                                          <a href="#none">{post.heading}</a>
                                                      </h3>
                                                      <ul className="blog__list">
                                                          <li className="blog__dot-active">
                                                              <Link to={`/?author=${post.author}`}>{post.author}</Link>
                                                          </li>
                                                          <li>
                                                              <a href="#none">2 comments</a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div className="blog-inner-content-2">
                                                  <p className="causes__text">
                                                      {post.firstPara}
                                                  </p>
                                                  <p className="causes__text">
                                                      {post.secondPara}
                                                  </p>
                                                  <p className="causes__text">
                                                      {post.thirdPara}
                                                  </p>
                                                  <p className="causes__text">
                                                      {post.fourthPara}
                                                  </p>
                                                  <div className="news-tags">
                                                      <div className="news-tag-item-left">
                                                          <span className="news-meta-tags">
                                                              <span className="news-meta-title">Tags</span>
                                                              <a href="#none">Charity</a>
                                                              <a href="#none">poor</a>
                                                              <a href="#none">love</a>
                                                          </span>
                                                      </div>
                                                      <div className="news-tag-item-right">
                                                          <ul className="news-share">
                                                              <li>
                                                                  <a href="#none">
                                                                      <i className="fa fa-twitter"></i>
                                                                  </a>
                                                              </li>
                                                              <li>
                                                                  <a href="#none">
                                                                      <i className="fa fa-facebook"></i>
                                                                  </a>
                                                              </li>
                                                              <li>
                                                                  <a href="#none">
                                                                      <i className="fa fa-pinterest"></i>
                                                                  </a>
                                                              </li>
                                                              <li>
                                                                  <a href="#none">
                                                                      <i className="fa fa-instagram"></i>
                                                                  </a>
                                                              </li>
                                                          </ul>
                                                      </div>
                                                  </div>
                                                  <div className="single-comment">
                                                  
                                                            <div className="post__boxed">
                                                                <div className="post__boxed-img">
                                                                  <img src={postBoxImage} alt="" />
                                                                </div>
                                                                <div className="post__boxed-content">
                                                                <h3 className="post__boxed-title">fred</h3>
                                                                <p className="post__boxed-desc">
                                                                  Cursus massa at urnaaculis estie. Sed aliquamellus
                                                                  vitae ultrs condmentum lightly believable. If you are
                                                                  going to use a of you need to be sure there isn't
                                                                  anything embarrassing.
                                                                </p>
                                                              </div>
                                                          </div>
                                                          <div className="comment__boxed">
                                                                <div>
                                                                    <h3 className="single__comment-title">Comments</h3>
                                                                    <ul className="comments-list">
                                                                        <li>
                                                                          <div className="comment">
                                                                            <div className="avatar-img">
                                                                              <img
                                                                                className="avatar__img"
                                                                                alt=""
                                                                                src="/images/comment-avatar.jpg"
                                                                              />
                                                                            </div>
                                                                            <div className="comment-body">
                                                                              <div className="meta-data">
                                                                                <h4 className="comment__author">
                                                                                  segun
                                                                                  <span className="comment__date">
                                                                                    898989
                                                                                  </span>
                                                                                </h4>
                                                                              </div>
                                                                              <div className="comment-content">
                                                                                <a
                                                                                  className="reply__btn theme-btn"
                                                                                  href="#none"
                                                                                >
                                                                                  Reply
                                                                                </a>
                                                                                <p className="comment__text">
                                                                                djgkjfhfbjdbfbdjvbdbfjgudbfjkdghjdbjkdbgjdkbjdkgg
                                                                                </p>
                                                                              </div>
                                                                            </div>
                                                                          </div>
                                                                        </li>
                                                                      </ul>
                                                                </div>
                                                          </div>
                                                          
                                                          <div className="comment__form form-shared">
                                                            <h3 className="single__comment-title">Leave a Comment</h3>
                                                            <form>
                                                              <div className="row">
                                                                <div className="col-lg-6 col-sm-6">
                                                                  <div className="form-group">
                                                                    <input type="text" id="name" name="name" required onChange={(e)=>{setName(e.target.value)}} className="form-control" placeholder="Full Name" />
                                                                  </div>
                                                                </div>
                                                                <div className="col-lg-6 col-sm-6">
                                                                  <div className="form-group">
                                                                    <input type="email"  id="email" name="email" required onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email Address" />
                                                                  </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                  <div className="form-group">
                                                                    <textarea className="textarea"  id="text" name="text" required onChange={(e)=>{setText(e.target.value)}} placeholder="Leave a Comment"></textarea>
                                                                  </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                  <button type = "submit" className="theme-btn submit__btn">
                                                                    submit now
                                                                  </button>
                                                                </div>
                                                              </div>
                                                            </form>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                      </div>
                                }
                                      <div className="col-lg-4">
                                        <div className="sidebar-shared">
                                          <div className="side-widget sidebar-form">
                                            <div className="form-shared">
                                              <form action="#">
                                                <div className="row">
                                                  <div className="col-lg-12">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      placeholder="Search"
                                                    />
                                                  </div>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                          <div className="side-widget">
                                            <h2 className="widget__title">Recent Posts</h2>
                                                {
                                                  posts.slice(0, 4).map((item, index)=>
                                                    (
                                                      <div className="author-box recent-donate-item" key={index} >
                                                      
                                                          <div className="author__avatar">
                                                            <img src={item.image} style={{width:"59px", height:"59px"}} alt="" />
                                                          </div>
                                                          <div className="author__detail">
                                                              <h4 className="author__title author__title2">
                                                                  <Link to={`/posts/${item._id}`}>{item.heading}</Link>
                                                              </h4>
                                                          </div>
                                                      </div>
                                                    )
                                                  )
                                                } 
                                            </div>
                                          <div className="side-widget">
                                            <h2 className="widget__title">Categories</h2>
                                            <div className="side-cats">{
                                              cats.map((item, index)=>(
                                                <ul key={index}>
                                                <li>
                                                  <Link to={`/?cat/${item.name}`}>{item.name}</Link>
                                                </li>
                                              </ul>
                                           
                                              ))
                                            }
                                             </div>
                                          </div>
                                          <div className="side-widget">
                                            <h2 className="widget__title">Popular Tags</h2>
                                            <div className="side-tags">
                                              <ul>
                                                <li>
                                                  <a href="#none">charity</a>
                                                </li>
                                                <li>
                                                  <a href="#none">poor</a>
                                                </li>
                                                <li>
                                                  <a href="#none">love</a>
                                                </li>
                                                <li>
                                                  <a href="#none">donations</a>
                                                </li>
                                                <li>
                                                  <a href="#none">Health</a>
                                                </li>
                                                <li>
                                                  <a href="#none">save</a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>          
  </div>
</section>
        </div>
    )
}

export default BlogComponent;