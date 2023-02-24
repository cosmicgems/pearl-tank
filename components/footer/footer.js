import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

export default function Footer(){
    return (
        <div className=" footer-section ">
  <footer className="  align-items-center   border-top py-2">
  <p></p>
        <div className="footer-social col-md-4 d-flex  ">
      <ul className="nav col-md-4  list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsFacebook /> </svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsInstagram /> </svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsTwitter /> </svg></a></li>
    </ul>
    </div>
    <div className="col-md-4 d-flex align-items-center center-footer">
    
      <div className="mb-3 me-2 mb-md-0 text-muted ">
        <Image src='/images/site/cosmic-logo.png' width={50} height={50} alt='cosmic_logo'/>
      </div>
      
      <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Cosmic Gems Reality, LLC</span>
    </div>
    
    

    
  </footer>
</div>
    )
}