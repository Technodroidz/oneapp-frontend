import React from 'react';
import { Link } from 'react-router-dom';
import { $ }  from 'react-jquery-plugin'
import 'bootstrap/dist/css/bootstrap.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from 'react';
import http from '../http'
export const Home = () => {

   const[allfm, setFMs] = useState([]);
      useEffect(()=>{
         fetchAllFMChannels();
      },[]);

   const fetchAllFMChannels = () => {
      http.get('/fmchannels').then(res=>{
         try{
            setFMs(res.data);
         }catch(e){
            console.log('error', e);        
         }   
         // console.log(res.data);
      })
   }

   const[allyoutube, setYoutubes] = useState([]);
   useEffect(()=>{
      fetchAllYouTubeChannels();
   },[]);

   const fetchAllYouTubeChannels = () => {
      http.get('/youtubechannels').then(res=>{
         try{
            setYoutubes(res.data);
         }catch(e){
            console.log('error', e);        
         }
         //console.log(res.data);
      })
   }


   
   $(document).ready(function() {
      setTimeout(() => {
      $('#vip-channels').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{0:{items:3},600:{items:4},1000:{items:6}
      },
      navText: ["<img src='img/chevrons-left.png'/>","<img src='img/chevrons-right.png'/>"]
      });
      $('#tv-stream').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{0:{items:3},600:{items:4},1000:{items:6}
      },
      navText: ["<img src='img/chevrons-left.png'/>","<img src='img/chevrons-right.png'/>"]
      });
      $('#radio-channels').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{0:{items:3},600:{items:4},1000:{items:6}
      },
      navText: ["<img src='img/chevrons-left.png'/>","<img src='img/chevrons-right.png'/>"]
      });
      $('#one-appchannels').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      responsive:{0:{items:3},600:{items:4},1000:{items:6}
      },
      navText: ["<img src='img/chevrons-left.png'/>","<img src='img/chevrons-right.png'/>"]
      });
      }, 5000);
      });
return (
<>    
<div className="masthead">
   <section>
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <h5 className="title-h5"><samp className="color-web">Express, share</samp> and <samp className="color-web">have</samp> fun in a judgement free safe space</h5>
            </div>
            <div className="d-flex">
               <div className="d-sm-block mt-3 ms-2">
                  <div class="bar">
                     <div className="dropdown">
                        <button type="button" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false" className="bar-btn">
                        <label><input type="text" placeholder="Search"/></label>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 search-w-100" aria-labelledby="page-header-notifications-dropdown ">
                           <div className="search-bar">
                              <input type="text" className="input-search" placeholder="Search OneApp"/>
                              <input type="text" className="input-search" placeholder="Search Google"/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="d-sm-block mt-3 ms-2">
                  <img className="filterslines" src="img/filterslines.png" alt=""/>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="vip-title">
                  <h6>VIP Channels</h6>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="cover-wrapper">
               <div id="vip-channels" className="owl-carousel text-center mt-1">
                  <div className="item">
                     <div className="client-inners">
                        <Link to="/DetailsPage">
                        <img src="img/narendra-modi.jpg" alt="img"/></Link>
                        <Link to="/DetailsPage">
                        <h6>
                           Narendra Modi
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
                  <div className="item">
                     <div className="client-inners">
                        <Link to="/DetailsPage">
                        <img src="img/donald_trump.jpg" alt="img"/></Link>
                        <Link to="/DetailsPage">
                        <h6>
                           Donald Trump
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
                  <div className="item">
                     <div className="client-inners">
                        <Link to="/DetailsPage">
                        <img src="img/rita-img.jpg" alt="img"/></Link>
                        <Link to="/DetailsPage">
                        <h6>
                           Rita Ora
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
               </div>
               <h5 className="minimize-title"><img src="img/minimize.png" alt="img"/> See more channels</h5>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div className="container bg-background-white">
         <div className="row">
            <div className="col-md-12">
               <div className="stream-title">
                  <h6>Live TV Stream</h6>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="cover-wrapper">
               <div id="tv-stream" className="owl-carousel text-center mt-1">
               {allyoutube.map((youtube,index)=>( 
                  <div className="item">
                     <div className="client-inners">
                        <Link to={{ pathname: "/DetailsPage/" + youtube.videoid }}>
                        <img src={youtube.image} alt="img"/></Link>
                        <Link to={{ pathname: "/DetailsPage/" + youtube.videoid }}>
                        {/* <h6>
                        {youtube.channeltitle}
                        </h6> */}
                        <h6>
                        {youtube.title}
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
                ))}  
               </div>
               <h5 className="minimize-title"><img src="img/minimize.png" alt="img"/> See more channels</h5>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="radio-title">
                  <h6>Radio Channels</h6>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="cover-wrapper">
               <div id="radio-channels" className="owl-carousel text-center mt-1">
               {allfm.map((fm,index)=>(
                  <div className="item">
                     <div className="client-inners">
                         <a href= {fm.album_url}>
                        <img src={fm.image} alt="img"/></a>
                        <a href= {fm.album_url}>
                        <h6>
                            {fm.album}
                        </h6>
                        </a> 
                        {/* <Link to={{ pathname: "/RadioChannels/" + fm.id }}>
                        <img src={fm.image} alt="img"/></Link>
                        <Link to={{ pathname: "/RadioChannels/" + fm.id }}>
                        <h6>
                        {fm.album}
                        </h6>
                        </Link> */}
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
               ))}  
               </div>
               <h5 className="minimize-title"><img src="img/minimize.png" alt="img"/> See more channels</h5>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div className="container bg-background-white">
         <div className="row">
            <div className="col-md-12">
               <div className="oneAppchannels-title">
                  <h6>OneApp Channels</h6>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="cover-wrapper">
               <div id="one-appchannels" className="owl-carousel text-center mt-1">
                  <div className="item">
                     <div className="client-inners">
                        <Link to="/DetailsPage">
                        <img src="img/lostfound.jpg" alt="img"/></Link>
                        <Link to="/DetailsPage">
                        <h6>
                           Lost and Found
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
                  <div className="item">
                     <div className="client-inners">
                        <Link to="/DetailsPage">
                        <img src="img/job-opportunities.jpg" alt="img"/></Link>
                        <Link to="/DetailsPage">
                        <h6>
                           Job
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
                  <div className="item">
                     <div className="client-inners">
                        <Link to="/DetailsPage">
                        <img src="img/matrimonial.jpg" alt="img"/></Link>
                        <Link to="/DetailsPage">
                        <h6>
                           Matrimonial
                        </h6>
                        </Link>
                        <p><i className="fa fa-star"></i> 3k  &nbsp; <i className="fa fa-circle dot-red"></i> <samp className="circle-title">100K</samp></p>
                     </div>
                  </div>
               </div>
               <h5 className="minimize-title"><img src="img/minimize.png" alt="img"/> See more channels</h5>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center mt-4">
               <Link to="/Signup" className="blue-text">
               Signup for the best app in the world!</Link>
            </div>
         </div>
      </div>
   </section>
</div>
</>
)
}
export default Home;