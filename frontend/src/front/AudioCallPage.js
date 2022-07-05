import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
export const AudioCallPage = () => {    
return (
<>
<section>
   <div className="card call-section text-center">
      <div className="card-body">
         <div className="call-img-section"> 
            <img className="bg-img" src="img/user1.jpg" alt="audiocall"/>
         </div>
         <div className="text-center">
            <div className="title2">Jane Jannet</div>
            <h6>10:20</h6>
            <h6 className="text-danger">Call on Hold</h6>
         </div>
         <div className="call-btn-section">
            <Link to="/AudioCallPage">
            <span className="btn3"><i className="fa fa-microphone"></i></span></Link>
            <Link to="/AudioCallPage">
            <span className="btn3"><i className="fa fa-video-camera"></i></span></Link>
            <Link to="/Chat">
            <span className="btn2"><i className="fa fa-phone icon-rotate"></i></span></Link>
            <Link to="/AudioCallPage">
            <span className="btn3">Hold</span></Link>
            <Link to="/AudioCallPage">
            <span className="btn3"><i className="fa fa-user-plus"></i></span></Link>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default AudioCallPage;