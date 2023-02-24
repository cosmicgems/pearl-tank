/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from "react-bootstrap";
import {BsFacebook, BsInstagram, BsSnapchat} from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

export default function AtGlance(){

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
            {isMobile && 
            <div>
            <section className="">
            <div className="glance">
            {/* This Row shows my name and my role */}
            <Row className="pt-5">
                <h4 className="glance-mobile-h4">
                    MALIEK DAVIS
                </h4>
                <p className="glance-mobile-p"> Project manager.</p>
            </Row>

            <Row className="py-3">
                <Col>
                    <hr className="glance-hr"/>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>

            


            {/* This row shows the heading of the subsection */}
            <div>
                <Row className="mb-5">
                    <Col>
                        <p className="glance-mobile-p">Quick bytes about me.</p>
                    </Col>
                </Row>
            </div>
                

                {/* This is the row that will communicate my value to the visitors of the page */}
                <Row>
                    <p className="pb-1">PASSIONS</p>
                        <Row className="pb-1">
                            <Col>
                                <p className="">Managing projects & Analyzing Systems</p>
                            </Col>
                        </Row>
                        <Row className="mb-5">
                            <Col>
                                <p className="">
                                    Learning, Laughing, Family, Physics, Cars, Astronomy, Quantum Physics, Computer Science, Neuroscience, Style & Design, Fitness, Mental Health, Reading, Contradiction, Life, Success, Philosophy, Genetics, Material Engineering
                                </p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                    <h5>SKILLS</h5>
                            </Col>
                        </Row>
                        <Row className="px-4">
                            <Col>
                                <Row className="skill-row-mobile " >
                                        <Col className="skill-title-mobile" xs={10}>
                                            <p className="skill-row-p">Planning</p>
                                        </Col>
                                        <Col></Col>
                                </Row>
                                <p className="percentaje mb-2">83%</p>

                                <Row className="skill-row-mobile">
                                        <Col  className="skill-title-mobile" xs={11}>
                                            <p className="skill-row-p">People</p>
                                        </Col>
                                        <Col ></Col>
                                </Row>
                                <p className="percentaje mb-2">92%</p>

                                <Row className="skill-row-mobile ">
                                        <Col  className="skill-title-mobile" xs={9}>
                                            <p className="skill-row-p">Delegating</p>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                    <p className="percentaje mb-2">80%</p>

                                    <Row className="skill-row-mobile">
                                        <Col  className="skill-title-mobile" xs={10}>
                                            <p className="skill-row-p">Resource Management</p>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                        <p className="percentaje mb-2">85%</p>

                                    <Row className="skill-row-mobile">
                                        <Col className="skill-title-mobile" xs={11}>
                                            <p className="skill-row-p">Objective Management</p>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                        <p className="percentaje mb-2">90%</p>

                            </Col>
                        </Row>


                    <p className="mt-4 mb-3">COVER LETTER</p>
                    <p className="cover-letter mb-2">
                        Hello my name is Maliek Davis. I`m a <span className="span-cv">Technical Project Manager</span> from Detroit, Michigan.
                    </p>
                    <p className="cover-letter mb-4">
                        10+ years of experience in a project management role on projects with international stakeholders, mainly in the automotive and technology sector. I find joy in working with colleagues of varying disciplines - from warehouse staff to directors of varying experience; working toward toward the same goal within our individual disciplines.
                    </p>
                    <p className="cover-letter mb-2">
                        If you`'`d like to learn about me, and my worth ethic feel free to explore my page. I developed it myself! 
                    </p>
                    <p className="cover-letter mb-2">
                        Thanks a lot for visiting.
                    </p>
                    <p className="cover-letter">
                        Warmest Regards,
                    </p>

                    <p className="mt-4 mb-3">SOCIAL PROFILES</p>    
                    <Row className="mb-3 mt-2">
                                <Col className='social-col-mobile justify-content-center gap-5'>
                                    <BsFacebook/>
                                    <BsInstagram/>
                                    <BsSnapchat/>
                                </Col>
                    </Row>

                    <p className="mt-4 mb-2">CONTACT</p>
                    <p className="cover-letter mb-1"> <span className="fw-bold">Email</span> Maliek.Davis@cosmicgemsreality.com</p>
                    <p className="fw-bold cover-letter ">Phone</p>
                    <p className="cover-letter">(248) 392-0942</p>   
                    <Col>
                    </Col>
                </Row>
            </div>
        </section>
            </div>
            }
        </div>












        // {/* <section className="">
        //     <div className="glance">
        //     {/* This Row shows my name and my role */}
        //     <Row className="pt-5">
        //         <h4 className="glance-h4">
        //             MALIEK DAVIS
        //         </h4>
        //         <p className="glance-p"> Project manager.</p>
        //     </Row>

        //     <Row className="py-3">
        //         <Col>
        //         </Col>
        //         <Col>
        //             <hr className="glance-hr"/>
        //         </Col>
        //         <Col>
        //         </Col>
        //     </Row>

            


        //     {/* This row shows the heading of the subsection */}
        //         <Row className="pt-5">
        //             <Col>
        //                 <p className="glance">Quick bytes about me.</p>
        //             </Col>
        //         </Row>

        //         {/* This is the row that will communicate my value to the visitors of the page */}
        //         <Row>
        //             <Col className="glance-bytes-left-col">
        //                 <Row className="mb-4">
        //                     <Col className="left-col-bytes" xl={2}>
        //                     <div className="bytes-div"><h5 className="bytes-col-label">PASSIONS</h5></div>
        //                     </Col>
        //                     <Col><p className="passion-long">Managing projects & Analyzing Systems</p>
        //                     <p className="passion-long">
        //                         Learning, Laughing, Family, Physics, Cars, Astronomy, Quantum Physics, Computer Science, Neuroscience, Style & Design, Fitness, Mental Health, Reading, Contradiction, Life, Success, Philosophy, Genetics, Material Engineering
        //                     </p>
                                
        //                     </Col>
        //                 </Row>
        //                 <Row className="mb-4">
        //                     <Col className="left-col-bytes" xl={2}>
        //                         <h5>SKILLS</h5>
        //                     </Col>
        //                     <Col>
        //                         <Row className="skill-row" xl={2}>
        //                             <Col  className="skill-col-back" xl={6}>
        //                                 <p className="skill-row-p">Planning</p>
                                        
        //                             </Col>
        //                             <Col className="percentaje" xl={3}>
        //                                 <p>83%</p>
        //                             </Col>
        //                         </Row>
        //                         <Row className="skill-row" xl={2}>
        //                             <Col  className="skill-col-back" xl={8}>
        //                                 <p className="skill-row-p">People</p>
        //                             </Col>
        //                             <Col  className="percentaje" xl={2}>
                                        
        //                             <p>92%</p>
        //                             </Col>
        //                         </Row>
        //                         <Row className="skill-row" xl={2}>
        //                             <Col  className="skill-col-back" xl={7}>
        //                                 <p className="skill-row-p">Delegating</p>
        //                             </Col>
        //                             <Col className="percentaje" xl={3} >
                                        
        //                             <p>80%</p>
        //                             </Col>
        //                         </Row>
        //                         <Row className="skill-row" xl={2}>
        //                             <Col  className="skill-col-back" xl={8}>
        //                                 <p className="skill-row-p">Resource Management</p>
        //                             </Col>
        //                             <Col className="percentaje" xl={2} >
        //                             <p>85%</p>
        //                             </Col>
        //                         </Row>
        //                         <Row className="skill-row" xl={2}>
        //                             <Col className="skill-col-back" xl={7}>
        //                                 <p className="skill-row-p">Objective Management</p>
        //                             </Col>
        //                             <Col className="percentaje" xl={2} >
        //                             <p>90%</p>
        //                             </Col>
        //                         </Row>
        //                     </Col>
        //                 </Row>
        //                 <Row className="mb-4">
        //                     <Col  className="left-col-bytes" xl={2}>
        //                     <div className="bytes-div"><h5 className="bytes-col-label">SOCIAL PROFILES</h5></div>
        //                     </Col>
        //                     <Col>
        //                     <Row className="social-row">
        //                         <Col className='social-col'>
        //                             <BsFacebook/>
        //                         </Col>
        //                         <Col className='social-col'>
        //                             <BsInstagram/>
        //                         </Col>
        //                         <Col className="social-col" >
        //                             <BsSnapchat/>
        //                         </Col>
        //                     </Row>
                                
        //                     </Col>
        //                 </Row>
        //                 <Row className=''>
        //                     <Col  className="left-col-bytes" xl={2}>
        //                     <div className="bytes-div"><h5 className="bytes-col-label">CONTACT</h5></div>
        //                     </Col>
        //                     <Col>
        //                         <p className="cover-letter">Maliek.Davis@cosmicgemsreality.com</p>
        //                     </Col>
        //                 </Row>
        //             </Col>

        //             {/* Right side of at-a-glance row */}
        //             <Col>
        //             <p className="cover-letter mb-2">
        //                 Hello my name is Maliek Davis. I'm a <span className="span-cv">Technical Project Manager</span> from Detroit, Michigan.
        //             </p>
        //             <p className="cover-letter mb-4">
        //                 10+ years of experience in a project management role on projects with international stakeholders, mainly in the automotive and technology sector. I find joy in working with colleagues of varying disciplines - from warehouse staff to directors of varying experience; working toward toward the same goal within our individual disciplines.
        //             </p>
        //             <p className="cover-letter mb-2">
        //                 If you'd like to learn about me, and my worth ethic feel free to explore my page. I developed it myself! 
        //             </p>
        //             <p className="cover-letter mb-2">
        //                 Thanks a lot for visiting.
        //             </p>
        //             <p className="cover-letter">
        //                 Warmest Regards,
        //             </p>
        //             </Col>
        //         </Row>
        //     </div>
        // </section> */}
    )
}