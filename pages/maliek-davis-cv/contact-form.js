import { Button } from "react-bootstrap";
import { Input } from "postcss";
import { useState, useEffect } from "react";
import { Form, Label, FloatingLabel, FormControl } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Notification from '../../components/ui/notification';

export default function ContactForm(){    
const [enteredEmail, setEnteredEmail] = useState('');
const [enteredName, setEnteredName] = useState('');
const [enteredPhone, setEnteredPhone] = useState('');
const [enteredCompany, setEnteredCompany] = useState('');
const [enteredMessage, setEnteredMessage] = useState('');
const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success''error',
const [requestError, setRequestError] = useState();

useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
        const timer = setTimeout(() => {
            setRequestStatus(null);
            setRequestError(null);
        }, 3000);

        return () => clearTimeout(timer);
    }
}, [requestStatus])

function changeEmail(event) {
    setEnteredEmail(event.target.value);
}

function changeName(event) {
    setEnteredName(event.target.value);
}

function changeMessage(event) {
    setEnteredMessage(event.target.value);
}
function changeCompany(event) {
    setEnteredCompany(event.target.value);
}
function changePhone(event) {
    setEnteredPhone(event.target.value);
}


async function sendMessageHandler(event) {
    event.preventDefault();

    //optional: add client-side validation

    setRequestStatus('pending');

    try {
        await sendContactData({
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage,
        });
    setRequestStatus('success');
    setEnteredMessage('');
    setEnteredEmail('');
    setEnteredName('');
    } catch (error) {
        setRequestError(error);
        setRequestStatus('error');
    }
}

let notification;

if (requestStatus === 'pending') {
    notification = {
        status: 'pending',
        title: 'Sending message....',
        message: 'Your message is on the way!'
    };
}

if (requestStatus === 'success') {
    notification = {
        status: 'success',
        title: 'Success!',
        message: 'Message sent successfully!'
    };
}

if (requestStatus === 'error') {
    notification = {
        status: 'error',
        title: 'Error!',
        message: requestError,
    }
}

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
            {isMobile && <div className="px-3 ">
                <Form
                onSubmit={sendMessageHandler}
                controlId="floatingInput"
                label="Email address"
                className="mb-3">
                    <FloatingLabel label='Name' className='floating-label-form mb-3' >
                        <FormControl type="text" placeholder="Name" />
                    </FloatingLabel>
                    <FloatingLabel label='Phone'  className='floating-label-form mb-3'>
                        <FormControl type="text" placeholder="Phone" required value={enteredPhone} onChange={changePhone} />
                    </FloatingLabel>
                    <FloatingLabel label='Email'  className='floating-label-form mb-3'>
                        <FormControl type="email" placeholder="email"  required value={enteredEmail} onChange={changeEmail} />
                    </FloatingLabel>
                    <FloatingLabel label='Leave message here' className='floating-label-form mb-3' >
                        <FormControl style={{height: '30vh'}} as="textarea" placeholder="Comments" required value={enteredCompany} onChange={changeCompany} />
                    </FloatingLabel>
                
                    
                    
        <div className=" d-grid  py-4 px-2 ">
            
            <Button href='/web-development-consultation' className='mb-3 btn-lg p-3'  variant='light' >Let&#39;s Talk!</Button>
    </div>
                </Form>
            { notification && <Notification 
            status={notification.status} 
            title={notification.title} 
            message={notification.message} 
            />}
            </div> }
        </div>





        // <section className="contact-form">
        //     <div className="px-5 ">
        //         <Form
        // controlId="floatingInput"
        // label="Email address"
        // className="mb-3">
        //             <FloatingLabel className='floating-label-form mb-3' >
        //                 <FormControl type="text" placeholder="Name" />
        //             </FloatingLabel>
        //             <FloatingLabel  className='floating-label-form mb-3'>
        //                 <FormControl type="text" placeholder="Phone" />
        //             </FloatingLabel>
        //             <FloatingLabel  className='floating-label-form mb-3'>
        //                 <FormControl type="email" placeholder="maliek.davis@cosmicgemsreality.com" />
        //             </FloatingLabel>
        //         </Form>
        //     </div>
        // </section>


    )
}