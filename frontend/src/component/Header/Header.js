import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, ClientConfig,
   IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-react";
import { AGORA_APP_ID } from "../agora.config";
import ReactPlayer from 'react-player';
import swal from 'sweetalert';
import http from '../http'
export const Header = () => {
   const navigate = useNavigate();
   useEffect(()=>{
      fetchCallDetails();
   },[]);

   const fetchCallDetails = () => {
      const tokenString = sessionStorage.getItem('token');
      if(tokenString != null){
         const userString = sessionStorage.getItem('user');
         const user_details = JSON.parse(userString);
         const userid = user_details.id;
         //console.log(user_details.id);
         http.get('/fetchcalldetails').then(res=>{
            try{
             //setChatusers(res.data);
             const user_details = JSON.stringify(res);
             const user_detailsss = JSON.parse(user_details);
             //  console.log(user_detailsss.data[0].personcalledid);
               if(userid == user_detailsss.data[0].personcalledid){
                  swal("Incoming Call..!");
                  navigate('/IncomingVideoCall');
               }
             }catch(e){
               console.log('error', e)       
             }
          })
      
      }
  }

return (
<>
<header>
   <div className="navbar-header">
      <div className="d-flex">
         <div className="d-sm-block ms-1">
            <Link to="/">
            <img  className="logo" src="/img/logo.png" alt="logo"/></Link>
         </div>
         <div className="d-sm-block ms-1 img-header1">
         <Link to="/"> <img src="/img/rad.png" alt="tv" title="emergency"/></Link>
         </div>
      </div>
      <div className="d-flex">
         <div className="dropdown d-sm-block ms-1">
            <button type="button" className=" img-header header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/img/information.png" alt="info"/>
            </button>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
               <div className="row">
                  <div className="col-5 p-l-f-0">
                     <Link to="/About" className="text-reset notification-item">
                     <div className="d-flex align-items-baseline">
                        <div className="avatar-xs me-1">
                           <img src="/img/user-icon.png" alt="About" title="About"/>
                        </div>
                        <div className="flex-1">
                           <h6 className="mt-0 mb-1 font-12">About</h6>
                        </div>
                     </div>
                     </Link>
                     <Link to="/Contact" className="text-reset notification-item">
                     <div className="d-flex align-items-baseline">
                        <div className="avatar-xs me-1">
                           <img src="/img/phone-call.png" alt="Contact" title="About"/>
                        </div>
                        <div className="flex-1">
                           <h6 className="mt-0 mb-1 font-12"> Contact</h6>
                        </div>
                     </div>
                     </Link>
                     <Link to="/PrivacyPolicy" className="text-reset notification-item">
                     <div className="d-flex align-items-baseline">
                        <div className="avatar-xs me-1">
                           <img src="/img/privacy-icon.png" alt="Privacy Policy"/>
                        </div>
                        <div className="flex-1">
                           <h6 className="mt-0 mb-1 font-12">Privacy Policy</h6>
                        </div>
                     </div>
                     </Link>
                  </div>
                  <div className="col-7 p-l-f-0">
                     <Link to="/TermsConditions" className="text-reset notification-item">
                     <div className="d-flex align-items-baseline">
                        <div className="avatar-xs me-1">
                           <img src="/img/terms-icon.png" alt="Terms and Conditions"/>
                        </div>
                        <div className="flex-1">
                           <h6 className="mt-0 mb-1 font-12">Terms and Conditions</h6>
                        </div>
                     </div>
                     </Link>
                     <Link to="/Help" className="text-reset notification-item">
                     <div className="d-flex align-items-baseline">
                        <div className="avatar-xs me-1">
                           <img src="/img/help-icon.png" alt="Help"/>
                        </div>
                        <div className="flex-1">
                           <h6 className="mt-0 mb-1 font-12">Help</h6>
                        </div>
                     </div>
                     </Link>
                     <Link to="/Settings" className="text-reset notification-item">
                     <div className="d-flex align-items-baseline">
                        <div className="avatar-xs me-1">
                           <img src="/img/set.png" alt="Settings"/>
                        </div>
                        <div className="flex-1">
                           <h6 className="mt-0 mb-1 font-12">Settings</h6>
                        </div>
                     </div>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="d-sm-block ms-1 img-header">
            <Link to="/Login">
            <img src="/img/game.png" alt="qus"/>
            </Link> 
         </div>
         <div className="d-sm-block ms-1 img-header">
            <Link to="/ScheduleEvent">
            <img src="/img/cal.png" alt="ScheduleEvent"/>
            </Link> 
         </div>
         <div className="d-sm-block ms-1 img-header">
            <Link to="/CallPage">
            <img src="/img/phone-call-1.png" alt="CallPage"/></Link> 
         </div>
         <div className="d-sm-block ms-1 img-header">
            <Link to="/Chat">
            <img src="/img/mass.png" alt="chat"/></Link> 
         </div>
         <div className="d-sm-block ms-1 img-profile-header">
            <Link to="/Profile">
            <img src="/img/user.png" alt="user"/></Link> 
         </div>
      </div>
   </div>
</header>
</>
)
}
export default Header;