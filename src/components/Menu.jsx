import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'


const Menu = ({ menu }) => {

    const style = {
            textDecoration: 'none',
            color: 'black'
    }

    return (
        <>
            {
                menu.map(title => (
                    <Nav.Link
                        key={title.id}
                        href={title.href}
                        as="li"
                    >
                        <Link to={title.href} style={style}>
                            {title.name}
                        </Link>
                    </Nav.Link>
                ))
            }
        </>
    )
}

export default Menu
