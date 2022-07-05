import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
export const MessagePage = () => {
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
                  <h6 className="d-flex text-active"><img src="img/live.png" alt="qus"/> Live</h6>
                  </Link> 
               </div>
               <div className="page-detalil-tab">
                  <Link to="/PostPage">
                  <h6 className="d-flex"><img src="img/post.png" alt="qus"/> Post</h6>
                  </Link> 
               </div>
               <div className="page-detalil-tab">
                  <Link to="/RoomPage">
                  <h6 className="d-flex"><img src="img/room.png" alt="qus"/> Room</h6>
                  </Link> 
               </div>
               <div className="dropdown">
                  <button type="button" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                     <h6 className="d-flex"><img className="img-profile" src="img/euronews.png" alt="euronews"/></h6>
                  </button>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                     <div className="row">
                        <div className="col-5 col-md-4">
                           <Link to="/" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/user-icon.png" alt="About"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">About</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/chat.png" alt="Contact"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Message</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/start-icon.png" alt="Privacy Policy"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Rate</h6>
                              </div>
                           </div>
                           </Link>
                        </div>
                        <div className="col-7 col-md-4">
                           <Link to="/" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/phone-call.png" alt="Terms and Conditions"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Contact</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/" className="text-reset notification-item">
                           <div className="d-flex align-items-baseline">
                              <div className="avatar-xs me-3">
                                 <img className="profile-pic" src="img/report.png" alt="Help"/>
                              </div>
                              <div className="flex-1">
                                 <h6 className="mt-0 mb-1 font-12">Report a problem</h6>
                              </div>
                           </div>
                           </Link>
                           <Link to="/" className="text-reset notification-item">
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
            <div className="chat-section mt-3">
               <div className="card chat-app">
                  <div className="chat">
                     <div className="chat-header1 clearfix">
                        <div className="row">
                           <div className="col-8 d-flex">
                              <Link to="/">
                              <img src="img/euronews.png" alt="avatar"/>
                              </Link>
                              <div className="chat-about">
                                 <h6 class="m-b-0">Euro News</h6>
                                 <small className="font-12">Last seen: 2 hours ago</small>
                              </div>
                           </div>
                           <div className="col-4 col-lg-2">
                              <div className="d-flex ml--5">
                                 <Link to="/">
                                 <img className="chat-img" src="img/phone-call.png" alt=""/></Link>
                                 <Link to="/">
                                 <img className="chat-img" src="img/video.png" alt=""/></Link>
                                 <Link to="/">
                                 <img className="chat-img" src="img/more-vertical.png" alt=""/></Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="chat-history">
                        <ul className="m-b-0">
                           <li className="clearfix">
                              <div className="message my-message">Are we meeting today?</div>
                              <div className="message-data">
                                 <span className="message-data-time">10:12 AM</span>
                              </div>
                           </li>
                           <li className="clearfix">
                              <div className="message other-message float-right"> Hi Aiden, how are you?</div>
                              <div className="message-data text-right">
                                 <span className="message-data-time">10:15 AM</span>
                              </div>
                           </li>
                           <li className="clearfix">
                              <div className="message my-message">Project has been already finished.</div>
                              <div className="message-data">
                                 <span className="message-data-time">10:15 AM</span>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="chat-box-tray">
               <Link to="/Login">
               <input type="text" placeholder="Type your message here..."/>
               <div className="chat-icon-box">
                  <ul className="d-flex">
                     <li><img src="img/frame.png" alt=""/></li>
                     <li><img src="img/paperclip.png" alt=""/></li>
                     <li><img src="img/send.png" alt=""/></li>
                  </ul>
               </div>
               </Link>   
            </div>
            <div className="oneApp-ad mt-3">
               <h6 className="text-center">oneApp Ad</h6>
               <img src="img/banner-ad.png" alt=""/>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)
}
export default MessagePage;