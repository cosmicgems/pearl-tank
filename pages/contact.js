import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Subheader from "../components/SubheaderComponents/Subheader";
import { useMediaQuery } from "react-responsive";

function ContactPage() {

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


    return (

        <div>
            {isMobile &&
                <Fragment>
                <div className="pt-5">
                    <Head>
                        <title>Contact Me</title>
                        <meta name='description' content="the way you contact us."  />
                    </Head>
                    <div className="ypad-mobile">
                        <Subheader title={"Contact"} slogan={"Your Cosmic Gem is just a click away"} tagline={"Connect. Plan. Manifest."} />
                        <ContactForm />
                    </div>
                </div>
            
        </Fragment>
            }

            {isLaptop &&
                        <Fragment>
            <Head>
                <title>Contact Me</title>
                <meta name='description' content="the way you contact us."  />
            </Head>
            <div className="xpad">
                    <Subheader title={"Contact"} slogan={"Your Cosmic Gem is just a click away"} tagline={"Connect. Plan. Manifest."} />
                    <div className="ypad-mobile">
                        <ContactForm />
                    </div>
                    
                </div>
        </Fragment>
            }
        </div>

        
    )
    
}
export default ContactPage;