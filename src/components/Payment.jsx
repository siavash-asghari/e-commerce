import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import CounterItemProduct from './CounterItemProduct';
import Trash from './Trash';
import '.././assets/css/payment.css'
import Button from 'react-bootstrap/esm/Button';


const Payment = () => {

    const { basketProduct } = useContext(ProductsContext);


    return (
        <div className='paymentBody'>
            {
                basketProduct.map(product => (
                    <div className='container basketItem' key={product.id}>
                        <div>
                            <img src={product.image} alt={product.title} width='60px' />
                        </div>
                        <div className='basketTrashTitle'>
                            <p>{product.title}</p>
                        </div>
                        <div className='basketDesc'>
                            <div className='basketCounterBtn'>
                                <p>$ {product.price}</p>
                                <CounterItemProduct id={product.id} count={product.count} />
                                <Trash id={product.id} />
                            </div>
                        </div>
                    </div>
                ))
            }
            <Button
                className='basketButton'
                variant='success'
            >
                پرداخت
            </Button>
        </div>
    );
};

export default Payment;