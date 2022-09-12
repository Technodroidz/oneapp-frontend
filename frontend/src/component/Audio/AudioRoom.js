import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export const AudioRoom = () => {
return (
<div>
   <section className="masthead">
      <div className="container">
         <div className="row mt-3">
            <div className="audio-h">
               <div class="d-flex">
                  <div className="d-sm-block ms-1">
                     <p className="font-14"><img src="img/user-icon.png" className="img-fluid" alt="user"/> 19/192</p>
                  </div>
               </div>
               <div class="d-flex">
                  <div className="d-sm-block ms-1">
                     <div className="btn-ad"><img src="img/start-icon.png" className="img-fluid" alt="user"/> Subscribe</div>
                  </div>
                  <div className="d-sm-block ms-1">
                     <div className="btn-ad"><img src="img/hand.png" className="img-fluid" alt="user"/> Leave quitely</div>
                  </div>
                  <div className="d-sm-block ms-1">
                     <p className="p--report">Report</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <h6 className=" mt-3"><b>Channel Name</b></h6>
               <div className="row audio-section mt-3">
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/>
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5><img src="img/check-icon.png" alt="check"/>  Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5><img src="img/check-icon.png" alt="check"/> Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/>
                     <img src="img/mute.png" className="img-mute" alt="mute"/>   
                     <h5><img src="img/check-icon.png" alt="check"/> Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5>Night talk</h5>
                  </div>
                  
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5>Night talk</h5>
                  </div>
                  <div className="col-4 col-md-3 mb-2">
                     <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                     <img src="img/mute.png" className="img-mute" alt="mute"/>  
                     <h5>Night talk</h5>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
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
            <Link to="/Login"><input type="text" placeholder="Type your message here..."/>
               <div className="chat-icon-box">
                  <ul className="d-flex">
                     <li><img src="img/frame.png" alt=""/></li>
                     <li><img src="img/paperclip.png" alt=""/></li>
                     <li><img src="img/send.png" alt=""/></li>
                  </ul>
               </div>
               </Link>
            </div>
         </div>
         <div className="row">
            <div className="col-4">
            <div className="btn-sh"><img src="img/fi-rr-share.png" className="img-fluid" alt="user"/> Share</div>
            </div>
            <div className="col-4">

            </div>
            <div className="col-4">
            <div className="btn-sh"><img src="img/hand.png" className="img-fluid" alt="user"/> Hand raise</div>
            </div>
         </div>
      </div>
   </section>
</div>
)
}
export default AudioRoom;