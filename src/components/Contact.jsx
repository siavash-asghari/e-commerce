import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import support from '../assets/image/support.png';
import '../assets/css/contact.css'





const Contact = () => {

const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
  };


    return (
        <div className='container my-5 p-2 border border-2 bgContact'>
            <div className='row'>
                <div className=' p-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 headerContact'>
                    <h2>تماس با ما</h2>
                </div>
            </div>
            <hr />
            <div className='row p-3'>
                <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12 imgContact'>
                    <img src={support} alt='contact' height="265px" />
                </div>
                <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>نام و نام خانوادگی</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>ایمیل</Form.Label>
                            <Form.Control type="email" required />
                            <Form.Control.Feedback type='invalid'>لطفا ایمیل را درست وارد کنید</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>پیام</Form.Label>
                            <Form.Control as="textarea" rows={4} required minLength="10" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            ارسال
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Contact
