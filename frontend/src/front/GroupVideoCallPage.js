import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
export const GroupVideoCallPage = () => {    
return (
<>
<section>
   <div className="video-call-section">
            <div className="card">
               <div className="chat">
                  <div className="container">
                     <div className="row">
                        <div className="col-6 group-video-call">
                           <img src="img/user1.jpg" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-6 group-video-call">
                           <img src="img/user2.jpg" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-6 group-video-call">
                           <img src="img/user3.jpg" className="img-fluid" alt="img"/>
                        </div>
                        <div className="col-6 group-video-call">
                           <img src="img/user4.jpg" className="img-fluid" alt="img"/>
                        </div>
                        
                     </div>
                     <div class="video-sm">
                           <img src="img/rita-img.jpg" className="rounded img-fluid" alt="img"/>
                        </div>
                  </div>
                  <div className="chat-i-refresh">
                     <Link to="/VideoChat">
                     <i className="fa fa-refresh "></i></Link>
                  </div>
                  <div className="videocall-btn-section">
                     <Link to="/GroupVideoCallPage">
                     <span className="btn3"><i className="fa fa-microphone"></i></span></Link>
                     <Link to="/GroupVideoCallPage">
                     <span className="btn3">Hold</span></Link>
                     <Link to="/Chat">
                     <span className="btn2"><i className="fa fa-phone icon-rotate"></i></span></Link>
                     <Link to="/GroupVideoCallPage">
                     <span className="btn3"><i className="fa fa-user-plus"></i></span></Link>
                     <Link to="/GroupVideoCallPage">
                     <span className="btn3"><i className="fa fa-video-camera"></i></span></Link>
                  </div>
               </div>
            </div>
         </div>
   </section>
</>
)
}
export default GroupVideoCallPage;