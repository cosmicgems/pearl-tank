import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import styles from '../service-page/service-page.module.css';

const Subheader = (props) => {

    const isMobile = useMediaQuery({
        query: '(max-width: 445px)'
    })
    const isTablet = useMediaQuery({
        query: '(min-width: 446px)'
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 1200px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1920px)'
    })
  
    return (

        <div className=' '>
        {isMobile && 
        <div className="pt-5 mt-3 cosmic-welcome-clear-mobile2 text-center ">
            <div className="py-4 cosmic-welcome-div-mobile " >
                        <div className=" bi " style={{paddingInline: '20vw'}}>
                            <Image className="img-fluid " height={600} width={600} src='/images/site/cosmic-logo.png' alt="logo"  />
                        </div>
                        <div className="px-3 pt-4">
            <h1 className='mobilesubheaderh1'>{props.title}</h1>
                        <h4 className='mobilesubheaderh4'>{props.slogan}</h4> 
                        <h4 className='mobilesubheaderp'>{props.tagline}</h4>
                        </div>
                        
                    </div>
        </div>
        
        }
        
        {isTablet && !isLaptop && 
        <div className="pt-5 mt-3  text-center ">
            <div className="py-4 cosmic-welcome-div-mobile ">
                        <div className="bi" style={{paddingInline: '40vw'}}>
                            <Image className="img-fluid " height={600} width={600} src='/images/site/cosmic-logo.png' alt="logo"  />
                        </div>
                        <div className="px-3 pt-4">
            <h1 className='mobilesubheaderh1-tablet'>{props.title}</h1>
                        <h4 className='mobilesubheaderh4-tablet'>{props.slogan}</h4> 
                        <h4 className='mobilesubheaderp-tablet'>{props.tagline}</h4>
                        </div>
                        
                    </div>
        </div>
        
        }

        
        {isLaptop && 
        <div className="  text-center ">
            <div className="py-4 cosmic-welcome-div-mobile ">
                        <div className="bi" style={{paddingInline: '40vw'}}>
                            <Image className="img-fluid " height={600} width={600} src='/images/site/cosmic-logo.png' alt="logo"  />
                        </div>
                        <div className="px-3 pt-4">
            <h1 className='mobilesubheaderh1-laptop'>{props.title}</h1>
                        <h4 className='mobilesubheaderh4-laptop'>{props.slogan}</h4> 
                        <h4 className='mobilesubheaderp-laptop'>{props.tagline}</h4>
                        </div>
                        
                    </div>
        </div>
        
        }
        </div>
 /* 
         
            <div className="subheader-logo">
                <Image className="img-fluid " height={0} width={600} src='/images/site/cosmic-logo.png' alt="logo"  />
            </div>




        
            <div className={styles.formrow}>
                {(isTabletOrMobile) &&}
                {(isDesktopOrLaptop) && <h1 className='desktopsubheaderh1'>{props.title}</h1>} 

        
            
                {(isTabletOrMobile) && <h4 className='mobile-subheader-h4'>{props.slogan}</h4>}
                {(isDesktopOrLaptop) &&} 
                
                {(isTabletOrMobile) && <h4 className='mobile-subheader-p'>{props.tagline}</h4>}
                {(isDesktopOrLaptop) && 
            </div> */

        )
}

export default Subheader;