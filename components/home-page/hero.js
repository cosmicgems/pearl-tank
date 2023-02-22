import Image from 'next/image'
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/esm/Col';
// import Row from 'react-bootstrap/esm/Row';
import classes from './hero.module.css'
import { useMediaQuery } from 'react-responsive';

function Hero(){

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

    return (
        <div>
            {isMobile &&
            <div className=''>
            <section className={classes.heroMobile}>
        <h1 className={classes.heroH1Mobile}>
            COSMIC GEMS REALITY
        </h1>
        <div className={classes.imageMobile}>
            <Image src="/images/site/cosmic-logo.png" alt="" width={300} height={200} />
        
        </div>
        <h2>
            Digital Business & Branding Gems That Inspire
        </h2>
        <div className=" d-grid  py-4  ">
            
                <Button className='mb-3 btn-lg button-mobile' variant='' ><Link className={classes.link} href='/web-development-consultation'>Web Development Insight</Link></Button>

                <Button className='mb-3 btn-lg button-mobile' variant=''  ><Link className={classes.link} href='/web-development-consultation'>Brand & Design Insight</Link></Button>
        </div>
            
        
        
    </section>
            </div>
            }
        </div>
    ) 



    // <section className={classes.hero}>
    //     <div className={classes.image}>
    //         <Image src="/images/site/cosmic-logo.png" alt="" width={300} height={200} />
        
    //     </div>
    //     <h1>
    //         COSMIC GEMS REALITY
    //     </h1>
    //     <h2>
    //         Digital Business & Branding Gems That Inspire
    //     </h2>
    //     <div className=" hero-btn-div  py-4 px-5">
            
    //             <Button className='me-5' variant='outline-dark' ><Link className={classes.link} href='/web-development-consultation'>Web Development Consultation</Link></Button>

    //             <Button variant='outline-dark' ><Link className={classes.link} href='/web-development-consultation'>Brand & Design Insight</Link></Button>
    //     </div>
            
        
        
    // </section>


}

export default Hero;