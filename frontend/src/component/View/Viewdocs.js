import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export const Viewdocs = () => {
return (
<>
<section className="masthead">
   <div className="container">
      <div className="row">
         <div className="col-md-12 mt-2">
            <div className="viewdocs-tabs">
               <Tabs>
                  <TabList>
                     <Tab>
                        <h5> MEDIA </h5>
                     </Tab>
                     <Tab>
                        <h5> DOCS</h5>
                     </Tab>
                     <Tab>
                        <h5> LINKS</h5>
                     </Tab>
                  </TabList>
                  <TabPanel>
                     <div className="container">
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6 className="font-14">Recent</h6>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/narendra-modi.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user2.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user3.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user4.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/euronews.png" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/matrimonial.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/buy-or-sell.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/cnn-logo.png" alt="img" className="viewdocs-img"/>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6 className="font-14">Last Month</h6>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user2.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user3.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user4.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user1.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6 className="font-14">Last Year</h6>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/matrimonial.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user2.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user3.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user4.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/euronews.png" alt="img" className="viewdocs-img"/>
                           </div>
                           <div className="col-3 m-p-0">
                              <img src="img/user1.jpg" alt="img" className="viewdocs-img"/>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="container">
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6 className="font-14">Recent</h6>
                           </div>
                           <div className="col-12 m-p-0">
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/pdf-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : PDF</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/excel-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : EXCEL</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/png-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : PNG</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/jpg-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : JPG</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/doc-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : DOCS</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6>Last Month</h6>
                           </div>
                           <div className="col-12 m-p-0">
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/pdf-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : PDF</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/excel-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : EXCEL</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/png-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : PNG</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/jpg-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : JPG</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/doc-icon.png" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><b>26kb : DOCS</b> &nbsp; 12/01/2001</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
                  <TabPanel>
                     <div className="container">
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6 className="font-14">Recent</h6>
                           </div>
                           <div className="col-12 m-p-0">
                           <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/job-opportunities.jpg" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><Link to="/"><b>www.google.com</b></Link></p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/job-opportunities.jpg" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><Link to="/"><b>www.google.com</b></Link></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="row mt-4">
                           <div className="col-12 p-0">
                              <h6 className="font-14">Last Month</h6>
                           </div>
                           <div className="col-12 m-p-0">
                           <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/job-opportunities.jpg" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><Link to="/"><b>www.google.com</b></Link></p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/job-opportunities.jpg" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><Link to="/"><b>www.google.com</b></Link></p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/job-opportunities.jpg" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><Link to="/"><b>www.google.com</b></Link></p>
                                    </div>
                                 </div>
                              </div>
                              <div className="docs-file-section">
                                 <div className="row">
                                    <div className="col-3">
                                       <img src="img/job-opportunities.jpg" alt="img" className="docs-img"/>
                                    </div>
                                    <div className="col-9">
                                       <h6 className="font-14">Lorem ipsum dolor sit amet</h6>
                                       <p className="font-12"><Link to="/"><b>www.google.com</b></Link></p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </TabPanel>
               </Tabs>
            </div>
         </div>
      </div>
   </div>
</section>
</>
)
}
export default Viewdocs;