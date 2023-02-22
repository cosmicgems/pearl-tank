import React from "react";
import MissState from "../components/about-page/mission-statement";
import VisionState from "../components/about-page/vision-statement";
import Section from "../components/about-page/section";
import Subheader from "../components/SubheaderComponents/Subheader";
import { coreValues, mvData } from "../data/about-data";
import { useMediaQuery } from 'react-responsive';

const AboutPage = ()=>{
    const [ms, vs] = mvData;
    const [name, key, description,] = coreValues;

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
            
            {(isMobile) && 
            <section>
                <div className="x-pad">
                    <Subheader 
                    title={"About Us"} 
                    tagline={"Peer into our facets. Theres a cosmic story."} 
                    slogan={"Dream. Plan. Manifest."}          
                    />
                    <div className="ypad-mobile">
                        <MissState name={ms.name} statement={ms.statement} />
                        <VisionState name={vs.name} statement={vs.statement}/>
                        <div>
                            <Section key={key}  name={name} statement={description} />
                        </div>
                    </div>
                </div>
            
            </section>
            }



            {(isLaptop) &&
            <section>
            <div className="xpad">
            
            <Subheader 
                title={"About Us"} 
                tagline={"Peer into our facets. Theres a cosmic story."} 
                slogan={"Dream. Plan. Manifest."}          />

            <div className="ypad">
                <MissState name={ms.name} statement={ms.statement} />
                <VisionState name={vs.name} statement={vs.statement}/>
                <Section key={key}  name={name} statement={description} />
            </div>
           

        </div>
                
            </section> } 
        </div>

        
        
    )
}

export default AboutPage;