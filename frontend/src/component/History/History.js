import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
export const History = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-4">
            <Link to="/Profile">
            <div className="btn-pro"> My Profile</div>
            </Link>
         </div>
         <div className="col-4">
            <Link to="/MyChannel">
            <div className="btn-pro"> My Channel</div>
            </Link>
         </div>
         <div className="col-4">
            <Link to="/History">
            <div className="btn-pro btn-pro-active"> History</div>
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
            <div className="col-12">
               <h6 className="mt-3 font-14"><b>Your All History</b></h6>
               <div className='border-b-w'></div>
            </div>
         </div>
         <div className="row mt-2">
            <div className="col-12">
               <h6>Recent</h6>
            </div>
            <div className="col-12 m-p-0">
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/narendra-modi.jpg" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">Narendra Modi</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/donald_trump.jpg" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">Donald Trump</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/rita-img.jpg" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">Rita Ora</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/BBC_News.png" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">BBC News</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/euronews.png" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">Euro News</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/cnn-logo.png" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">CNN</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
               <div className="docs-file-section">
                  <div className="row">
                     <div className="col-3">
                        <img src="img/bbc-radio.jpg" alt="img" className="docs-img"/>
                     </div>
                     <div className="col-9">
                        <h6 className="font-14">BBC Radio 1</h6>
                        <p className="font-12"><b>Last seen</b> &nbsp; 12:00pm 12/01/2001</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default History;