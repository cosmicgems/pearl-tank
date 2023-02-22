import React, { useState } from "react";
import FullSection from "./full-section";
import PortionSection from "./portion-section";

function Section (props) {
    const [click, setClick] = useState(false);

    function onClicked(key, event){
        if (!click){
            setClick(true);
            } else if (click){
        }
    }
    function onClose(key){
        if (click){
            setClick(false);
        }
    }
   


    return (
        <div onClick={() => {
            setClick(!click);
        }}>
        
            {(click)? <FullSection onClicked2={(key)=>{onClose(props.key)}}/> :<PortionSection/> }
        </div>
   );
}

export default Section;