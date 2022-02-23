import * as React from "react";
import { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { CgShoppingBag, CgMenu, CgUserList } from "react-icons/cg";
import logo from '../assets/image/logo.png'
import '.././assets/css/header.css';
import Menu from './Menu';
import { ProductsContext } from "../contexts/ProductsContext";
import Basket from "./Basket";
import Search from "./Search";


const Header = ({ menu }) => {

    const { countBasket, basketClassName } = useContext(ProductsContext)

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
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
                         


                            <div className="shoppingHover">
                                <CgShoppingBag
                                    className="shoppingBag"
                                />
                                <div className={basketClassName}>
                                    <Basket />
                                </div>
                            </div>



                            <Badge pill className="badge">
                                {countBasket}
                            </Badge>
                        </li>
                        <li className='list-group-item bg-light border-0'>
                            <CgUserList className="userLogin" />
                        </li>
                    </ul>
                </Container>
            </Navbar>
         
        </>
    )
}

export default Header;