import React, { useContext } from 'react'
import { CgTrashEmpty } from 'react-icons/cg'
import { ProductsContext } from '../contexts/ProductsContext'
import '.././assets/css/trash.css'


const Trash = ({ id }) => {

    const { handleRemoveBasket } = useContext(ProductsContext)

    


    return (
        <>
            <CgTrashEmpty className='trash' onClick={() => handleRemoveBasket(id)} />
        </>
    )
}

export default Trash
