import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Shop from './Shop'
import Contact from './Contact'
import About from './About'
import NotFound from './NotFound'
import Header from './Header'
import SingleProduct from './SingleProduct'
import ProductsContext from '../contexts/ProductsContext';
import Footer from './Footer'



const Router = () => {

    const menu = [
        {
            name: 'خانه',
            href: '/',
            id: 1
        },
        {
            name: 'فروشگاه',
            href: '/shop',
            id: 2
        },
        {
            name: 'تماس با ما',
            href: '/contact',
            id: 3
        },
        {
            name: 'درباره ما',
            href: 'about',
            id: 4
        },
    ]

    return (
        <ProductsContext>
            <BrowserRouter>
                <Header menu={menu} />
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/shop' component={Shop} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    <Route path='/product/:id' component={SingleProduct} />
                    <Route component={NotFound} />
                </Switch>
                <Footer menu={menu} />
            </BrowserRouter>
        </ProductsContext>
    )
}

export default Router
