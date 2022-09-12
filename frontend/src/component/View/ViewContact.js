import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export const ViewContact = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3 viewcontact">
         <div className="col-12 text-center">
            <img src="img/euronews.png" className="profile" alt="img"/>
            <h6 className="title-viewcontact">Euro News</h6>
         </div>
         <div className="col-4 mt-3 mb-3 text-center title-viewcontact">
            <i className="fa fa-phone"></i>
            <h6>Audio</h6>
         </div>
         <div className="col-4 mt-3 mb-3 text-center title-viewcontact">
            <i className="fa fa-video-camera"></i>
            <h6>Video</h6>
         </div>
         <div className="col-4 mt-3 mb-3 text-center title-viewcontact">
            <i className="fa fa-search"></i>
            <h6>Search</h6>
         </div>
         <div className="col-12 mt-4 description-here">
            <h6 className="font-14">description show here</h6>
            <p className="para-style">July 21, 2020</p>
         </div>
         <div className="col-12 mt-4 media-section">
            <h6 className="font-14">
               Media, links, and docs 
               <spam> 243 <i className="fa fa-angle-right"></i></spam>
            </h6>
            <div className="row">
               <div className="col-3 m-p-0">
                  <img src="img/euronews.png" className="img-thumbnail" alt="img"/>
               </div>
               <div className="col-3 m-p-0">
                  <img src="img/euronews.png" className="img-thumbnail" alt="img"/>
               </div>
               <div className="col-3 m-p-0">
                  <img src="img/euronews.png" className="img-thumbnail" alt="img"/>
               </div>
               <div className="col-3 m-p-0">
                  <img src="img/euronews.png" className="img-thumbnail" alt="img"/>
               </div>
            </div>
         </div>
         <div className="mt-4 notife-section">
            <div className="row mb-4">
               <div className="col-1">
                  <i className="fa fa-bell font-14"></i>
               </div>
               <div className="col-8">
                  <h6 className="font-14">Mute Notifications</h6>
               </div>
               <div className="col-2">
                  <label className="switch">
                  <input type="checkbox"/>
                  <span className="slider round"></span>
                  </label>
               </div>
            </div>
            <div className="row mb-4">
               <div className="col-1">
                  <i className="fa fa-music font-14"></i>
               </div>
               <div className="col-11">
                  <h6 className="font-14">Custom Notifications</h6>
               </div>
            </div>
            <div className="row mb-2">
               <div className="col-1">
                  <i className="font-13 fa fa-picture-o"></i>
               </div>
               <div className="col-11">
                  <h6 className="font-14">Media Visibility</h6>
               </div>
            </div>
         </div>
         <div className="mt-4 notife-section">
            <div className="row mb-4">
               <div className="col-1">
                  <i className="fa fa-lock"></i>
               </div>
               <div className="col-11">
                  <h6 className="font-14">Encryption</h6>
                  <p className="font-13">Message and call are end-to-end encryption. Top to Verify</p>
               </div>
            </div>
            <div className="row mb-2">
               <div className="col-1">
                  <i className="fa fa-spinner"></i>
               </div>
               <div className="col-11">
                  <h6 className="font-14">Disappearing Messages</h6>
                  <p className="font-13">off</p>
               </div>
            </div>
         </div>
         <div className="mt-4 notife-section">            
            <div className="row mb-4 text-danger">
               <div className="col-1">
                  <i className="fa fa-ban"></i>
               </div>
               <div className="col-11">
                  <h6>Block username </h6>
               </div>
            </div>
            <div className="row mb-2 text-danger">
               <div className="col-1">
                  <i className="fa fa-thumbs-down"></i>
               </div>
               <div className="col-11">
                  <h6>Report username </h6>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default ViewContact;