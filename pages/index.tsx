import { Fragment } from "react"
import Head from "next/head";
import FeaturedServices from '../components/home-page/featured-services'
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function HomePage(props: { posts: any; }) {
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


  return (
    <Fragment>
      <Head>
        <title>Cosmic Gems Reality</title>
        <meta 
        name='description' 
        content="The greatest ever" 
        />
      </Head>
      {isMobile && 
      <div className="mb-0 pb-0">
        <div className="mb-0 pb-0">
                <video autoPlay muted loop className="video" >
                    <source src="/images/site/fluid.mp4" />
                </video>
                    <div className="cosmic-welcome-clear-mobile ">
                        <div className=" cosmic-welcome-div-mobile pt-4">
                            <Hero />
                        </div>
                    </div>
                    

                </div>
      </div>
      }
                
      
      <FeaturedServices />
      {/* <FeaturedPosts posts={props.posts} /> */}
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
