import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
export const Profile = () => {
return (
<div>
   <section className="masthead">
      <div className="container">
         <div className="row mt-3">
            <div className="col-4">
               <Link to="/Profile">
               <div className="btn-pro btn-pro-active"> My Profile</div>
               </Link>
            </div>
            <div className="col-4">
               <Link to="/MyChannel">
               <div className="btn-pro"> My Channel</div>
               </Link>
            </div>
            <div className="col-4">
               <Link to="/History">
               <div className="btn-pro"> History</div>
               </Link>
            </div>
         </div>
         <div className='border-b-w'></div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="profile-bio">
                  <div className="friend-info">
                     <figure><img src="img/pro.png" alt=""/></figure>
                     <div className="friend-name">
                        <ins>
                           <Link to="/">
                           My Channel Name</Link>
                        </ins>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.  </span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12 mt-3">
               <div className="btn-streaming"><img src="img/puls.png" className="img-fluid" alt="user"/>  Start Streaming</div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h6 className="font-14 mt-3"><b>Subscribers list</b></h6>
                  <div className='border-b-w'></div>
                  <div className="row audio-section height-3 mt-3">
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/>
                        <h5><img src="img/check-icon.png" alt="check"/>  Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5>Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5>Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5>Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5><img src="img/check-icon.png" alt="check"/> Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5>Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5>Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5><img src="img/check-icon.png" alt="check"/> Night talk</h5>
                     </div>
                     <div className="col-4 col-md-3 mb-3">
                        <img src="img/rita-img.jpg" className="audio-section-img" alt="qus"/> 
                        <h5>Night talk</h5>
                     </div>
                  </div>
                  <div className='border-b-w'></div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <h6 className="mt-3 mb-3"><b>History</b></h6>
                  <div className="height-3 ">
                     <div className="history-section">
                        <div className="col-5 mb-3">
                           <img src="img/rectangle.png" className="rounded img-fluid" alt="qus"/>
                        </div>
                        <div className="col-7 mb-3 history-col-des">
                           <h6 className="ms-2 font-14">Night talk</h6>
                           <p className="mb-1 font-12">Lorem ipsum dolor sit amet dolor</p>
                           <p className="font-12">31K views - 2 days ago</p>
                        </div>
                     </div>
                     <div className="history-section">
                        <div className="col-5 mb-3">
                           <img src="img/rectangle.png" className="rounded img-fluid" alt="qus"/>
                        </div>
                        <div className="col-7 mb-3 history-col-des">
                           <h6 className="ms-2 font-14">Night talk</h6>
                           <p className="mb-1 font-12">Lorem ipsum dolor sit amet dolor</p>
                           <p className="font-12">31K views - 2 days ago</p>
                        </div>
                     </div>
                     <div className="history-section">
                        <div className="col-5 mb-3">
                           <img src="img/rectangle.png" className="rounded img-fluid" alt="qus"/>
                        </div>
                        <div className="col-7 mb-3 history-col-des">
                           <h6 className="ms-2 font-14">Night talk</h6>
                           <p className="mb-1 font-12">Lorem ipsum dolor sit amet dolor</p>
                           <p className="font-12">31K views - 2 days ago</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-12 mt-3">
                  <div className="btn-logout"><img src="img/logout.png" className="img-fluid" alt="user"/>  Logout</div>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
)
}
export default Profile;