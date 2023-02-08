import { Fragment } from "react"
import Head from "next/head";

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage(props: { posts: any; }) {

  return (
    <Fragment>
      <Head>
        <title>PearlBox</title>
        <meta 
        name='description' 
        content="The greatest ever" 
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
      
      
    
  );
};


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 360000
  };
}


export default HomePage;
