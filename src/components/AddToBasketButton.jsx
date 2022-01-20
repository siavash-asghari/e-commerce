import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { ProductsContext } from '../contexts/ProductsContext'



const AddToBasketButton = ({ id, size, color }) => {

    const { handleAddBasket } = useContext(ProductsContext)


    return (
        <>
            <Button
                size={size}
                variant={color}
                onClick={() => handleAddBasket(id)}
            >
                خرید
            </Button>
        </>
    )
}

export default AddToBasketButton
