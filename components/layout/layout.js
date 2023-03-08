import React from "react";
import MainNavigation from "./main-navigation";
import { useMediaQuery } from "react-responsive";
import Footer from "../footer/footer";


function Layout(props){

    const isMobile = useMediaQuery({
        query: '(max-width: 431px)'
    })
    const isTablet = useMediaQuery({
        query: '(min-width: 767px)'
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 1280px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1920px)'
    })

    return (
        <div>
        {isMobile &&
            <React.Fragment>
                <MainNavigation />
                <div className="">
                    <video autoPlay muted loop className="video" playsInline={true} >
                        <source src="/images/site/fluid.mp4" />
                    </video>
                </div>
                <main>{props.children}</main>
                <Footer/>
            </React.Fragment>
        }
        {isTablet && !isLaptop &&
            <React.Fragment>
                <MainNavigation />
                <div className="">
                    <video autoPlay muted loop className="video" playsInline={true} >
                        <source src="/images/site/fluid.mp4" />
                    </video>
                </div>
                <main>{props.children}</main>
                <Footer />
            </React.Fragment>
        }

            {isLaptop &&
                <React.Fragment>

                    <MainNavigation />
                    <div className="">
                        <video autoPlay muted loop className="video" playsInline={true} >
                            <source src="/images/site/fluid.mp4" />
                        </video>
                    </div>
                    <main>{props.children}</main>
                    <Footer/>
                </React.Fragment>
            }

            
        </div>
    ) 
    
}

export default Layout;