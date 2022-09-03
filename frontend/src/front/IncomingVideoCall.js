import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import { $ }  from 'react-jquery-plugin'

import ReactPlayer from 'react-player'
export const IncomingVideoCall = () => {  
    $(document).ready(function(){
        $("#myModal").modal('show');
        $("#cancel").on('click', function(){ 
        $("#myModal").modal('hide');
        })
    });
return (
<>
<div id="myModal" className="modal ">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="card call-section text-center">
      <div className="card-body">
         <div className="call-img-section"> 
            <img className="bg-img" src="img/user1.jpg" alt="audiocall" style={{width: "150px", height:"150px"}}/>
         </div>
         <div className="text-center">
            <div className="title2">Jane Jannet</div>
            <h6>Incoming Video Call</h6>
         </div>
         <div className="call-btn-section">         
        
            <Link to="/IncomingAudioCall">
            <span className="btn2"><i className="fa fa-phone icon-rotate"></i></span></Link>
            <spam className="close" id='cancel' data-dismiss="modal">
            <span className="btn-pic "><i className="fa fa-phone icon-rotate"></i></span>
            </spam>
         </div>
      </div>
   </div>
          
        </div>
    </div>
</div>
<section>
   <div className="video-call-section">
      <div className="card">
         <div className="chat">
            <div className="clearfix">
               <div className="col-12">
                  <div className="video-call">
                     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className="player" width="100%"/>
                  </div>
                  <div class="video-sm">
                     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%" height="100%" />
                  </div>
               </div>
            </div>
            <div className="chat-i-refresh">
               <Link to="/VideoChat">
               <i className="fa fa-refresh "></i></Link>
            </div>
            <div className="videocall-btn-section">
               <Link to="/VideoCallPage">
               <span className="btn3"><i className="fa fa-microphone"></i></span></Link>
               <Link to="/VideoCallPage">
               <span className="btn3">Hold</span></Link>
               <Link to="/Chat">
               <span className="btn2"><i className="fa fa-phone icon-rotate"></i></span></Link>
               <Link to="/VideoCallPage">
               <span className="btn3"><i className="fa fa-user-plus"></i></span></Link>
               <Link to="/VideoCallPage">
               <span className="btn3"><i className="fa fa-video-camera"></i></span></Link>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default IncomingVideoCall;