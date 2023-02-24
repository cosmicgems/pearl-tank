import Image from "next/image";
import AtGlance from "./at-a-glance";
import Available from "./available";
import Collaborations from "./collaborations";
import FieldExpert from "./field-experience";
import Header from "./header";
import Stripes from "./stripes";
import { useMediaQuery } from "react-responsive";
import Skills from "./skills";

export default function Resume(){
    const isMobile = useMediaQuery({
        query: '(max-width: 1025px)'
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
            {isMobile && <div>
                <video autoPlay muted loop className="video"  playsInline={true} >
                    <source src="/images/site/fluid.mp4" />
                </video>
                <div className="">
                
                
                    <div className="welcome-clear container-fluid">
                        <div className=" welcome-mobile-div py-4 text-center">
                            <h1 className="welcome-mobile-h1 ">
                                Hello World I&#39;m Maliek.
                            </h1>
                            <p className="welcome-p-mobile mb-5">
                                Technical Project Manager
                            </p>
                            <div className="px-5 mx-4">
                                <Image className="hero-img pl-5" width={200} height={200} src='/images/site/hero7.png' alt="head_shot" />
                            </div>
                        </div>
                    </div>
                    

                </div>
                <AtGlance />
                <Stripes />
                <Collaborations />
                <Skills />
                <FieldExpert />
                <Available />
                
            </div>}
        </div>


        /* <main className="resume">
        <Header />
            <section className="resume">
            <div className="resume pt-5">
            <h1 className="resume-h1 pt-3">Hello World, I'm Maliek</h1>
            <p className="resume-p pb-3">Technical project manager.</p>
            <div className="me-pic ">
                <Image className="hero-img" width={250} height={250} src='/images/site/hero7.png' alt="head_shot" />
            </div>
            </div>
        </section>
        <AtGlance />
        <Stripes />
        <Collaborations />
        <FieldExpert />
        <Available />
        <ContactForm />
        </main> */
        
    )
}