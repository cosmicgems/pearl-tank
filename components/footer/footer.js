import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';

export default function Footer(){

  const isMobile = useMediaQuery({
      query: '(max-width: 434px)'
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

    return (
      <React.Fragment>
      {isMobile &&
      <div className=" footer-section  ">
        <footer className=" pt-4   border-top py-2">
      
              <div className="  d-flex footer-mobile row text-center">
              <div className="col-12 px-5">
            <ul className="list-unstyled d-flex "  style={{paddingLeft: '27vw'}} >
            <li className="ms-3"><a className="text-muted" href="#"><BsFacebook /></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><BsInstagram /></a></li>
            <li className="ms-3"><a className="text-muted" href="#"><BsTwitter /></a></li>
          </ul>

              </div>
          </div>
          <div className=" d-flex align-items-center"  style={{paddingLeft: '17.5vw'}} >
          
            <div className="mb-3 me-2 ">
              <Image src='/images/site/cosmic-logo.png' width={50} height={50} alt='cosmic_logo'/>
            </div>
            
            <span className="mb-3 text-muted">&copy; 2022 Cosmic Gems Reality, LLC</span>
          </div>
          
          

          
        </footer>
      </div>
      }
        {isTablet && !isLaptop &&
        <div className=" footer-section  ">
          <footer className="    border-top py-4">
        
                <div className=" d-flex row text-center " >
                <div className="col-12">
                  <ul className="col-md-4  list-unstyled d-flex " style={{paddingLeft: '41vw'}} >
                    <li className="ms-3"><a className="text-muted" href="#"><BsFacebook /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><BsInstagram /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><BsTwitter /></a></li>
                  </ul>
                </div>
              
            </div>

            <div></div>

            <div className=" d-flex align-items-center" style={{paddingLeft: '30vw'}} >
            
              <div className="mb-3 me-2 mb-md-0 ">
                <Image src='/images/site/cosmic-logo.png' width={50} height={50} alt='cosmic_logo'/>
              </div>
              
              <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Cosmic Gems Reality, LLC</span>
            </div>
            
            

            
          </footer>
        </div>
        }
        {isLaptop &&
        <div className=" footer-section  container-fluid">
          <footer className="    border-top py-4">
        
                <div className="d-flex row text-center pb-2">
                  <div className="col-12">
                    <ul className="col-md-4  list-unstyled d-flex" style={{paddingLeft: '45vw'}} >
                      <li className="ms-3"><a className="text-muted" href="#"><BsFacebook /></a></li>
                      <li className="ms-3"><a className="text-muted" href="#"><BsInstagram /></a></li>
                      <li className="ms-3"><a className="text-muted" href="#"><BsTwitter /></a></li>
                    </ul>
                  </div>
              
            </div>
            <div>
              
            </div>
            <div className=" d-flex align-items-center " style={{paddingLeft: '40vw'}} >
            
              <div className="mb-3 me-2 mb-md-0">
                <Image src='/images/site/cosmic-logo.png' width={50} height={50} alt='cosmic_logo'/>
              </div>
              
              <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Cosmic Gems Reality, LLC</span>
            </div>
            
            

            
          </footer>
        </div>
        }
      </React.Fragment>
        
    )
}