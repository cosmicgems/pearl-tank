import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import classes from './main-navigation.module.css'
import Logo from './logo'
import { useMediaQuery } from 'react-responsive';

function MainNavigation () {

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

    return (

        <div>
            {isMobile && 
            <div>
        <Navbar fixed="top" collapseOnSelect expand="" bg='' variant='dark' className='header-mobile' >
            <Container>
                <Navbar.Brand href='/'><Logo/></Navbar.Brand>
                <Navbar.Toggle id="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <p className='cosmic-nav-p-mobile'>COSMIC GEMS REALITY</p>
                        <Link className='link-mobile' href='/'> Home </Link>
                        <Link className='link-mobile' href='/our-services'> Services </Link>
                        {/* <Link className='link-mobile' href='/portfolio'> Portfolio </Link> */}
                        <Link className='link-mobile' href='/about'> About </Link>
                        <Link className='link-mobile' href='/contact'> Contact </Link>
                        {/* <Link className='link-mobile' href='/blog'> Blog </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>
            }
        </div>
        











        // <div className='allHeaderDiv '>
        // <header className='header'>
        // <div>
        //     <Link href="/">
            
        //             <Logo />
                
        //     </Link>
        // </div>
            
        //     <nav>
        //         <ul>
        //             <li><Link href="/">Home</Link></li>
        //             <li><Link href="/our-services">Services</Link></li>
        //             {/* <li><Link href="/posts">Portfolio</Link></li> */}
        //             <li><Link href="/about">About</Link></li>
        //             <li><Link href="/contact">Contact</Link></li>
        //             <li><Link href="/blog">Blog</Link></li>
        //         </ul>
        //     </nav>
        // </header>
        // </div>    


    )
}

export default MainNavigation;