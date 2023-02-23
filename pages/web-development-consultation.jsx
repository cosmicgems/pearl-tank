/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import  NotificationConsultation from '../components/ui/notification'
import {Fragment, useState, useEffect}  from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {Row, Col} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import classes from './web-development-consultation.module.css'



async function sendWebFormData(webClientConsultationData) {

    
  const response = await fetch('/api/web-consultation', {
      method: 'POST',
      body: JSON.stringify(webClientConsultationData),
      headers: {
          'Content-Type': 'application/json',
      },
  });

  const data = await response.json();

  if(!response.ok) {
      throw new Error(data.message || 'Something went wrong!')
  }

  
}


function WDCPage () {

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
  

  const [fName, setFName]= useState('');
  const [lName, setLName]= useState('');
  const [email, setEmail]= useState('');
  const [phone, setPhone]= useState('');
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cPhone, setCPhone] = useState('');
  const [cAddress, setCAddress] = useState('');
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [q6, setQ6] = useState('');
  const [q7, setQ7] = useState('');
  const [q8, setQ8] = useState('');
  const [q9, setQ9] = useState('');
  const [q11, setQ11] = useState('');  
  const [q12, setQ12] = useState('');
  const [q13, setQ13] = useState('');
  const [q14, setQ14] = useState('');
  const [q15, setQ15] = useState('');
  const [q16, setQ16] = useState('');
  const [q17, setQ17] = useState('');
  const [q18, setQ18] = useState('');
  const [q19, setQ19] = useState('');
  const [q10, setQ10] = useState('');
  const [q20, setQ20] = useState('');
  const [q21, setQ21] = useState('');
  const [q22, setQ22] = useState('');
  const [q23, setQ23] = useState('');
  const [q24, setQ24] = useState('');
  const [q25, setQ25] = useState('');
  const [q26, setQ26] = useState('');
  const [q27, setQ27] = useState('');
  const [q28, setQ28] = useState('');
  const [q29, setQ29] = useState('');
  const [q30, setQ30] = useState('');
  const [q31, setQ31] = useState('');
  const [q32, setQ32] = useState('');
  const [q33, setQ33] = useState('');
  const [q34, setQ34] = useState('');
  const [q35, setQ35] = useState('');
  const [q36, setQ36] = useState('');
  const [q37, setQ37] = useState('');
  const [q38, setQ38] = useState('');
  const [q39, setQ39] = useState('');
  const [q40, setQ40] = useState('');
  const [q41, setQ41] = useState('');
  const [q42, setQ42] = useState('');
  const [q43, setQ43] = useState('');
  const [q44, setQ44] = useState('');
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


const fNameChangeHandler = (event) =>{
    setFName(event.target.value);
}
const lNameChangeHandler = (event) =>{
    setLName(event.target.value);
}
const phoneChangeHandler = (event) =>{
    setPhone(event.target.value);
}
const emailChangeHandler = (event) =>{
    setEmail(event.target.value);
}
const cNameChangeHandler = (event) =>{
    setCName(event.target.value);
}
const cEmailChangeHandler = (event) =>{
    setCEmail(event.target.value);
}
const cAddressChangeHandler = (event) =>{
    setCAddress(event.target.value);
}
const cPhoneChangeHandler = (event) =>{
    setCPhone(event.target.value);
}
const cq1 = (event) =>{
    setQ1(event.target.value);
}
const cq2 = (event) =>{
    setQ2(event.target.value);
}
const cq3 = (event) =>{
    setQ3(event.target.value);
}
const cq4 = (event) =>{
    setQ4(event.target.value);
}
const cq5 = (event) =>{
    setQ5(event.target.value);
}
const cq6 = (event) =>{
    setQ6(event.target.value);
}
const cq7 = (event) =>{
    setQ7(event.target.value);
}
const cq8 = (event) =>{
    setQ8(event.target.value);
}
const cq9 = (event) =>{
    setQ9(event.target.value);
}
const cq10 = (event) =>{
    setQ10(event.target.value);
}
const cq11 = (event) =>{
    setQ11(event.target.value);
}
const cq12 = (event) =>{
    setQ12(event.target.value);
}
const cq13 = (event) =>{
    setQ13(event.target.value);
}
const cq14 = (event) =>{
    setQ14(event.target.value);
}
const cq15 = (event) =>{
    setQ15(event.target.value);
}
const cq16 = (event) =>{
  setQ16(event.target.value);
}
const cq18 = (event) =>{
  setQ18(event.target.value);
}
const cq17 = (event) =>{
  setQ17(event.target.value);
}
const cq19 = (event) =>{
  setQ19(event.target.value);
}
const cq20 = (event) =>{
  setQ20(event.target.value);
}
const cq22 = (event) =>{
  setQ22(event.target.value);
}
const cq23 = (event) =>{
  setQ23(event.target.value);
}
const cq24 = (event) =>{
  setQ24(event.target.value);
}
const cq25 = (event) =>{
  setQ25(event.target.value);
}
const cq26 = (event) =>{
  setQ26(event.target.value);
}
const cq27 = (event) =>{
  setQ27(event.target.value);
}
const cq28 = (event) =>{
  setQ28(event.target.value);
}
const cq29 = (event) =>{
  setQ29(event.target.value);
}
const cq30 = (event) =>{
  setQ30(event.target.value);
}
const cq31 = (event) =>{
  setQ31(event.target.value);
}
const cq32 = (event) =>{
  setQ32(event.target.value);
}
const cq33 = (event) =>{
  setQ33(event.target.value);
}
const cq34 = (event) =>{
  setQ34(event.target.value);
}
const cq35 = (event) =>{
  setQ35(event.target.value);
}
const cq36 = (event) =>{
  setQ36(event.target.value);
}
const cq37 = (event) =>{
  setQ37(event.target.value);
}
const cq38 = (event) =>{
  setQ38(event.target.value);
}
const cq39 = (event) =>{
  setQ39(event.target.value);
}
const cq40 = (event) =>{
  setQ40(event.target.value);
}
const cq41 = (event) =>{
  setQ41(event.target.value);
}
const cq42 = (event) =>{
  setQ42(event.target.value);
}
const cq21 = (event) =>{
  setQ21(event.target.value);
}
const cq43 = (event) =>{
  setQ43(event.target.value);
}
const cq44 = (event) =>{
setQ44(event.target.value);
}


async function sendWebDevFormHandler(event) {
  event.preventDefault();

  //optional: add client-side validation

  setRequestStatus('pending');

  try {
      await sendWebFormData({
        fName:fName,
        lName:lName,
        phone :phone,
        email :email,
        cName :cName,
        cEmail :cEmail,
        cPhone :cPhone,
        cAddress :cAddress,
        q1 :q1,
        q2 :q2,
        q3 :q3,
        q4 :q4,
        q5 :q5,
        q6 :q6,
        q7 :q7,
        q8 :q8,
        q9 :q9,
        q10 :q10,
        q11 :q11,
        q12 :q12,
        q13 :q13,
        q14 :q14,
        q15 :q15,
        q16 :q16,
        q17 :q17,
        q18 :q18,
        q19 :q19,
        q20 :q20,
        q21 :q21,
        q22 :q22,
        q23 :q23,
        q24 :q24,
        q25 :q25,
        q26 :q26,
        q27 :q27,
        q28 :q28,
        q29 :q29,
        q30 :q30,
        q31 :q31,
        q32 :q32,
        q33 :q33,
        q34 :q34,
        q35 :q35,
        q36 :q36,
        q37 :q37,
        q38 :q38,
        q39 :q39,
        q40 :q40,
        q41 :q41,
        q42 :q42,
        q43 :q43,
        q44 :q44,
      });
  setRequestStatus('success');
  setFName('');
  setPhone('');
  setEmail('');
  setCName('');
  setCEmail('');
  setCPhone('');
  setCAddress('');
  setQ1('');
  setQ2('');
  setQ3('');
  setQ4('');
  setQ5('');
  setQ6('');
  setQ8('');
  setQ9('');
  setQ10('');
  setQ11('');
  setQ12('');
  setQ13('');
  setQ14('');
  setQ15('');
  setQ16('');
  setQ17('');
  setQ18('');
  setQ19('');
  setQ20('');
  setQ21('');
  setQ22('');
  setQ23('');
  setQ24('');
  setQ25('');
  setQ26('');
  setQ27('');
  setQ28('');
  setQ29('');
  setQ30('');
  setQ31('');
  setQ32('');
  setQ33('');
  setQ34('');
  setQ35('');
  setQ36('');
  setQ37('');
  setQ38('');
  setQ39('');
  setQ40('');
  setQ41('');
  setQ42('');
  setQ43('');
  setQ44('');
  } catch (error) {
      setRequestError(error);
      setRequestStatus('error');
  }
}

let notification;

if (requestStatus === 'pending') {
  notification = {
      status: 'pending',
      title: 'Sending consultation....',
      message: 'Your form is on the way!'
  };
}

if (requestStatus === 'success') {
  notification = {
      status: 'success',
      title: 'Success!',
      message: "Yay! We're finished! Consultation sent successfully! Someone will reach out with insight shortly!"
  };
}

if (requestStatus === 'error') {
  notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
  }
}





    return(
      <div>
        {isMobile &&
          <Fragment>
            <div className='py-4'>
              <Form className='form' onSubmit={sendWebDevFormHandler}>

              <h3 className='py-3 denseServiceH1-mobile'>Web Design Consultation</h3>
              <div className='px-4 '>
              <div className="modal-content-mobile-mobile form-squeezer-mobile">
              <div className="py-3 " role="document">
                  <div className="rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">You</h1>
                    <hr className="py-1" />

                    <Row>
                      <Col md={4}>
                      <FloatingLabel
                      controlId="floatingInput"
                      label="First Name"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={fNameChangeHandler} name='fName' value={fName} id='fName' type="text" placeholder="First Name" />
                    </FloatingLabel>

                      </Col>
                      <Col md={4}>

                      <FloatingLabel
                      controlId="floatingInput"
                      label="Last Name"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={lNameChangeHandler} name='lName' value={lName} id='lName' type="text" placeholder="Last Name" />
                    </FloatingLabel>

                      </Col>
                    </Row>

                    <Row>
                    <Col md={4}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Phone"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={phoneChangeHandler} name='phone' value={phone} id='phone' type="text" placeholder="Phone" />
                    </FloatingLabel>
                    </Col>
                    <Col md={7}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={emailChangeHandler} name='email' value={email} id='email' type="email" placeholder="Email" />
                    </FloatingLabel>
                    </Col>
                    </Row>
                    
                  </div>
                </div>


              {/* Company */}
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow ">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Company</h1>
                    <hr className="py-1" />

                    <Row>
                      <Col md={4}>
                      <FloatingLabel
                      controlId="floatingInput"
                      label="Company Name"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cNameChangeHandler} name='cName' value={cName} id='cName' type="text" placeholder="Company Name" />
                    </FloatingLabel>

                      </Col>
                      <Col md={4}>

                      <FloatingLabel
                      controlId="floatingInput"
                      label="Company Email"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cEmailChangeHandler} name='cEmail' value={cEmail} id='cEmail' type="email" placeholder="Email" />
                    </FloatingLabel>

                      </Col>
                    </Row>

                    <Row>
                    <Col md={'4'}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Company Phone"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cPhoneChangeHandler} name='cPhone' value={cPhone} id='cPhone' type="text" placeholder="Phone" />
                    </FloatingLabel>
                    </Col>
                    <Col md={7}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Company Address"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cAddressChangeHandler} name='cAddress' value={cAddress} id='cAddress' type="text" placeholder="Address" />
                    </FloatingLabel>
                    </Col>

                    
                    <Col lg={12}>

                      <p className={classes.form}>Describe your company in 1-2 sentences.</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq1} name='q1' value={q1} id='q1'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                      <p className={classes.form}>Please list each service and/or all products you offer.</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq2} name='q2' value={q2} id='q2'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                      <p className={classes.form}>How long have you been in business?</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq3} name='q3' value={q3} id='q3'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                      <p className={classes.form}>How many employees do you have?</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq4} name='q4' value={q4} id='q4'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                      <p className={classes.form}>Describe your target market.</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq5} name='q5' value={q5} id='q5'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                      <p className={classes.form}>Where is your market geographically located?</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq6} name='q6' value={q6} id='q6'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                    <p className={classes.form}>List any competitors and their associated website addresses.</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq7} name='q7' value={q7} id='q7'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>

                      <p className={classes.form}>Why do your customers choose you, and not the ops?</p>  
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq8} name='q8' value={q8} id='q8'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    </Row>

                    

                    
                    
                  </div>
                </div>

              {/* New Website Goals. */}


                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">New Website Goals.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >

                    <p className={classes.form}>What is the primary purpose of your website? (share information, leads, sales)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq9} name='q9' value={q9} id='q9'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What is the secondary purpose of your website? (share information, leads, sales)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq10} name='q10' value={q10} id='q10'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Describe any other goals of your website.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq11} name='q11' value={q11} id='q11'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What actions would you like a user to take when they visit your site(please list in order of importance)?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq12} name='q12' value={q12} id='q12'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will your new website sell products or accept payments? (If yes, please describe.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq13} name='q13' value={q13} id='q13'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will your visitors have an option to login? (If yes, please describe.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq14} name='q14' value={q14} id='q14'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Are there any additional features or capabilities that you would like for your new site to have?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq15} name='q15' value={q15} id='q15'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What elements of your existing site do you like?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq16} name='q16' value={q16} id='q16'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What elements of your site do you not like?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq17} name='q17' value={q17} id='q17'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>How many employees do you have?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq18} name='q18' value={q18} id='q18'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                {/* Content  */}

                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Content.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                    <p className={classes.form}>How many pages will your new website be? (Home, About, Contact, Products [4])</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq19} name='q19' value={q19} id='q19'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will you provide all content or would you like for us to provide that service?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq20} name='q20' value={q20} id='q20'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Do you have ownership of all images for the site, or will you require purchasing stock photography?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq21} name='q21' value={q21} id='q21'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Do you have videos that you`d like to incorporate into the site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq43} name='q43' value={q43} id='q43'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will you publish a blog on the site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq22} name='q22' value={q22} id='q22'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                        
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Design.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        <p className={classes.form}>Do you have brand guidelines, logo(s), and brand colors to incorporate into the site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq23} name='q23' value={q23} id='q23'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        <p className={classes.form}>Please provide 3 examples of websites you like, and describe why. (Doesn`t have to be the same industry.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq24} name='q24' value={q24} id='q24'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>`
                        <p className={classes.form}>What 3 words best portray your company`s image?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq25} name='q25' value={q25} id='q25'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>


              {/* SEO  */}



                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">SEO.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                  
                        <p className={classes.form}>Have you performed SEO on an older or current version of your existing site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq26} name='q26' value={q26} id='q26'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Will you need SEO for this new site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq27} name='q27' value={q27} id='q27'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Please provide a few examples key phrases you would like to target in the search engines.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq28} name='q28' value={q28} id='q28'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you provide a local service to your city?(Local SEO)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq29} name='q29' value={q29} id='q29'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you expect mobile visitors?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq30} name='q30' value={q30} id='q30'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>


              {/* Social Media  */}

                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Social Media.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                        <p className={classes.form}>What social media channels does your company currently use?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq31} name='q31' value={q31} id='q31'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What social media sites would your company like to start using in the future?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq32} name='q32' value={q32} id='q32'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>


                {/* Technical  */}
                
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Technical.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                  
                        
                    <p className={classes.form}>What is your current domain or URL?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq33} name='q33' value={q33} id='q33'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What platforms are you interested in using or do you have experience with?  (WordPress, Joomla, Drupal, Magento, etc...)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq34} name='q34' value={q34} id='q34'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Where is your site currently hosted?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq35} name='q35' value={q35} id='q35'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Why do you use your current host?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq36} name='q36' value={q36} id='q36'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                

                {/* Mainetenance  */}
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Maintenance.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                        
                        <p className={classes.form}>Will you need monthly maintenance and updates after launch?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq37} name='q37' value={q37} id='q37'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What sections of the site of the site will need regular updating and or maintenance after launch?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq38} name='q38' value={q38} id='q38'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you use an email marketing service that you`d like intergrated? (Mailchimp, Constant, Contact, etc.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq39} name='q39' value={q39} id='q39'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you provide a local service to your city?(Local SEO)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq40} name='q40' value={q40} id='q40'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web-mobile">Project Management.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                        
                      <p className={classes.form}>Who will be the point person for this project, and who will provide approvals? Please provide their contact information.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq41} name='q41' value={q41} id='q41'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Please list the person who has final approval on all aspects of the project.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq42} name='q42' value={q42} id='q42'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What is your ideal timeframe or launch date?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq44} name='q44' value={q44} id='q44'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>
                

              </div>
              <div className='d-grid actions'>
                <button variant='danger'>Submit</button>
                </div> 
              </div>
              </Form>
            {notification && <NotificationConsultation
            status={notification.status} 
            title={notification.title} 
            message={notification.message} 
            />}
          </div>
          </Fragment>
        }

        {isLaptop &&
          <Fragment>
            <div>
              <Form onSubmit={Submit}>

              <h3 className='form-h3'>Web Design Consultation</h3>
              <div className='px-5 '>
              <div className="form-squeezer">
              <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">You</h1>
                    <hr className="py-1" />

                    <Row>
                      <Col md={4}>
                      <FloatingLabel
                      controlId="floatingInput"
                      label="First Name"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={fNameChangeHandler} name='fName' value={fName} id='fName' type="text" placeholder="First Name" />
                    </FloatingLabel>

                      </Col>
                      <Col md={4}>

                      <FloatingLabel
                      controlId="floatingInput"
                      label="Last Name"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={lNameChangeHandler} name='lName' value={lName} id='lName' type="text" placeholder="Last Name" />
                    </FloatingLabel>

                      </Col>
                    </Row>

                    <Row>
                    <Col md={4}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Phone"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={phoneChangeHandler} name='phone' value={phone} id='phone' type="text" placeholder="Phone" />
                    </FloatingLabel>
                    </Col>
                    <Col md={7}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={emailChangeHandler} name='email' value={email} id='email' type="email" placeholder="Email" />
                    </FloatingLabel>
                    </Col>
                    </Row>
                    
                  </div>
                </div>


              {/* Company */}
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow ">
                    <h1 className=" mb-0 fs-5 section-label-web">Company</h1>
                    <hr className="py-1" />

                    <Row>
                      <Col md={4}>
                      <FloatingLabel
                      controlId="floatingInput"
                      label="Company Name"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cNameChangeHandler} name='cName' value={cName} id='cName' type="text" placeholder="Company Name" />
                    </FloatingLabel>

                      </Col>
                      <Col md={4}>

                      <FloatingLabel
                      controlId="floatingInput"
                      label="Company Email"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cEmailChangeHandler} name='cEmail' value={cEmail} id='cEmail' type="email" placeholder="Email" />
                    </FloatingLabel>

                      </Col>
                    </Row>

                    <Row>
                    <Col md={'4'}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Company Phone"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cPhoneChangeHandler} name='cPhone' value={cPhone} id='cPhone' type="text" placeholder="Phone" />
                    </FloatingLabel>
                    </Col>
                    <Col md={7}>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Company Address"
                      className="mb-3 "
                    >
                      <Form.Control  onChange={cAddressChangeHandler} name='cAddress' value={cAddress} id='cAddress' type="text" placeholder="Address" />
                    </FloatingLabel>
                    </Col>

                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Describe your company in 1-2 sentences.">
                          <Form.Control
                            onChange={cq1} name='q1' value={q1} id='q1'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Please list each service and/or all products you offer.">
                          <Form.Control
                            onChange={cq2} name='q2' value={q2} id='q2'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="How long have you been in business?">
                          <Form.Control
                            onChange={cq3} name='q3' value={q3} id='q3'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="How many employees do you have?">
                          <Form.Control
                            onChange={cq4} name='q4' value={q4} id='q4'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Describe your target market.">
                          <Form.Control
                            onChange={cq5} name='q5' value={q5} id='q5'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Where is your market geographically located?">
                          <Form.Control
                            onChange={cq6} name='q6' value={q6} id='q6'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="List any competitors and their associated website addresses.">
                          <Form.Control
                            onChange={cq7} name='q7' value={q7} id='q7'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    <Col lg={12}>
                      <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Why do your customers choose you, and not the ops?">
                          <Form.Control
                            onChange={cq8} name='q8' value={q8} id='q8'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                    </Col>
                    
                    </Row>

                    

                    
                    
                  </div>
                </div>

              {/* New Website Goals. */}


                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">New Website Goals.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >

                    <p className={classes.form}>What is the primary purpose of your website? (share information, leads, sales)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq9} name='q9' value={q9} id='q9'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What is the secondary purpose of your website? (share information, leads, sales)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq10} name='q10' value={q10} id='q10'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Describe any other goals of your website.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq11} name='q11' value={q11} id='q11'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What actions would you like a user to take when they visit your site(please list in order of importance)?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq12} name='q12' value={q12} id='q12'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will your new website sell products or accept payments? (If yes, please describe.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq13} name='q13' value={q13} id='q13'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will your visitors have an option to login? (If yes, please describe.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq14} name='q14' value={q14} id='q14'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Are there any additional features or capabilities that you would like for your new site to have?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq15} name='q15' value={q15} id='q15'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What elements of your existing site do you like?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq16} name='q16' value={q16} id='q16'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>What elements of your site do you not like?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq17} name='q17' value={q17} id='q17'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>How many employees do you have?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq18} name='q18' value={q18} id='q18'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                {/* Content  */}

                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">Content.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                    <p className={classes.form}>How many pages will your new website be? (Home, About, Contact, Products [4])</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq19} name='q19' value={q19} id='q19'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will you provide all content or would you like for us to provide that service?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq20} name='q20' value={q20} id='q20'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Do you have ownership of all images for the site, or will you require purchasing stock photography?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq21} name='q21' value={q21} id='q21'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Do you have videos that you`d like to incorporate into the site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq43} name='q43' value={q43} id='q43'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>

                        <p className={classes.form}>Will you publish a blog on the site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq22} name='q22' value={q22} id='q22'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                        
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">Design.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        <p className={classes.form}>Do you have brand guidelines, logo(s), and brand colors to incorporate into the site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq23} name='q23' value={q23} id='q23'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        <p className={classes.form}>Please provide 3 examples of websites you like, and describe why. (Doesn`t have to be the same industry.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq24} name='q24' value={q24} id='q24'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        <p className={classes.form}>What 3 words best portray your company`s image?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq25} name='q25' value={q25} id='q25'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>


              {/* SEO  */}



                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">SEO.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                  
                        <p className={classes.form}>Have you performed SEO on an older or current version of your existing site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq26} name='q26' value={q26} id='q26'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Will you need SEO for this new site?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq27} name='q27' value={q27} id='q27'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Please provide a few examples key phrases you would like to target in the search engines.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq28} name='q28' value={q28} id='q28'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you provide a local service to your city?(Local SEO)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq29} name='q29' value={q29} id='q29'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you expect mobile visitors?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq30} name='q30' value={q30} id='q30'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>


              {/* Social Media  */}

                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">Social Media.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                        <p className={classes.form}>What social media channels does your company currently use?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq31} name='q31' value={q31} id='q31'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What social media sites would your company like to start using in the future?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq32} name='q32' value={q32} id='q32'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>


                {/* Technical  */}
                
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">Technical.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                  
                        
                    <p className={classes.form}>What is your current domain or URL?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq33} name='q33' value={q33} id='q33'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What platforms are you interested in using or do you have experience with?  (WordPress, Joomla, Drupal, Magento, etc...)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq34} name='q34' value={q34} id='q34'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Where is your site currently hosted?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq35} name='q35' value={q35} id='q35'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Why do you use your current host?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq36} name='q36' value={q36} id='q36'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                

                {/* Mainetenance  */}
                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">Maintenance.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                        
                        <p className={classes.form}>Will you need monthly maintenance and updates after launch?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq37} name='q37' value={q37} id='q37'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What sections of the site of the site will need regular updating and or maintenance after launch?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq38} name='q38' value={q38} id='q38'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you use an email marketing service that you'd like intergrated? (Mailchimp, Constant, Contact, etc.)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq39} name='q39' value={q39} id='q39'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Do you provide a local service to your city?(Local SEO)</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq40} name='q40' value={q40} id='q40'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div className="py-3" role="document">
                  <div className="modal-content-mobile rounded-4 shadow">
                    <h1 className=" mb-0 fs-5 section-label-web">Project Management.</h1>
                    <hr className="py-1" />

                    <Row>
                    <Col >
                        
                        
                      <p className={classes.form}>Who will be the point person for this project, and who will provide approvals? Please provide their contact information.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq41} name='q41' value={q41} id='q41'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>Please list the person who has final approval on all aspects of the project.</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq42} name='q42' value={q42} id='q42'
                            as="textarea"
                            placeholder="Mission Statement"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                        
                        <p className={classes.form}>What is your ideal time-frame or launch date?</p>
                        <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="">
                          <Form.Control
                            onChange={cq44} name='q44' value={q44} id='q44'
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='container-fluid btnSub'>
                <Button type='submit' variant='outline-success' className='buttonSubmit m-3'>Submit</Button>
                </div>

              </div> 
              </div>

                
              </Form>
          </div>
          </Fragment>
        }
      </div>


    )
}

export default WDCPage;