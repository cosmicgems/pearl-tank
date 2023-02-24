import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function Stripes(){

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

    return(
        
      <div>
        {isMobile && <div className="stripes-mobile ">
        <Row>
          <Col>
                        <h1 className="stripes-mobile-h1">
                            EXPERTISE
                        </h1>
          </Col>
        </Row>
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5 px-4">
      <div class="col">
        <div class=" overflow-hidden  rounded-4 shadow-lg" >
        <div className="bg-card">
          <Row className="pt-5">
                  <Col></Col>
                    <Col>
                      <Image className="expertise-pic" width={100} height={200} src='/images/site/planning.png' alt='project_management_icon' />
                    </Col>
                    <Col></Col>
                  </Row>
                    <div class="d-flex flex-column h-100 px-5 pb-4 text-white text-shadow-1">
                      <h3 class="pt-5  mb-4 display-6 lh-1 fw-bold superpower-h3-mobile">Project Management</h3>
                      <ul className="stripes-bullets-mobile">
                        <li>Effective Communication</li>
                        <li>Negotiation</li>
                        <li>Time Management</li>
                        <li>Leadership</li>
                        <li>Technical Expertise</li>
                        <li>Risk Management</li>
                        <li>Critical Thinking & Problem Solving</li>
                      </ul>
                    </div>
        </div>
        
        </div>
      </div>

      <div class="col">
        <div class="  overflow-hidden rounded-4 shadow-lg">
        <div className="bg-card">
          <Row className="pt-5">
        <Col></Col>
          <Col>
            <Image className="expertise-pic" width={100} height={200} src='/images/site/hands.png' alt='project_management_icon' />
          </Col>
          <Col></Col>
        </Row>
          
          <div class="d-flex flex-column h-100  px-5 pb-4 text-white text-shadow-1">
            <h3 class="pt-5 mb-4 display-6 lh-1 fw-bold superpower-h3-mobile">Change Management</h3>
            <ul className="stripes-bullets-mobile">
              <li>Communication</li>
              <li>Active Listening</li>
              <li>Research</li>
              <li>Strategic Thinking</li>
              <li>Leadership</li>
            </ul>
            
          </div>
        </div>
        
        </div>
      </div>

      <div class="col">
        <div class=" overflow-hidden rounded-4 shadow-lg">
        <div className="bg-card">
          <Row className="pt-5">
                  <Col></Col>
                    <Col>
                      <Image className="expertise-pic" width={100} height={200} src='/images/site/thinking.png' alt='project_management_icon' />
                    </Col>
                    <Col></Col>
                  </Row>
                    <div class="d-flex flex-column h-100 px-5 pb-4 text-shadow-1">
                      <h3 class="pt-5 mb-4 display-6 lh-1 fw-bold superpower-h3-mobile">Relationship Management</h3>
                      <ul className="stripes-bullets-mobile">
                        <li>Industry Awareness</li>
                        <li>Adoptability & Resourcefulness</li>
                        <li>Ability to develop and maintain strong and successful working relationships</li>
                        <li>Numeracy Skills</li>
                        <li>Communication</li>
                      </ul>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
        </div>
        
        </div>
      </div>
</div>
            </div>}
      </div>








//         <section className="">
//             <div className="stripes">
//                 <Row>
//                     <Col>
//                         <h1 className="stripes-h1">
//                             My Super Powers!
//                         </h1>
//                     </Col>
//                 </Row>
//                 <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
//       <div class="col">
//         <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
//           <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
//           <Image width={100} height={200} src='/images/site/planning.png' alt='project_management_icon' />
//             <h3 class="pt-5  mb-4 display-6 lh-1 fw-bold superpower-h3">Project Management</h3>
//             <ul className="stripes-bullets pb-5">
//               <li>Effective Communication</li>
//               <li>Negotiation</li>
//               <li>Time Management</li>
//               <li>Leadership</li>
//               <li>Technical Expertise</li>
//               <li>Risk Management</li>
//               <li>Critical Thinking & Problem Solving</li>
//             </ul>
//             <ul class="d-flex list-unstyled mt-auto">
//               <li class="d-flex align-items-center me-3">
//                 <svg class="bi me-2" width="1em" height="1em"></svg>
//                 <small>Earth</small>
//               </li>
//               <li class="d-flex align-items-center">
//                 <svg class="bi me-2" width="1em" height="1em"></svg>
//                 <small>3d</small>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div class="col">
//         <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
//           <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
//           <Image width={100} height={200} src='/images/site/hands.png' alt='project_management_icon' />
//             <h3 class="pt-5 mb-4 display-6 lh-1 fw-bold superpower-h3">Change Management</h3>
//             <ul className="stripes-bullets">
//               <li>Communication</li>
//               <li>Active Listening</li>
//               <li>Research</li>
//               <li>Strategic Thinking</li>
//               <li>Leadership</li>
//             </ul>
//             <ul class="d-flex list-unstyled mt-auto">
//               <li class="me-auto">
//                 <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
//               </li>
//               <li class="d-flex align-items-center me-3">
//                 <svg class="bi me-2" width="1em" height="1em"></svg>
//                 <small>Pakistan</small>
//               </li>
//               <li class="d-flex align-items-center">
//                 <svg class="bi me-2" width="1em" height="1em"></svg>
//                 <small>4d</small>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div class="col">
//         <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg">
//           <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
//           <Image width={100} height={200} src='/images/site/thinking.png' alt='project_management_icon' />
//             <h3 class="pt-5 mb-4 display-6 lh-1 fw-bold superpower-h3">Relationship Management</h3>
//             <ul className="stripes-bullets">
//               <li>Industry Awareness</li>
//               <li>Adoptability & Resourcefulness</li>
//               <li>Ability to develop and maintain strong and successful working relationships</li>
//               <li>Numeracy Skills</li>
//               <li>Communication</li>
//             </ul>
//             <ul>
//               <li></li>
//               <li></li>
//               <li></li>
//             </ul>
//             <ul class="d-flex list-unstyled mt-auto">
//               <li class="me-auto">
//                 <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
//               </li>
//               <li class="d-flex align-items-center me-3">
//                 <svg class="bi me-2" width="1em" height="1em"></svg>
//                 <small>California</small>
//               </li>
//               <li class="d-flex align-items-center">
//                 <svg class="bi me-2" width="1em" height="1em"></svg>
//                 <small>5d</small>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
// </div>
//             </div>
//         </section>
    )
}