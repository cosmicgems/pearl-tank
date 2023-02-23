import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive"

export default function FeaturedServices(){

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
      <div className="m-0 p-0">
        {isMobile &&
        
        <div className="featurette-section-mobile ">
          <div className="featured-service-squeeze-mobile">
                      <div className="row featurette">
                <div className="col-md-7">
                  <div className="py-5">
                    <h2 className="featurette-heading">Landing Pages. <span className="text-muted-mobile">Beautiful. Creative. Purposeful.</span></h2>
                    <p className="lead pb-4  featurette-lead-mobile">Build it and they will come. Well, kind of. With the help of our beautifully designed landing pages, you`re sure to see a surge of traffic.</p>
                    <div className="d-grid px-2">
                      <Button href="/web-development-consultation" className="btn-lg" variant='light'>Landing Pages</Button>
                    </div>
                    
                  </div>
                </div>
                <div className="col-md-5">
                  <div>
                    <Image className="landing-pages" width={500} height={500} src='/images/site/landing-pages.png' alt="landing_page_examples_on_floating_background" />
                  </div>

                </div>
              </div>

              <hr className="featurette-divider" />

              <div className="row featurette">
                <div className="col-md-7 order-md-2">
                <div className="py-5"><h2 className="featurette-heading">Digital Resumes. <span className="text-muted-mobile">Market yourself... To the WORLD!</span></h2>
                  <p className="lead pb-4 featurette-lead-mobile">You&#39;ve done all of that incredible work of learning and mastering your skill-set, why not put those accomplishments on display for the world to see and get results. </p>
                  <div className="d-grid px-2">
                    <Button href="/web-development-consultation" className="btn-lg" variant='light'>Digital Resumes</Button>
                  </div>
                  
                  </div>
                  
                </div>
                <div className="col-md-5 order-md-1 pb-5 mb-4">
                  <div>
                    <Image className="landing-pages" width={500} height={500} src='/images/site/landing-pages.png' alt="landing_page_examples_on_floating_background" />
                  </div>

                </div>
              </div>
                  </div>
        </div>
          
        
        }
      </div>


    //     <div className="featured-service-squeeze">
    //         <div className="row featurette">
    //   <div className="col-md-7">
    //     <div className="py-5">
    //       <h2 className="featurette-heading">Landing Pages. <span className="text-muted">Beautiful. Creative. Purposeful.</span></h2>
    //       <p className="lead pb-4">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
    //       <Link className="" href='/'><Button variant='outline-dark btn-lg '>Landing Pages</Button></Link>
    //     </div>
    //   </div>
    //   <div className="col-md-5">
    //     <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

    //   </div>
    // </div>

    // <hr className="featurette-divider" />

    // <div className="row featurette">
    //   <div className="col-md-7 order-md-2">
    //   <div className="py-5"><h2 className="featurette-heading">Digital Resumes. <span className="text-muted">Market yourself... To the WORLD!</span></h2>
    //     <p className="lead pb-4">You've done all of that incredible work of learning and mastering your skill-set, why not put those accomplishments on display for the world to see and get results. </p>
    //     <Link className="" href='/'><Button variant='outline-dark btn-lg '>Digital Resumes</Button></Link></div>
        
    //   </div>
    //   <div className="col-md-5 order-md-1">
    //     <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

    //   </div>
    // </div>

    // <hr className="featurette-divider" />

    // <div className="row featurette">
    //   <div className="col-md-7">
    //   <div className="py-5"><h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
    //     <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p></div>
        
    //   </div>
    //   <div className="col-md-5">
    //     <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

    //   </div>
    // </div>

    // <hr className="featurette-divider"/>
    //     </div>
        
    )
}