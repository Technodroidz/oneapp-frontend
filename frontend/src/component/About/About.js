import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export const About = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">About Our Company</h6>
            <p className="para-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
         </div>
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
export default About;