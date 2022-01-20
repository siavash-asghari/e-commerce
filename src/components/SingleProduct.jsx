import React, { useEffect, useContext, useState } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import Spinner from 'react-bootstrap/Spinner'
import AddToBasketButton from './AddToBasketButton'



const SingleProduct = () => {

    const { urlSinglePruduct, productComponent } = useContext(ProductsContext)
    const [product, setProduct] = useState([])
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const result = await fetch(urlSinglePruduct);
                const data = await result.json();
                setProduct([data]);
                setDataIsLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }
        loadProduct();
    }, [urlSinglePruduct])

    console.log(productComponent)



    return (
        <>
            {
                (!dataIsLoaded) ?
                    <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
                        <Spinner animation="border" variant='primary' />
                    </div>
                    :
                    product.map(item => (
                        <div key={item.id} className='container mt-5'>
                            <div className='row justify-content-between align-items-center'>
                                <div className='d-flex justify-content-center align-items-center p-4 mb-4 border border-5 rounded border-light col-lg-4 col-md-5 col-sm-12'>
                                    <img alt={item.title} src={item.image} height='250px' />
                                </div>
                                <div className='d-flex flex-column align-items-center col-lg-8 col-md-7 col-sm-12'>
                                    <h5>{item.title}</h5>
                                    <p style={{color: 'black', borderBottom:'1px solid blue', padding:'2px'}}>{item.category}</p>
                                    <p className='text-end mt-5 p-5'>{item.description}</p>
                                    <div className='d-flex justify-content-between align-items-baseline mb-5' style={{width:'300px'}}>
                                        <AddToBasketButton id={item.id}  color='primary' />
                                        <h6>$ {item.price}</h6>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    ))
            }
        </>
    )
}

export default SingleProduct
