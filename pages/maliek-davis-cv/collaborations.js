import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function Collaborations(){
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
            {isMobile && <div className="collaborations-mobile py-5">
            <Row className="mb-3">
                <Col>
                    <h1 className="collaborations-h1-mobile">COLLABORATIONS</h1>
                    <p className="collaborations-p-mobile">WE'VE DONE WORK TOGETHER.</p>
                </Col>
            </Row>
                    <Row className="pl-5" >
                        <Col>
                        <Row xs={3}>
                            <Col >
                            <div className="pt-3">
                                <Image width={150} height={100} alt="no" src='/images/site/sumitomo.svg' />
                            </div>
                                
                            </Col>
                            <Col>
                                <Image width={150} height={100} alt="no" src='/images/site/fca.svg' />
                            </Col>
                            <Col>
                                <Image width={150} height={100} alt="no" src='/images/site/general-motors.svg' />
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