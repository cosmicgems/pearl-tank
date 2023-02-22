import React from 'react';
import  { useState, useEffect } from 'react';
import Notification from '../ui/notification';
import { useMediaQuery } from 'react-responsive';

async function sendContactData(contactDetails) {

    
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
    }

    
}

function ContactForm () {

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
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
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



    return (

        <div>
            {isMobile && 
                <section className='contact-mobile pt-0 p-0 rounded-top'>
        <div className='py-4 top-form-mobile rounded-top'>
            <h1 className='denseServiceH1-mobile'>
                How can I help you?
            </h1>
        </div>
            
            <form onSubmit={sendMessageHandler} className='form px-4 py-4'>
            <div className='controls'>
                <div className='control'>
                    <label htmlFor='email'>
                        Your Email
                    </label>
                    <input type='email' id='email' required value={enteredEmail} onChange={changeEmail} />

                </div>
                <div className='control'>
                    <label htmlFor='name'>
                        Your Name
                    </label>
                    <input type='text' id='name' required value={enteredName} onChange={changeName} />

                </div>
            </div>
            <div className='control'>
                <label htmlFor="message">Your Message</label>
                <textarea 
                id='message' 
                rows='5' 
                value={enteredMessage} 
                required
                onChange={changeMessage}>
                </textarea>
            </div>

                <div className='d-grid actions '>
                <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification 
            status={notification.status} 
            title={notification.title} 
            message={notification.message} 
            />}
        </section>
            }



            {isLaptop && 
                        <section className='contact pt-0 p-0 rounded-top'>
        <div className='pb-2 top-form rounded-top'>
            <h1 className=''>
                How can I help you?
            </h1>
        </div>
            
            <form onSubmit={sendMessageHandler} className='form px-5 py-4'>
            <div className='controls'>
                <div className='control'>
                    <label htmlFor='email'>
                        Your Email
                    </label>
                    <input type='email' id='email' required value={enteredEmail} onChange={changeEmail} />

                </div>
                <div className='control'>
                    <label htmlFor='name'>
                        Your Name
                    </label>
                    <input type='text' id='name' required value={enteredName} onChange={changeName} />

                </div>
            </div>
            <div className='control'>
                <label htmlFor="message">Your Message</label>
                <textarea 
                id='message' 
                rows='5' 
                value={enteredMessage} 
                required
                onChange={changeMessage}>
                </textarea>
            </div>

                <div className='actions '>
                <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification 
            status={notification.status} 
            title={notification.title} 
            message={notification.message} 
            />}
        </section>
            }
        </div>

    )
}

export default ContactForm;