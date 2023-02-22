import React from "react";
import { coreValues } from "../../data/about-data";


const PortionSection = (props) => {
   
    const [{name}] = coreValues;

    return (
        <div className="denseServiceDiv-expandable-mobile">
            <h1 className="denseServiceH1-mobile">{name}</h1>
        </div>
   )
}

export default PortionSection;