import React, { useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import CounterItemProduct from './CounterItemProduct';
import Trash from './Trash';
import '.././assets/css/payment.css'
import Button from 'react-bootstrap/esm/Button';


const Payment = () => {

    const { basketProduct } = useContext(ProductsContext);

    const [prices, setPrices] = useState(0);
    const [finalPirce, setFinalPirce] = useState(0);

    useEffect(() => {
        if (basketProduct.length !== 0) {
            const price = basketProduct.map(product => (
                product.price
                // console.log(product.count)
            ))
            console.log(price);
            let Finalprice = [...price]
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            const pricef = Finalprice.reduce(reducer)
            setPrices(pricef)
            setFinalPirce(pricef)

        } else{
            setPrices(0)
            setFinalPirce(0)
        }
    }, [basketProduct]);
    

    return (
        <div className='paymentBody container gap-5 mt-3'>
            <div className=' col-lg-7 col-md-8 col-sm-12'>
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
            <div className='basketPayment col-lg-5 col-md-4 col-sm-12 mt-5'>
                <div className='d-flex justify-content-between'>
                    <p>قیمت کالاها</p>
                    <h6>{prices}</h6>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>تخفیف کالاها </p>
                    <h6>0</h6>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <p>جمع سبد خرید</p>
                    <h6>{finalPirce}</h6>
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