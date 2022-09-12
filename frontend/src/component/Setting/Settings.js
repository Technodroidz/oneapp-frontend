import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
export const Settings = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">Settings</h6>
         </div>
      </div>
      <div className="bg-Wallet-set">
         <div className="row mt-3">
            <div className="col-7">
               <h5>Wallet</h5>
               <p className="font-12">Welcome to your Wallet</p>
            </div>
            <div className="col-5 text-right">
               <h4><b>$120</b></h4>
               <p className="font-12">Add Money </p>
            </div>
         </div>
      </div>
      <div className="bg-History-set">
         <div className="row mt-3">
            <div className="col-12">
               <h5>Transaction History</h5>
               <p className="font-12">Welcome to your transactions</p>
            </div>            
         </div>
         <div className="row mt-3">
            <div className="col-4">
               <h4 className="font-13"> Coorg Trip</h4>
            </div>
            <div className="col-5 text-center">
               <p className="font-13">12 Jul 2020,<br></br> 12:30 PM</p>
            </div>
            <div className="col-3 text-right">
               <h4 className="font-13">$120</h4>
            </div>
            </div>
            <div className="row ">
            <div className="col-4">
               <h4 className="font-13"> Coorg Trip</h4>
            </div>
            <div className="col-5 text-center">
               <p className="font-13">12 Jul 2020,<br></br> 12:30 PM</p>
            </div>
            <div className="col-3 text-right">
               <h4 className="font-13">$120</h4>
            </div>
            </div>
            <div className="row ">
            <div className="col-4">
               <h4 className="font-13"> Coorg Trip</h4>
            </div>
            <div className="col-5 text-center">
               <p className="font-13">12 Jul 2020,<br></br> 12:30 PM</p>
            </div>
            <div className="col-3 text-right">
               <h4 className="font-13">$120</h4>
            </div>
            </div>
            <div className="row ">
            <div className="col-4">
               <h4 className="font-13"> Coorg Trip</h4>
            </div>
            <div className="col-5 text-center">
               <p className="font-13">12 Jul 2020,<br></br> 12:30 PM</p>
            </div>
            <div className="col-3 text-right">
               <h4 className="font-13">$120</h4>
            </div>
            </div>
      </div>
      <div className="bg-Notification-set">
         <div className="row mt-3">
            <div className="col-12">
               <h5>Notification</h5>
               <p className="font-12">See your All Notification</p>
            </div>
            <div className="col-12">
           

            <p className="font-14"><em>9</em> new <Link to="">calendar event(s)</Link> are scheduled for today.</p>            
            <p  className="font-14"><em>3</em> new <Link to="">lead(s)</Link> are available in the system.</p>
            <p  className="font-14"><em>9</em> new <Link to="">calendar event(s)</Link> are scheduled for today.</p>
            <p  className="font-14"><em>3</em> new <Link to="">lead(s)</Link> are available in the system.</p>

            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default Settings;