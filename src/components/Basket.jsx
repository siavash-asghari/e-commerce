import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import '.././assets/css/basket.css'
import Trash from './Trash'
import CounterItemProduct from './CounterItemProduct'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'


const Basket = (props) => {

    const { basketProduct, handlePayment } = useContext(ProductsContext)


    return (
        <>
            {
                basketProduct.map(product => (
                    <div className='productItem' key={product.id}>
                        <div>
                            <img src={product.image} alt={product.title} width='30px' />
                        </div>
                        <div className='productDesc'>
                            <div className='trashTitle'>
                                <h6>{product.title}</h6>
                            </div>
                            <div className='counterBtn'>
                                <p>$ {product.price}</p>
                                <CounterItemProduct id={product.id} count={product.count} />
                                <Trash id={product.id} />
                            </div>
                        </div>
                    </div>
                ))
            }

            {
                basketProduct.length !== 0 &&
                <Link to='/payment' className="d-grid gap-2 m-1">
                    <Button
                        variant='success'
                        onClick={() => handlePayment(props.toggle)}
                    >
                        ثبت سفارش
                    </Button>
                </Link>
            }
        </>
    )
}

export default Basket