import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

export default function Footer(){
    return (
        <div className="container-fluid footer-section pt-0 mt-0">
  <footer className="flex-wrap justify-content-between align-items-center py-3  border-top">
    <div className="col-md-4 d-flex align-items-center center-footer">
    
      <div className="mb-3 me-2 mb-md-0 text-muted ">
        <Image src='/images/site/cosmic-logo.png' width={50} height={50} alt='cosmic_logo'/>
      </div>
      
      <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Cosmic Gems Reality, LLC</span>
    </div>
        <div className="footer-social col-md-4 d-flex align-items-center ">
      <ul className="nav col-md-4  list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsFacebook /> </svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsInstagram /> </svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><BsTwitter /> </svg></a></li>
    </ul>
    </div>
    

    
  </footer>
</div>
    )
}