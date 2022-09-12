import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

export const ScheduleEvent = () => {

return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">List of All Events </h6>
         </div>
      </div>
      <div className="row mb-3">
         <div className="col-12 text-center">
            <Link to="/CreateNewEvent" className="btn btn-info text-white border-radius50 font-13">
            Create New Event</Link>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="event-list">
            <div className="row">
               <div className="col-3 event-date">
                  <h6>
                     <spam>12 </spam>
                     Novmber
                  </h6>
               </div>
               <div className="col-9 event-dis">
                  <h6 className="font-14">Bisector & Friends</h6>
                  <p className="font-12">Today, 7–10 pm</p>
                  <p className="font-12">New Delhi, Delhi</p>
               </div>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="event-list">
            <div className="row">
               <div className="col-3 event-date">
                  <h6>
                     <spam>26 </spam>
                     January
                  </h6>
               </div>
               <div className="col-9 event-dis">
                  <h6 className="font-14">Bisector & Friends</h6>
                  <p className="font-12">Today, 7–10 pm</p>
                  <p className="font-12">New Delhi, Delhi</p>
               </div>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="event-list">
            <div className="row">
               <div className="col-3 event-date">
                  <h6>
                     <spam>14 </spam>
                     February
                  </h6>
               </div>
               <div className="col-9 event-dis">
                  <h6 className="font-14">Bisector & Friends</h6>
                  <p className="font-12">Today, 7–10 pm</p>
                  <p className="font-12">New Delhi, Delhi</p>
               </div>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="event-list">
            <div className="row">
               <div className="col-3 event-date">
                  <h6>
                     <spam>05 </spam>
                     April
                  </h6>
               </div>
               <div className="col-9 event-dis">
                  <h6 className="font-14">Bisector & Friends</h6>
                  <p className="font-12">Today, 7–10 pm</p>
                  <p className="font-12">New Delhi, Delhi</p>
               </div>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="event-list">
            <div className="row">
               <div className="col-3 event-date">
                  <h6>
                     <spam>05 </spam>
                     April
                  </h6>
               </div>
               <div className="col-9 event-dis">
                  <h6 className="font-14">Bisector & Friends</h6>
                  <p className="font-12">Today, 7–10 pm</p>
                  <p className="font-12">New Delhi, Delhi</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default ScheduleEvent;