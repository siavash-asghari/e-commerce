import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import support from '../assets/image/support.png';
import '../assets/css/contact.css'





const Contact = () => {
    return (
        <div className='container my-5 p-2 border border-2 bgContact'>
            <div className='row'>
                <div className='d-flex flex-column justify-content-center align-items-center p-3 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <h2>تماس با ما</h2>
                    <p>لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا پرسش‌های متداول را مشاهده کنید.</p>
                </div>
            </div>
                <hr />
            <div className='row'>
                    <div className='col-xl-5 col-lg-6 col-md-6 col-sm-12'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>نام و نام خانوادگی</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>پیام</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                ارسال
                            </Button>
                        </Form>
                    </div>
                    <div className='d-flex justify-content-center align-items-center col-xl-7 col-lg-6 col-md-6 col-sm-12 imgContact'>
                        <img src={support} alt='contact' height="265px" />
                    </div>
            </div>
        </div>
    )
}

export default Contact
