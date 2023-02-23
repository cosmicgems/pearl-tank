import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useMediaQuery } from "react-responsive"

export default function Header(){

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

      <div className="">
        {isMobile && <div className="mt-3 pt-5">
        <Navbar className="" collapseOnSelect expand="" variant='dark'  bg='danger' >
          <Container>
            <Navbar.Brand>Maliek Davis</Navbar.Brand>
            <Navbar.Toggle id="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
                <p>Intelligent. Coachable. Aware. </p>
                <Nav.Link> Welcome </Nav.Link>
                <Nav.Link> About </Nav.Link>
                <Nav.Link> Experience </Nav.Link>
                <Nav.Link> Contact </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            
          </Container>
        </Navbar>
        
      </div>}
      </div>

      




  //       <section className="">
  //           <div className="cv-header">
  //           <div class="container">
  //   <header class="d-flex justify-content-center py-3">
  //     <ul class="nav nav-pills ">
  //       <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">WELCOME</a></li>
  //       <li class="nav-item"><a href="#" class="nav-link">MY STORY</a></li>
  //       <li class="nav-item"><a href="#" class="nav-link">IN THE FIELD</a></li>
  //       <li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li>
  //     </ul>
  //   </header>
  // </div>
  //           </div>
  //       </section>
    )
}