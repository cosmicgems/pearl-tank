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
        <Navbar fixed="top" collapseOnSelect expand=""  variant='dark' className='header-mobile' >
            <Container>
                <Navbar.Brand href='/'><Logo/></Navbar.Brand>
                <Navbar.Toggle id="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <p className='cosmic-nav-p-mobile'>COSMIC GEMS REALITY</p>
                        <Nav.Link className='link-mobile' eventKey='1' href='/'> Home </Nav.Link>
                        <Nav.Link className='link-mobile' eventKey='2' href='/our-services'> Services </Nav.Link>
                        {/* <Link className='link-mobile' eventKey='3' href='/portfolio'> Portfolio </Nav.Link> */}
                        <Nav.Link className='link-mobile' eventKey='4' href='/about'> About </Nav.Link>
                        <Nav.Link className='link-mobile' eventKey='5' href='/contact'> Contact </Nav.Link>
                        {/* <Nav.Link className='link-mobile' eventKey='6' href='/blog'> Blog </Nav.Link> */}
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