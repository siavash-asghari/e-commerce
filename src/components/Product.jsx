import React, { useContext } from 'react'
import '.././assets/css/product.css'
import AddToBasketButton from './AddToBasketButton'
import { ProductsContext } from '../contexts/ProductsContext'
import { Link } from 'react-router-dom'



const Product = ({ category, id, image, price, title, product }) => {


    const { handleSingleProduct } = useContext(ProductsContext)


    return (
        <section className='col-xl-3 col-lg-4 col-md-6 col-sm-6 product'>
            <div className='d-flex flex-column align-items-center'>
                <div className='imageProduct'>
                    <Link to={`/product/${id}`} >
                        <img
                            className='image'
                            alt={title}
                            src={image}
                            onClick={() => handleSingleProduct(product, id)}
                        />
                    </Link>
                </div>
                <Link to={`/product/${id}`} className='linkProduct' style={{ color: 'black' }}>
                    <p onClick={() => handleSingleProduct(product, id)}>
                        {title}
                    </p>
                </Link>
                <div className='priceButton'>
                    <AddToBasketButton id={id} size='sm' color='outline-primary' />
                    <h6>$ {price}</h6>
                </div>
            </div>
        </section>
    )
}

export default Product
