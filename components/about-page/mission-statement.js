import React from  "react";
import { useMediaQuery } from 'react-responsive'
import { FaGem } from "react-icons/fa";

const MissState = (props)=>{

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

    return(

        <div>
            
            {isMobile && <div className="denseServiceDiv-mobile mb-4">
            <FaGem className="green-gem" />
            <h1 className="denseServiceH1-mobile mb-3">
                {props.name} 
            </h1>
            <p className="aboutText-mobile">
                {props.statement}
            </p>


        </div>}



            {(isLaptop) && <div className="service-shadow denseServiceDiv mb-4">
            <h1 className="denseServiceH1">
                {props.name}
            </h1>
            <p className="aboutText mt-2">
                {props.statement}
            </p>


        </div>} 
        </div>
        
    )
}

export default MissState;