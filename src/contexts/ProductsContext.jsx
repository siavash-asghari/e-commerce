import React, { useState, createContext, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useState([])
    const [basketClassName, setBasketClassName] = useState('basketEmpty')
    const [basketProduct, setBasketProduct] = useState([])
    const [countBasket, setCountBasket] = useState(0)
    const [urlSinglePruduct, setUrlSinglePruduct] = useState('')




    useEffect(() => {
        const url = "https://fakestoreapi.com/products"

        const apiFetch = async () => {
            const result = await fetch(url);
            const data = await result.json();
            setProducts(data)
        }
        apiFetch()
    }, [category])


    const handleCategory = (category) => {
        const catg = products.filter(categoryPro => (
            categoryPro.category === category
        ))
        category === '' ? setCategory(products) : setCategory(catg)
    }


    const handleSingleProduct = (product, id) => {
        let url = `https://fakestoreapi.com/products/${id}`
        setUrlSinglePruduct(url)
    }



    const handleAddBasket = (id) => {

        const product = products.find(item => item.id === id)
        const index = basketProduct.findIndex(item => item.id === product.id)
        product.length !== 0 && setBasketClassName('basketFull')


        if (index < 0) {
            setBasketProduct([...basketProduct, { ...product, count: 1 }])
            setCountBasket(countBasket + 1)
        } else {
            const basketItem = basketProduct.filter(item => item.id === product.id)
            basketItem[0].count++;
            setBasketProduct(basketProduct)
        }
    }

    const handleRemoveBasket = (id) => {
        let product = basketProduct.filter(product => product.id !== id)
        setBasketProduct(product)
        setCountBasket(countBasket - 1)
        product.length === 0 && setBasketClassName('basketEmpty')
    }

    const handleIncrement = (id) => {
        let basketItem = basketProduct.filter(item => item.id === id)
        basketItem[0].count++;
        setBasketProduct(basketProduct)
        console.log('inc');
        console.log(basketProduct);
    }


    const handleDecrement = (id) => {
        let basketItem = basketProduct.filter(item => item.id === id)
        basketItem[0].count-- > 1 ? setBasketProduct(basketProduct) : handleRemoveBasket(id)
        console.log('dec');
    }

    



    const value = {
        products,
        category,
        handleCategory,
        handleAddBasket,
        basketClassName,
        basketProduct,
        countBasket,
        handleRemoveBasket,
        handleIncrement,
        handleDecrement,
        handleSingleProduct,
        urlSinglePruduct,
    }

    return (
        <ProductsContext.Provider value={value}>
            {props.children}
        </ProductsContext.Provider>
    )


}

export default ProductsContextProvider;