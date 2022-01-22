import React, { useContext } from 'react'
import '.././assets/css/product.css'
import AddToBasketButton from './AddToBasketButton'
import { ProductsContext } from '../contexts/ProductsContext'
import { Link } from 'react-router-dom'




const Product = () => {


    const { handleSingleProduct, products, category } = useContext(ProductsContext)


    return (
        <>

            <div className='row'>
                {
                    category.map(product => (
                        <section className='col-xl-3 col-lg-4 col-md-6 col-sm-6 product' key={product.id}>
                            <div className='d-flex flex-column align-items-center'>
                                <div className='imageProduct'>
                                    <Link to={`/product/${product.id}`} >
                                        <img
                                            className='image'
                                            alt={product.title}
                                            src={product.image}
                                            onClick={() => handleSingleProduct(product.product, product.id)}
                                        />
                                    </Link>
                                </div>
                                <Link to={`/product/${product.id}`} className='linkProduct' style={{ color: 'black' }}>
                                    <p onClick={() => handleSingleProduct(product.product, product.id)}>
                                        {product.title}
                                    </p>
                                </Link>
                                <div className='priceButton'>
                                    <AddToBasketButton id={product.id} size='sm' color='outline-primary' />
                                    <h6>$ {product.price}</h6>
                                </div>
                            </div>
                        </section>
                    ))
                }
            </div>

            <hr />

            <div className='container-fluid'>
                <div className='newRow'>
                    {
                        products.map(product => (
                            <section className='col-xl-3 col-lg-4 col-md-6 col-sm-6 product' key={product.id}>
                                <div className='d-flex flex-column align-items-center'>
                                    <div className='imageProduct'>
                                        <Link to={`/product/${product.id}`} >
                                            <img
                                                className='image'
                                                alt={product.title}
                                                src={product.image}
                                                onClick={() => handleSingleProduct(product.product, product.id)}
                                            />
                                        </Link>
                                    </div>
                                    <Link to={`/product/${product.id}`} className='linkProduct' style={{ color: 'black' }}>
                                        <p onClick={() => handleSingleProduct(product.product, product.id)}>
                                            {product.title}
                                        </p>
                                    </Link>
                                    <div className='priceButton'>
                                        <AddToBasketButton id={product.id} size='sm' color='outline-primary' />
                                        <h6>$ {product.price}</h6>
                                    </div>
                                </div>
                            </section>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Product
