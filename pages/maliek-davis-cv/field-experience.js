import { Col, Row } from "react-bootstrap";
import { BsCalendar } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";

export default function FieldExpert(){

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
        <section>
            <div className="field-expert">
                <Row className="mb-3" >
                    <Col>
                        <div>
                            <p>
                                FIELD EXPERIENCE
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs={5}>
                        <p className="fw-bold">Triple Peaks</p>
                    </Col>
                    <Col xs={7}>
                        <Row className="mb-2">
                            <Col xs={2} ></Col>
                            <Col xs={1} className='work-date'>
                                <BsCalendar />
                            </Col>
                            <Col>
                                <p className="work-date">
                                    January 2021
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="pb-4">
                    <p className="mb-2">Triple Peaks is a street-wear clothing brand founded in Detroit, Michigan.</p>
                    <ul className="skills-bullets-mobile pl-5">
                        <li>Facilitated initial business start-up activities</li>
                        <li>Created order fulfillment process</li>
                        <li>Sourced and built cross-functional team</li>
                        <li>Facilitated product development activities and process development</li>
                    </ul>
                </Row>

                <Row className="">
                    <Col xs={4}>
                        <p className="fw-bold">DAQRI</p>
                    </Col>
                    <Col xs={8}>
                        <Row className="mb-2">
                            <Col xs={2} ></Col>
                            <Col xs={1} className='work-date'>
                                <BsCalendar />
                            </Col>
                            <Col>
                                <p className="work-date">
                                    Feb 18' - Mar 19'
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <p className="mb-2">DAQRI was an American augmented reality company headquarted in Los Angelos, CA. The company's primary product was an augmented reality wearable technology product, DAQRI Smart Glasses, designed for the industrial industry.</p>
                    <ul className="skills-bullets-mobile pl-5">
                        <li> Developed and implemented a change management process resulting in increased change propagation</li>
                        <li>Led cross-functional team of 9 through design to launch of over 25 software product features</li>
                        <li>Led application design sessions with team on 5+ projects to develop functional and technical requirements</li>
                    </ul>
                </Row>

                <Row className="">
                    <Col xs={4}>
                        <p className="fw-bold">TENA</p>
                    </Col>
                    <Col xs={8}>
                        <Row className="mb-2">
                            <Col xs={2} ></Col>
                            <Col xs={1} className='work-date'>
                                <BsCalendar />
                            </Col>
                            <Col>
                                <p className="work-date">
                                    Aug 12' - Jan 18'
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <p className="mb-2">DAQRI was an American augmented reality company headquarted in Los Angelos, CA. The company's primary product was an augmented reality wearable technology product, DAQRI Smart Glasses, designed for the industrial industry.</p>
                    <ul className="skills-bullets-mobile pl-5">
                        <li>Developed engineering change process</li>
                        <li>Championed project throughout lifecycle</li>
                        <li>Created inventory system resulting in increased traceability</li>
                        <li>Captured project revenue loss through engineering changes increasing profitability</li>
                        <li>Collaborated with stakeholders to monitor progress of APQP with 92% on-time completion rate resulting in 20% less timing conflicts</li>
                        <li>Responsible for ECR/ECO/ECN submits</li>
                        <li>Leveraged advanced excel/pivot tables to organize project data</li>
                        <li>Familiar with GD&T to ensure requirements were met.</li>
                    </ul>
                </Row>

            </div>
        </section>
    )
}