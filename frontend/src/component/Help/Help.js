import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export const Help = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row mt-3">
         <div className="col-12">
            <h6 className="title-style">Help Desk</h6>
            <p className="para-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div class="faq " data-component="Faq ">
               <div class="faq__grid ">
                  <div class="faq__grid__faqs ">
                     <details class="faq__grid__faqs__faq " open>
                        <summary class="faq__grid__faqs__faq__button" data-category="faq">
                           <div class="faq__grid__faqs__faq__button__content ">
                              <div class="faq__grid__faqs__faq__button__title ">
                                 About OneApp?
                              </div>
                              <div class="faq__grid__faqs__faq__button__arrow ">
                                 <svg width="19 " height="12 " viewBox="0 0 19 12 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M16.385 0.884766L9.5 7.75477L2.615 0.884766L0.5 2.99977L9.5 11.9998L18.5 2.99977L16.385 0.884766Z " fill="#00bbc4 "/>
                                 </svg>
                              </div>
                           </div>
                        </summary>
                        <div class="faq__grid__faqs__faq__body ">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                     </details>
                     <details class="faq__grid__faqs__faq ">
                        <summary class="faq__grid__faqs__faq__button" data-category="faq">
                           <div class="faq__grid__faqs__faq__button__content ">
                              <div class="faq__grid__faqs__faq__button__title ">
                              What is Lorem Ipsum?
                              </div>
                              <div class="faq__grid__faqs__faq__button__arrow ">
                                 <svg width="19 " height="12 " viewBox="0 0 19 12 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M16.385 0.884766L9.5 7.75477L2.615 0.884766L0.5 2.99977L9.5 11.9998L18.5 2.99977L16.385 0.884766Z " fill="#00bbc4"/>
                                 </svg>
                              </div>
                           </div>
                        </summary>
                        <div class="faq__grid__faqs__faq__body ">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                     </details>
                     <details class="faq__grid__faqs__faq ">
                        <summary class="faq__grid__faqs__faq__button " data-category="faq">
                           <div class="faq__grid__faqs__faq__button__content ">
                              <div class="faq__grid__faqs__faq__button__title ">
                              What is Lorem Ipsum?
                              </div>
                              <div class="faq__grid__faqs__faq__button__arrow ">
                                 <svg width="19 " height="12 " viewBox="0 0 19 12 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M16.385 0.884766L9.5 7.75477L2.615 0.884766L0.5 2.99977L9.5 11.9998L18.5 2.99977L16.385 0.884766Z " fill="#00bbc4"/>
                                 </svg>
                              </div>
                           </div>
                        </summary>
                        <div class="faq__grid__faqs__faq__body ">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                     </details>
                     <details class="faq__grid__faqs__faq ">
                        <summary class="faq__grid__faqs__faq__button" data-category="faq">
                           <div class="faq__grid__faqs__faq__button__content ">
                              <div class="faq__grid__faqs__faq__button__title ">
                                What is Lorem Ipsum?
                              </div>
                              <div class="faq__grid__faqs__faq__button__arrow ">
                                 <svg width="19 " height="12 " viewBox="0 0 19 12 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M16.385 0.884766L9.5 7.75477L2.615 0.884766L0.5 2.99977L9.5 11.9998L18.5 2.99977L16.385 0.884766Z " fill="#00bbc4"/>
                                 </svg>
                              </div>
                           </div>
                        </summary>
                        <div class="faq__grid__faqs__faq__body ">
                           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                     </details>
                  </div>
               </div>
            </div>
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
export default Help;