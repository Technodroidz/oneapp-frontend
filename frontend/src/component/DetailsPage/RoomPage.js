import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Modal from "react-bootstrap/Modal";
export const RoomPage = () => {
const [isOpen, setIsOpen] = React.useState(false);
const showModal = () => { setIsOpen(true);};
const hideModal = () => { setIsOpen(false);};
return (
<>
<section className="masthead">
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
               <h6 className="d-flex"><img src="img/live.png" alt="qus"/> Live</h6>
               </Link> 
            </div>
            <div className="page-detalil-tab">
               <Link to="/PostPage">
               <h6 className="d-flex"><img src="img/post.png" alt="qus"/> Post</h6>
               </Link> 
            </div>
            <div className="page-detalil-tab page-detalil-active">
               <Link to="/RoomPage">
               <h6 className="d-flex text-active"><img src="img/room-1.png" alt="room"/> Room</h6>
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
         <div className="col-md-12 mt-2">
            <div className="chat-tabs">
               <Tabs>
                  <TabList>
                     <Tab>
                        <h5><img src="img/volume-2.png" alt="qus"/> Audio</h5>
                     </Tab>
                     <Tab>
                        <h5><img src="img/video.png" alt="qus"/> Video</h5>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     <div className="row audio-section mt-3">
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                           <h5>Night talk</h5>
                           <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </Link>
                        </div>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="row video-section mt-3">
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                        <div className="col-4 col-md-3 mb-3">
                           <Link to="/AudioRoom">
                           <div className="play-s">
                              <img src="img/rita-img.jpg" className="audio-section-img" alt="audio"/>
                              <img src="img/play.png" className="img-fluid play-button" alt="play"/>
                           </div>
                           <h5>Night talk</h5>
                           <span className="audio-section">
                              <p className="client-inners"><i class="fa fa-star"></i> 3k  &nbsp;/ <i className="fa fa-commenting-o color-massage"></i> <samp>10K</samp></p>
                           </span>
                           </Link>
                        </div>
                     </div>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default RoomPage;