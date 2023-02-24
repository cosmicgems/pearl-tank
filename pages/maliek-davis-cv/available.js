import { Button } from "react-bootstrap";
import ContactForm from "./contact-form";
import { useMediaQuery } from "react-responsive";

export default function Available(){

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
            {isMobile &&  <div className="available px-3 py-5">
                <h1 className="available-mobile-h1 mb-4">
                    I`&#39;`m currently available for a new challenging project.
                </h1>
                <ContactForm />
            </div>}
        </div>







        // <section>
        //     <div className="available">
        //         <h1>
        //             I'm currently available for a new challenging project. "Today I got time!" -The Internet
        //         </h1>
        //         <ContactForm />
        //         <div className="d-grid button-box">
        //             <Button variant='outline-danger'>
        //                 Let's Work!
        //             </Button>
        //         </div>
        //     </div>
        // </section>


    )
}