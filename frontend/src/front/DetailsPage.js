import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import Modal from "react-bootstrap/Modal";
export const DetailsPage = () => {
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
               <div className="page-detalil-tab page-detalil-active">
                  <Link to="/DetailsPage">
                  <h6 className="d-flex text-active"><img src="img/live-1.png" alt="live"/> Live</h6>
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
            <div className="video-section">
               <video width="100%" height="240" controls>
                  <source src="https://endtest-videos.s3-us-west-2.amazonaws.com/documentation/endtest_data_driven_testing_csv.mp4" type="video/mp4"/>
               </video>
               <span className="volume-icon"><img src="img/volume.png" alt=""/></span>
               <span className="minimize-icon"><img src="img/minimize2.png" alt=""/></span>
               <p><i className="fa fa-star"></i> 3k Subscribers  &nbsp;&nbsp;&nbsp; <i className="fa fa-circle dot-red"></i> 200 Watching Live</p>
            </div>
            <div className="mt-4">
               <h6 className="description-title">
                  <b>Description</b> 
                  <spam class="color-red">Report</spam>
               </h6>
               <p className="font-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="chat-section mt-4">
               <div className="card chat-app">
                  <div className="chat">
                     <div className="chat-header clearfix">
                        <div className="row">
                           <div className="d-flax text-center">
                              <span className="card-2 text-gry">All messages are visible</span> 
                              <span className="card-3 chat-filters">
                                 <div className="dropdown">
                                    <button type="button" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                       <h6 className="d-flex"><img class="chat-filterslines" src="img/filterslines.png" alt=""/></h6>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                                       <div className="container">
                                          <h6 className="m-0 mt-3 mb-2 font-12"> Filter</h6>
                                          <div className="row">
                                             <div className="col-6 col-md-4">
                                                <div className="filter-div">
                                                   <label>by Country</label>
                                                   <select className="form-select border-0" aria-label="Default select example">
                                                      <option value="India">India</option>
                                                      <option value="Iran">Iran</option>
                                                      <option value="Iraq">Iraq</option>
                                                      <option value="Ireland">Ireland</option>
                                                      <option value="Isle of Man">Isle of Man</option>
                                                      <option value="Israel">Israel</option>
                                                      <option value="Italy">Italy</option>
                                                   </select>
                                                </div>
                                                <div className="filter-div">
                                                   <label>by Gender </label>
                                                   <select className="form-select border-0" aria-label="Default select example">
                                                      <option className="color-gry" selected>Not selected</option>
                                                      <option value="male">Male</option>
                                                      <option value="female">Female</option>
                                                      <option value="other">other</option>
                                                   </select>
                                                </div>
                                             </div>
                                             <div className="col-6 col-md-4">
                                                <div className="filter-div">
                                                   <label>by Area</label>
                                                   <select className="form-select border-0" aria-label="Default select example">
                                                      <option className="color-gry" selected>Not selected</option>
                                                      <option value="1">One</option>
                                                      <option value="2">Two</option>
                                                      <option value="3">Three</option>
                                                   </select>
                                                </div>
                                                <div className="filter-div">
                                                   <label>by Age Group</label>
                                                   <select className="form-select border-0" aria-label="Default select example">
                                                      <option value="1">Below 18 </option>
                                                      <option value="2">Equal 18</option>
                                                   </select>
                                                </div>
                                             </div>
                                          </div>
                                          <hr>
                                          </hr>
                                          <h6 className="mb-3 font-14">Export Chat</h6>
                                       </div>
                                    </div>
                                 </div>
                              </span>
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
            <div className="show-footer d-flex justify-content-center mb-4">
               <Link to="" className="show-btn">
               <img src="img/show-down.png" alt=""/>  show more</Link>     
            </div>
            <div className="chat-box-tray">
               <Link to="/Login">
               <input type="text" placeholder="Type your message here..."/></Link>
               <div className="chat-icon-box">
                  <ul className="d-flex">
                     <li><img src="img/frame.png" alt=""/></li>
                     <li><img src="img/paperclip.png" alt=""/></li>
                     <li><img src="img/send.png" alt=""/></li>
                  </ul>
               </div>
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
export default DetailsPage;