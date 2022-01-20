import React, { useEffect, useRef, useState, useContext } from 'react'
import Modal from 'react-bootstrap/esm/Modal';
import { Link } from 'react-router-dom';
import { CgSearch } from "react-icons/cg";
import '.././assets/css/search.css'
import { ProductsContext } from '../contexts/ProductsContext';

const Search = () => {


    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [apiProduct, setApiProduct] = useState([])

    const ref = useRef()
    const { handleSingleProduct } = useContext(ProductsContext)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setSearchValue('')
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchValue(ref.current.value)
    }



    useEffect(() => {
        const apiFetch = async () => {
            const result = await fetch('https://fakestoreapi.com/products')
            const data = await result.json()
            setApiProduct(data)
        }
        apiFetch()

        const title = apiProduct.filter(product => (
            product.title.toLowerCase().includes(searchValue)
        ))
        searchValue === '' ? setSearchResult([]) : setSearchResult(title)

    }, [searchValue])

    console.log(searchResult)


    return (
        <>
            <CgSearch className="search" onClick={handleShow} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <input
                        className="inputSearch"
                        placeholder="جستجوی محصولات"
                        type="text"
                        ref={ref}
                        onChange={handleSearch}
                    />
                </Modal.Header>
                <Modal.Body className='searchBody'>
                    {
                        searchResult.map(product => (
                            <ul key={product.id} className='d-flex align-items-center'>
                                <div>
                                    <img src={product.image} alt={product.title} width='30px' />
                                </div>
                                <Link to={`/product/${product.id}`} className='searchLink' onClick={() => setShow(!show)}>
                                    <li className='searchLi' onClick={() => handleSingleProduct(product, product.id)}>
                                        {product.title}
                                    </li>
                                </Link>
                            </ul>
                        ))
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Search;