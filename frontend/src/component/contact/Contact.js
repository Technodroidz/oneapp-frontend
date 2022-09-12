import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

export const Contact = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">Contact Us</h6>
         </div>
         <form>
            <div className="bg-History-set">
               <div className="row mt-3 mb-3">
                  <div className="col-12 event-input-style">
                     <input type="text" class="form-control rounded" placeholder="Enter Your Name"/>          
                  </div>
               </div>
            </div>
            <div className="bg-History-set">
               <div className="row mt-3 mb-3">
                  <div className="col-12 event-input-style">
                     <input type="text" class="form-control rounded" placeholder="Enter Phone Number"/>          
                  </div>
               </div>
            </div>
            <div className="bg-History-set">
               <div className="row mt-3 mb-3">
                  <div className="col-12 event-input-style">
                     <input type="text" class="form-control rounded" placeholder="Enter Email address"/>          
                  </div>
               </div>
            </div>
            <div className="bg-History-set">
               <div className="row mt-3 mb-3">
                  <div className="col-12 event-input-style">
                  <select class="form-control rounded">
                     <option>Select Your Country</option>
                     <option>Hungary</option>
                     <option>Iceland</option>
                     <option>India</option>
                     <option>Indonesia</option>
                     <option>Iran</option>
                  </select>
                  </div>
               </div>
            </div>            
            <div className="bg-History-set">
               <div className="row mt-3 mb-3">
                  <div className="col-12 event-textarea-style">
                     <textarea class="form-control rounded" placeholder="Description"></textarea>
                  </div>
               </div>
            </div>
            <div className="form-group text-center">
               <Link to="/" className="btn btn-info text-white btn-block font-14">
               Submit</Link>
            </div>
         </form>
      </div>
      <div className="oneApp-ad mt-3">
         <h6 className="text-center">oneApp Ad</h6>
         <img src="img/banner-ad.png" alt=""/>
      </div>
   </div>
</section>
</>
)
}
export default Contact;