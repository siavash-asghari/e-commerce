// import * as React from 'react';
import * as React from "react";
import { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { CgShoppingBag, CgMenu } from "react-icons/cg";
import logo from '../assets/image/logo.png'
import '.././assets/css/header.css';
import Menu from './Menu';
import { ProductsContext } from "../contexts/ProductsContext";
import Basket from "./Basket";
import Search from "./Search";


const Header = ({ menu }) => {

    const {countBasket} = useContext(ProductsContext)

    const [show, setShow] = useState(false)
    const [basketToggle, setBasketToggle] = useState(false)

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    const { basketClassName } = useContext(ProductsContext)    


    const handleHover = (status) => {
        setBasketToggle(status)
    }

    return (
        <>
            <Navbar bg='light'>
                <Container fluid >
                    <Nav className='navbarMenu justify-content-center'>
                        <Menu menu={menu} />
                    </Nav>
                    <Button variant='light' className='btnMenu' onClick={handleShow}>
                        <CgMenu />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose} placement="start">
                        <Offcanvas.Header closeButton className="canvas">
                            <Offcanvas.Title>منو</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="canvas">
                            <Menu menu={menu} />
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Navbar.Brand href='#' style={{ marginLeft: '160px' }}>
                        <img src={logo} width='90' alt='logo' />
                    </Navbar.Brand>
                    <ul className='list-group list-group-horizontal d-flex'>
                        <li className='list-group-item bg-light border-0'>
                            <Search />
                            
                        </li>
                        <li className='list-group-item bg-light border-0'>
                            <CgShoppingBag className="shoppingBag" onClick={() => handleHover(!basketToggle)} />
                            <Badge pill className="badge">
                            {countBasket}
                            </Badge>
                        </li>
                    </ul>
                </Container>
            </Navbar>
            {
                basketToggle &&
                <div className={basketClassName}>
                    <Basket />
                </div>
            }
        </>
    )
}

export default Header;


