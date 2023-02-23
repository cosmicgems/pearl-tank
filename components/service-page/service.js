import React, { useState } from "react";
import FullService from "./full-service.jsx";
import PortionService from "./portion-service";
import styles from './service-page.module.css';
import { useMediaQuery } from "react-responsive";


function Service (props) {

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

    const [click, setClick] = useState(false);
    const [show, setShow] = useState(false);

    function onClicked(){
        if (!click){
            setClick(true);
                setShow(true);
        }   else if (click){
                setShow(false);
                setClick(false);
             };
        }
    
    function onClose(key){
        if (click){
            setClick(false);
        }
    }
    return (
        <div>
            {isMobile && 
            <div className="px-0">
            <div onClick={() => { onClicked();}}>
                {(click)? <FullService onClicked2={()=>{onClose(props.key)}} content={show} service={props.name} tagline={props.tagline} description={props.description} button={props.form} /> : <PortionService  service={props.name} /> }
            </div>
            </div>
            }
        </div>



        // <div onClick={() => {
        //     onClicked();
        // }}>
        //     {(click)? <FullService onClicked2={()=>{onClose(props.key)}} content={show} service={props.name} tagline={props.tagline} description={props.description} button={props.form} /> : <PortionService  service={props.name} /> }
        // </div>



   );
}


export default Service;