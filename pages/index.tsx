import { Fragment } from "react"
import Head from "next/head";
import FeaturedServices from '../components/home-page/featured-services'
import Hero from '../components/home-page/hero';
import { useMediaQuery } from "react-responsive";

function HomePage(props: { posts: any; }) {
  const isMobile = useMediaQuery({
      query: '(max-width: 431px)'
  })

  const isTablet = useMediaQuery({
      query: '(min-width: 767px)'
  })

  const isLaptop = useMediaQuery({
      query: '(min-width: 1200px)'
  })

  const isDesktop = useMediaQuery({
      query: '(min-width: 1920px)'
  })


  return (
    <Fragment>
    {isMobile  && 
    <div className="mb-0 pb-0 pt-5">
      <div className="mb-0 pb-0">
              <video autoPlay muted loop className="video" playsInline={true} >
                  <source src="/images/site/fluid.mp4" />
              </video>
                  <div className="cosmic-welcome-clear-mobile">
                      <div className=" cosmic-welcome-div-mobile ">
                          <Hero />
                      </div>
                  </div>
                  

              </div>
    </div>
    }
    {isTablet  && !isLaptop &&
    <div className="mb-0 pb-0 pt-5">
      <div className="mb-0 pb-0">
              <video autoPlay muted loop className="video" playsInline={true} >
                  <source src="/images/site/fluid.mp4" />
              </video>
                  <div className="cosmic-welcome-clear-mobile">
                      <div className=" cosmic-welcome-div-mobile ">
                          <Hero />
                      </div>
                  </div>
                  

              </div>
    </div>
    }
    {isLaptop  && 
    <div className="mb-0 pb-0 ">
      <div className="mb-0 pb-0">
              <video autoPlay muted loop className="video" playsInline={true} >
                  <source src="/images/site/fluid.mp4" />
              </video>
                  <div className="cosmic-welcome-clear-mobile">
                      <div className=" cosmic-welcome-div">
                          <Hero />
                      </div>
                  </div>
                  

              </div>
    </div>
    }
                
      
      <FeaturedServices />
      
    </Fragment>
      
      
    
  );
};


// export function getStaticProps() {
//   const featuredPosts = getFeaturedPosts();

//   return {
//     props: {
//       posts: featuredPosts
//     },
//     revalidate: 360000
//   };
// }


export default HomePage;
