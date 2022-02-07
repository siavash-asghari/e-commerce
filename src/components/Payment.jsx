import React, { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import CounterItemProduct from './CounterItemProduct';
import Trash from './Trash';
import '.././assets/css/payment.css'
import Button from 'react-bootstrap/esm/Button';


const Payment = () => {

    const { basketProduct } = useContext(ProductsContext);


    return (
        <div className='paymentBody container gap-5 mt-3'>
            <div className=' col-lg-7 col-md-8 col-sm-6'>
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
            </div>
            <div className='basketPayment col-lg-5 col-md-4 col-sm-6 mt-5'>
                <div>
                    <p>قیمت کالاها</p>
                    <h6></h6>
                </div>
                <div>
                    <p>تخفیف کالاها </p>
                    <h6></h6>
                </div>
                <hr />
                <div>
                    <p>جمع سبد خرید</p>
                    <h6></h6>
                </div>

                <Button
                    className='basketButton'
                    variant='success'
                >
                    پرداخت
                </Button>
            </div>

        </div>
    );
};

export default Payment;