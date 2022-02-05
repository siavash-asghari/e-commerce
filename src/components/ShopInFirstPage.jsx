import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { Link } from 'react-router-dom'
import AddToBasketButton from './AddToBasketButton';
import '.././assets/css/shopInFirstPage.css'

const ShopInFirstPage = ({name}) => {

    const { products, handleSingleProduct } = useContext(ProductsContext);

    const product = products.filter(product => (product.price < 30))


    return (
        <div className='container'>
            <h4>{name}</h4>
            <div className='d-flex flex-wrap'>
                {
                    product.map(product => (
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
        </div >
    )
};

export default ShopInFirstPage;
