import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"

const NavBar = () => {

    return(
        <>
            <h1 id='logo'>PlazaCentro</h1>

            <ul className='menu'>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Hombre</a>
                </li>
                <li>
                    <a href="#">Mujer</a>
                </li>
                <li>
                    <a href="#">Infantil</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>

            <CartWidget/>

        </>
    )
}

export default NavBar;