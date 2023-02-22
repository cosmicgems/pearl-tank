import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function Skills(){
    const isMobile = useMediaQuery({
        query: '(max-width: 3400px)'
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
            {isMobile && <div className="skills-mobile py-5">
            <Row className="mb-3">
                <Col>
                    <h1 className="skills-h1-mobile">SKILLS</h1>
                    <p className="skills-p-mobile">HARD SKILLS</p>
                </Col>
            </Row>
                    <Row className="px-3" >
                        <Col className="">
                        <Row xs={3}>
                            <Col >
                                <Image width={100} height={100} alt="no" src='/images/site/html-1.svg' />
                            
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/css-3.svg' />
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/javascript-1.svg' />
                            </Col>
                        </Row>
                            
                        </Col>
                    </Row>
                    <Row className=" py-4 px-3" >
                        <Col>
                        <Row xs={3}>
                            <Col >
                                <Image width={100} height={100} alt="no" src='/images/site/next-js.svg' />
                         
                                
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/react-2.svg' />
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/python-4.svg' />
                            </Col>
                        </Row>
                            
                        </Col>
                    </Row>
                    <Row className="px-3" >
                        <Col>
                        <Row xs={3}>
                            <Col >
                                <Image width={100} height={100} alt="no" src='/images/site/tailwind-css-2.svg' />
                         
                                
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/npm-square-red-1.svg' />
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/nodejs-1.svg' />
                            </Col>
                        </Row>
                    <Row className="pl-5 py-4 px-3" >
                        <Col>
                        <Row xs={3}>
                            <Col >
                                <Image width={100} height={100} alt="no" src='/images/site/redux.svg' />
                         
                                
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/mongodb-icon-1.svg' />
                            </Col>
                            <Col>
                                <Image width={100} height={100} alt="no" src='/images/site/github-icon.svg' />
                            </Col>
                        </Row>
                    <Row className="pl-5 py-4 px-3" >
                        <Col>
                        <Row xs={3}>
                            <Col></Col>
                            <Col >
                                <Image width={100} height={100} alt="no" src='/images/site/eslint-1.svg' />
                            </Col>
                            <Col></Col>
                        </Row>
                            
                        </Col>
                    </Row>
                            
                        </Col>
                    </Row>
                            
                        </Col>
                    </Row>
            </div> }
        </div>









        // <section className="">
        //     <div className="collaborations pt-5">
        //     <Row className="py-5">
        //         <Col>
        //             <h1 className="collaborations-h1">COLLABORATIONS</h1>
        //             <p className="collaborations-p">WE'VE DONE WORK TOGETHER.</p>
        //         </Col>
        //     </Row>
        //             <Row className="" xl={3}>
        //                 <Col xl={3}>
                         
                            
        //                 </Col>
        //                 <Col xl={6}>
        //                 <Row xl={3}>
        //                     <Col >
        //                     <div className="p-3">
        //                         <Image className="sumi " width={150} height={100} alt="no" src='/images/site/sumitomo.svg' />
        //                     </div>
                                
        //                     </Col>
        //                     <Col>
        //                         <Image width={150} height={100} alt="no" src='/images/site/fca.svg' />
        //                     </Col>
        //                     <Col>
        //                         <Image width={150} height={100} alt="no" src='/images/site/general-motors.svg' />
        //                     </Col>
        //                 </Row>
                            
        //                 </Col>
        //                 <Col>
        //                     <div>
                                
        //                     </div>
                            
        //                 </Col> 
        //             </Row>
        //     </div>
        // </section>
    )
}