import Image from 'next/image'
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function Hero(){

    const isMobile = useMediaQuery({
        query: '(max-width: 431px)'
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
        <section className='heroMobile '>
    <h1 className="heroH1Mobile py-3">
        COSMIC GEMS REALITY
    </h1>
    <div className='imageMobile px-5'>
        <Image src="/images/site/cosmic-logo.png" alt="" width={150} height={150} />
    
    </div>
    <h2>
        Digital Business & Branding Gems That Inspire
    </h2>
    <div className=" d-grid  py-4 px-2 ">
        
            <Button href='/web-development-consultation' className='mb-3 btn-lg p-3'  variant='light' >WEB CONSULTATION</Button>
    </div>
        
    
    
</section>
        </div>
        }
            {isTablet && !isLaptop &&
            <div className=''>
            <section className='heroTablet '>
        <h1 className="heroH1Tablet py-3">
            COSMIC GEMS REALITY
        </h1>
        <div className='imageTablet px-5'>
            <Image src="/images/site/cosmic-logo.png" alt="" width={150} height={150} />
        
        </div>
        <h2>
            Digital Business & Branding Gems That Inspire
        </h2>
        <div className=" d-grid  py-4 px-2 ">
            
                <Button href='/web-development-consultation' className='mb-3 btn-lg p-3'  variant='light' >WEB CONSULTATION</Button>
        </div>
            
        
        
    </section>
            </div>
            }
            {isLaptop &&
            <div className=''>
            <section className='hero '>
        <h1 className="heroH1Mobile py-3">
            COSMIC GEMS REALITY
        </h1>
        <div className='image '>
            <Image src="/images/site/cosmic-logo.png" alt="" width={150} height={150} />
        
        </div>
        <h2>
            Digital Business & Branding Gems That Inspire
        </h2>
        <div className=" d-grid  py-4" style={{paddingInline: '21vw'}}>
                <Button href='/web-development-consultation' className='mb-3 btn-lg p-3 hero-btn-laptop'  variant='light' > WEB CONSULTATION </Button>
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