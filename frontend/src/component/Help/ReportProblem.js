import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
export const ReportProblem = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">Report A Problem</h6>
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
                  <div className="col-12 event-textarea-style">
                     <textarea class="form-control rounded" placeholder="Description"></textarea>
                  </div>
               </div>
            </div>
            <div className="form-group text-center">
               <Link to="/" className="btn btn-info text-white btn-block font-14">
               Report A Problem</Link>
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
export default ReportProblem;