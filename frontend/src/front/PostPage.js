import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";

export const PostPage = () => {
   const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
return (
<>
<div className="masthead">
   <section>
      <div className="container">
         <div className="row">
            <div className="d-flex">
               <div className="d-sm-block mt-3 ms-2">
                  <div class="bar">
                     <div className="dropdown">
                        <button type="button" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false" className="bar-btn">
                        <label><input type="text" placeholder="Search"/></label>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 search-w-100" aria-labelledby="page-header-notifications-dropdown ">
                           <div className="search-bar">
                              <input type="text" className="input-search" placeholder="Search OneApp"/>
                              <input type="text" className="input-search" placeholder="Search Google"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="d-sm-block mt-3 ms-2">
                  <img className="filterslines" src="img/filterslines.png" alt=""/>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="text-center page-detalil d-flex">
               <div className="page-detalil-tab">
                  <Link to="/DetailsPage">
                  <h6 className="d-flex"><img src="img/live.png" alt="live"/> Live</h6>
                  </Link> 
               </div>
               <div className="page-detalil-tab page-detalil-active">
                  <Link to="/PostPage">
                  <h6 className="d-flex text-active"><img src="img/post-1.png" alt="post"/> Post</h6>
                  </Link> 
               </div>
               <div className="page-detalil-tab">
                  <Link to="/RoomPage">
                  <h6 className="d-flex"><img src="img/room.png" alt="room"/> Room</h6>
                  </Link> 
               </div>
               <div className="dropdown">
                  <button type="button" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                     <h6 className="d-flex"><img className="img-profile" src="img/euronews.png" alt="euronews"/></h6>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                  <div className="row">
                        <div className="col-5 col-md-4">
                           <Link to="/About" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/user-icon.png" alt="About"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">About</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/MessagePage" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/chat.png" alt="Contact"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Message</h6>
                              </div>
                           </div>
                           </Link>
                           <div className="text-reset notification-item">
                              <div className="d-flex align-items-baseline">
                                 <div className="avatar-xs me-3">
                                    <img className="profile-pic" src="img/start-icon.png" alt="Privacy Policy"/>
                                 </div>
                                 <div className="flex-1">
                                    <h6 className="mt-0 mb-1 font-12" onClick={showModal}>Rate</h6>
                                 </div>
                              </div>
                           </div>
                           <Modal show={isOpen} onHide={hideModal}>
                              <Modal.Body className="p_50">
                                 <div className="row">
                                    <div>
                                       <h6>Give Your Review</h6>
                                    </div>
                                    <div className="container mb-4">
                                       <div class="mt-4 text-center">
                                          <div class="rate">
                                             <input type="radio" id="star1" name="rate" value="1" />
                                             <label for="star1" title="text">1 star</label>
                                             <input type="radio" id="star2" name="rate" value="2" />
                                             <label for="star2" title="text">2 stars</label>
                                             <input type="radio" id="star3" name="rate" value="3" />
                                             <label for="star3" title="text">3 stars</label>
                                             <input type="radio" id="star4" name="rate" value="4" />
                                             <label for="star4" title="text">4 stars</label>
                                             <input type="radio" id="star5" name="rate" value="5" />
                                             <label for="star5" title="text">5 stars</label>
                                          </div>
                                       </div>
                                    </div>
                                    <hr>
                                    </hr>
                                    <div class="mt-2 d-flex">
                                       <h6 onClick={hideModal} className="mr-2 text-right">Cancel </h6>
                                       <h6 className="ms-4">Submit</h6>
                                    </div>
                                 </div>
                              </Modal.Body>
                           </Modal>
                        </div>
                        <div className="col-7 col-md-4">
                           <Link to="/Contact" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/phone-call.png" alt="Terms and Conditions"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Contact</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/ReportProblem" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/report.png" alt="Help"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Report a problem</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/Help" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/help-icon.png" alt="Help"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Help</h6>
                              </div>
                           </div>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="central-meta item">
               <div className="user-post">
                  <div className="friend-info">
                     <figure>
                        <img src="img/profile.jpg" alt=""/>
                     </figure>
                     <div className="friend-name">
                        <ins>
                           <Link to="/" title="">
                           Janice Griffith</Link>
                        </ins>
                        <span>published: june,2 2018 19:PM</span>
                     </div>
                     <div className="post-meta">
                        <div className="post-img-section">
                           <img className="img-style" src="img/user-post.png" alt=""/>
                           <span className="minimize-icon"><img src="img/minimize2.png" alt=""/></span>
                        </div>
                        <div className="we-video-info">
                           <ul>
                              <li>
                                 <span className="views" data-toggle="tooltip" title="" data-original-title="views">
                                 <img src="img/eye.png" alt="views"/>
                                 <ins>1.2k views</ins>
                                 </span>
                              </li>
                              <li>
                                 <span className="comment" data-toggle="tooltip" title="" data-original-title="Comments">
                                 <img src="img/comments.png" alt="comments"/>
                                 <ins>1.2k comments</ins>
                                 </span>
                              </li>
                              <li>
                                 <span className="like" data-toggle="tooltip" title="" data-original-title="like">
                                 <img src="img/like.png" alt="like"/>
                                 <ins>1.2k likes</ins>
                                 </span>
                              </li>
                              <li>
                                 <span className="share" data-toggle="tooltip" title="" data-original-title="like">
                                 <img src="img/fi-rr-share.png" alt="like"/>
                                 <ins>Share</ins>
                                 </span>
                              </li>
                              <li>
                                 <span className="report" data-toggle="tooltip" title="" data-original-title="like">
                                 <ins>Report</ins>
                                 </span>
                              </li>
                           </ul>
                        </div>
                        <div className="description">
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vitae justo, leo pharetra, id. Mollis arcu massa platea leo at volutpat quisque. Integer proin malesuada magna sapien, et et, massa in enim. 
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="coment-area">
                     <ul className="we-comet">
                        <li>
                           <div className="we-comment">
                              <div className="comment-header">
                                 <div className="comet-avatar">
                                    <img src="img/profile.jpg" alt=""/>
                                 </div>
                                 <div className="coment-head">
                                    <h5>
                                       <Link to="/" title="">
                                       Jason borne</Link>
                                       <p>Published: June 2nd, 2022; 7:00PM</p>
                                    </h5>
                                    <Link className="we-reply" to="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                 </div>
                              </div>
                              <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                           </div>
                           <ul>
                              <li>
                                 <div className="we-comment">
                                    <div className="comment-header">
                                       <div className="comet-avatar">
                                          <img src="img/profile.jpg" alt=""/>
                                       </div>
                                       <div className="coment-head">
                                          <h5>
                                             <Link to="/" title="">
                                             Jason borne</Link>
                                             <p>Published: June 2nd, 2022; 7:00PM</p>
                                          </h5>
                                          <Link className="we-reply" to="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                       </div>
                                    </div>
                                    <p>yes, really very awesome car i see the features of this car in the official website of <Link to="#" title="">#Mercedes-Benz</Link> and really impressed :-)</p>
                                 </div>
                              </li>
                              <li>
                                 <div className="we-comment">
                                    <div className="comment-header">
                                       <div className="comet-avatar">
                                          <img src="img/profile.jpg" alt=""/>
                                       </div>
                                       <div className="coment-head">
                                          <h5>
                                             <Link to="/" title="">
                                             Jason borne</Link>
                                             <p>Published: June 2nd, 2022; 7:00PM</p>
                                          </h5>
                                          <Link className="we-reply" to="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                       </div>
                                    </div>
                                    <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                 </div>
                              </li>
                           </ul>
                        </li>
                        <li>
                           <div className="we-comment">
                              <div className="comment-header">
                                 <div className="comet-avatar">
                                    <img src="img/profile.jpg" alt=""/>
                                 </div>
                                 <div className="coment-head">
                                    <h5>
                                       <Link to="/" title="">
                                       Jason borne</Link>
                                       <p>Published: June 2nd, 2022; 7:00PM</p>
                                    </h5>
                                    <Link className="we-reply" to="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                 </div>
                              </div>
                              <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                 <i className="em em-smiley"></i>
                              </p>
                           </div>
                        </li>
                        <li className="showmore">
                           <Link to="/" title="" >
                           More Comments</Link>
                        </li>
                        <li className="post-comment">
                           <div className="comet-avatar">
                              <img src="img/comet-1.jpg" alt=""/>
                           </div>
                           <div className="post-comt-box">
                              <form method="post">
                                 <Link to="/Login">
                                 <textarea placeholder="Post your comment"></textarea>
                                 <div className="post-icon-box">
                                    <ul className="d-flex">
                                       <li><img src="img/frame.png" alt=""/></li>
                                       <li><img src="img/paperclip.png" alt=""/></li>
                                       <li><img src="img/send.png" alt=""/></li>
                                    </ul>
                                 </div>
                                 </Link>
                              </form>
                              <div className='text-right'>
                                 <button type="submit" className="comment-submit">Submit</button>
                              </div>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)
}
export default PostPage;