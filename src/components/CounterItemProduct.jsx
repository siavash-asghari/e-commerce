import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { ProductsContext } from '../contexts/ProductsContext'



const CounterItemProduct = ({ id, count }) => {

    const { handleIncrement, handleDecrement } = useContext(ProductsContext)
    console.log("CounterItemProduct:", count);

    return (
        <>
            <Button size='sm' onClick={() => handleIncrement(id)}>+</Button>
            <h6>{count}</h6>
            <Button size='sm' onClick={() => handleDecrement(id)}>-</Button>
        </>
    )
}

export default CounterItemProduct
