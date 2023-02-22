import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import classes from './layout.module.css';
import { useMediaQuery } from "react-responsive";


function Layout(props){

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

    return (
        <div>
            {isMobile &&
                <Fragment>
                    <MainNavigation />
                    <div className="">
                        <video autoPlay muted loop className="video" >
                            <source src="/images/site/fluid.mp4" />
                        </video>
                    </div>
                    <main className={classes.main}>{props.children}</main>
                </Fragment>
            }

            {isLaptop &&
                <Fragment>
                    <MainNavigation />
                    <main className={classes.main}>{props.children}</main>
                </Fragment>
            }
        </div>
    ) 
    
}

export default Layout;