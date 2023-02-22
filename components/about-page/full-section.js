/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { coreValues } from "../../data/about-data";
import { useMediaQuery } from 'react-responsive'
import { FaRegEye } from "react-icons/fa";
import { SlPlus, SlClose } from "react-icons/sl";

const FullSection = (props) => {

  const isMobile = useMediaQuery({
      query: '(max-width: 424px)'
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

  const [{name, description, tagline}] = coreValues;
  const [{values}] = coreValues;

    return (
      <div>
                    
        {(isMobile) && <div className="py-3 fullServiceDiv-mobile service-shadow">
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-1 pb-4">
          <div className="col-lg-12 close-button">
            <div className='col-lg-1'>
              <SlClose size={35} className="close-button"  onClick={()=>{props.onClicked2()}}/>
            </div>
          </div>
    <div className="col-12  mobile-full-icon pb-2">
      <img width='100'  className="img-fluid service-icons-mobile" src="images/site/core-values.png" alt="user_interface"/>
      </div>
      <div className="d-flex flex-column align-items-start gap-1  pb-2">
        <h1 className="fw-bold fullServiceH3-mobile">{name}</h1>
        <p className="text-muted">{tagline}</p>
        <p className="lead-mobile">{description}</p>
      </div>

      <div className="squeezer-mobile">
          <div className="row  scrollable-div scrollable-div-mobile">
          {values.map((feature) => 
          (    <div key={feature.name} className="d-flex flex-column gap-2 features-mobile">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3 ">
                  <img src={feature.icon} className="bi img-fluid" width="50em" height="50em" alt="feature_icon" />
                </div>
                <h4 className="fw-semibold mb-0 feat-name">{feature.name}</h4>
                <p className="text-muted2 mb-5">{feature.description}</p>
              </div>

          ))}
        </div>
      </div>
      
    </div>
        </div>
        
        }






        {(isLaptop) && <div className="px-4 pb-5 fullServiceDiv mb-3 service-shadow">
          <div className=' pt-3 pb-5 row justify-content-end'>
     <div className='col-lg-1'>
     <SlClose size={35} className="close-button"  onClick={()=>{props.onClicked2(props.key)}}/>
      {/* <img src='/images/site/close.png' alt='close' /> */}
     </div>
</div>
<div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-2 pb-5">
      <div className="d-flex flex-column align-items-start gap-2">
        <h1 className="fw-bold fullServiceH3">{name}</h1>
        <p className="lead">{tagline}</p>
        <p className="text-muted2">{description}</p>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 g-4 scrollable-div">
        {values.map((feature) => (

              <div key={feature.name} className="d-flex flex-column gap-2">
              <div
                className="feature-icon-small d-inline-flex align-items-center justify-content-center bg-gradient fs-4 rounded-3">
                <img src={feature.icon} className="bi" width="50em" height="50em" alt="feature_icon" />
              </div>
              <h4 className="fw-semibold mb-0 feat-name">{feature.name}</h4>
              <p className="text-muted2">{feature.description}</p>
            </div>

        ))}
      </div>
</div>
      
      
    </div>} 
            
      </div>


    



        
   )
}

export default FullSection;