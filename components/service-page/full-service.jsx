/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Button } from "react-bootstrap";
import serviceData from "../../data/service-data";
import {  SlClose } from "react-icons/sl";
import { FaGem } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';


function FullService(props) {

  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
})
const isTablet = useMediaQuery({
    query: '(min-width: 767px)'
})
const isLaptop = useMediaQuery({
    query: '(min-width: 1366px)'
})
const isDesktop = useMediaQuery({
    query: '(min-width: 1920px)'
})
  const key = props.key;
  // const form = props.button;
  const service2 = props.service;
  const tagline = props.tagline;
  const description = props.description;
  const selectedService = serviceData.filter(service => service.name === service2);
  const [{features}] = selectedService


    return (

      <div className="">
        
        {(isMobile) && 

        <div className=" py-3 fullServiceDiv-mobile  service-shadow">
        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-1  pb-4">
          <div className="col-lg-12 close-button">
            <div className='col-lg-1'>
              <SlClose size={35} className="close-button"  onClick={()=>{props.onClicked2()}}/>
            </div>
          </div>
    <div className="col-12  mobile-full-icon pb-2">
      <img width='100'  className="img-fluid service-icons-mobile" src="images/site/core-values.png" alt="user_interface"/>
      </div>
        <div className="d-flex flex-column align-items-start gap-1 pb-2">
          <h3 className="fw-bold fullServiceH3-mobile">{service2}</h3>
          <p className="text-muted-tagline-mobile">{tagline}</p>
          <p className="lead-mobile">{description}</p>
        </div>

          <div className='d-grid py-3 px-3'>
            <Button variant="danger btn-lg" href="/web-development-consultation">Consultation</Button>
          </div>

        <div className='squeezer-mobile'>
          <div className="row scrollable-div-mobile ">
            {features.map((feature) => ( 
            <div key={feature.name} className="d-flex flex-column features-mobile gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">
                  <img src={feature.icon} className="bi" width="50em" height="50em" alt="feature_icon" />
                </div>
                <h4 className="fw-semibold mb-0 feat-name">{feature.name}</h4>
                <p className="text-muted2 mb-5">{feature.description}</p>
            </div>
        ))}
      </div>
        </div>
    </div>
      </div>}
      </div>



//   <div className="col-lg-12 close-button-mobile pb-4 pt-2">
    
//     </div>

//          {(isDesktopOrLaptop) && 
         
//           <div className="px-4 pb-5 fullServiceDiv mb-3 service-shadow">
//           <div className=' pt-3 pb-5 row justify-content-end'>
//      <div className='col-lg-1'>
//      <SlClose size={35} className="close-button"  onClick={()=>{props.onClicked2(props.key)}}/>
//       {/* <img src='/images/site/close.png' alt='close' /> */}
//      </div>
// </div>
// <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2 pb-5">

//       <div className="d-flex flex-column align-items-start gap-5 ">
//       <div className=''>
//         <h3 className="fw-bold fullServiceH3 -3">{service2}</h3>
//         <p className="text-muted2">{tagline}</p>
//         <p  className="lead ">{description}</p>
//       </div>
        
//         <Button variant="outline-dark btn-lg" href="/web_development_consultation">Consultation</Button>
//       </div>
//       <div className="row row-cols-1 row-cols-sm-2 g-4 scrollable-div service-shadow py-2">
//         {features.map((feature) => (

//               <div className="d-flex flex-column gap-2 ">
//                 <div
//                 className="feature-icon-small d-inline-flex align-items-center justify-content-center  bg-gradient fs-4 rounded-3">

//                 <img src={feature.icon} className="bi" width="50em" height="50em" alt="feature_icon" />
//               </div>
              
//               <h4 className="fw-semibold mb-0 feat-name text-muted2 ">{feature.name}</h4>
//               <p className="lead">{feature.description}</p>
//             </div>

//         ))}
//       </div>
//     </div>
//       </div>} 
//       </div>

      

   )
}

export default FullService;