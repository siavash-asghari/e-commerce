import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { CgFacebook, CgInstagram, CgChevronUpO } from 'react-icons/cg'
import Menu from './Menu'
import '.././assets/css/footer.css'


const Footer = ({ menu }) => {

    const myStyle = {
        width: '100%',
        height: '200px ',
    }
    const handleToScrollTop = () => (
        window.scrollTo({top: '0', behavior: 'smooth'})
    )

    return (
        <div className='container wrapFooter'>
        <hr />
            <div className='d-flex align-items-center justify-content-around' style={myStyle}>
                <div className=''>
                    <Menu menu={menu} />
                </div>
                <Nav.Link as='li' className='navFooter'>
                    <Link to='#' className='link'>خدمات مشتریان</Link>
                    <Link to='#' className='link'>پاسخ به پرسش‌های متداول</Link>
                    <Link to='#' className='link'>رویه‌های بازگرداندن کالا</Link>
                    <Link to='#' className='link'>شرایط استفاده</Link>
                    <Link to='#' className='link'>حریم خصوصی</Link>
                </Nav.Link>

                <div>
                    <CgInstagram style={{ marginLeft: '10px', fontSize: '20px' }} />
                    <CgFacebook style={{ marginLeft: '25px', fontSize: '20px' }} />
                </div>
            </div>
            <div className='scrollTop' onClick={handleToScrollTop}>
            <CgChevronUpO className='scrollTopIcon' />
            </div>
        </div>
    )
}

export default Footer

// className='d-flex flex-column align-items-end'