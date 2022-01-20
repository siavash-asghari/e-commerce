import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import { ProductsContext } from '../contexts/ProductsContext'


const Shop = () => {


    const { handleCategory, productComponent } = useContext(ProductsContext)


    return (
        <section className='container'>
            <Nav as="ul" className='my-4 d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Nav.Item style={{ fontSize: '22px' }} as="li">
                        <Nav.Link style={{ color: '#1C6DD0' }}>محصولات</Nav.Link>
                    </Nav.Item>
                </div>

                <div className='d-flex'>
                    <Nav.Item style={{ fontSize: '15px' }} as="li" onClick={() => handleCategory("/category/men's clothing")}>
                        <Nav.Link>مردانه</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ fontSize: '15px' }} as="li" onClick={() => handleCategory("/category/women's clothing")}>
                        <Nav.Link>زنانه</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ fontSize: '15px' }} as="li" onClick={() => handleCategory("/category/jewelery")}>
                        <Nav.Link>جواهرات</Nav.Link>
                    </Nav.Item>
                    <Nav.Item style={{ fontSize: '15px' }} as="li" onClick={() => handleCategory("/category/electronics")}>
                        <Nav.Link>الکترونیک</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" onClick={() => handleCategory('')}>
                        <Nav.Link >همه </Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
            <div className='row'>
                {productComponent}
            </div>
        </section>
    )
}

export default Shop