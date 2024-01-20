import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {

    return (
        <>
            <img id='carrito' src="./carritodecompras.png" alt="Carrito de Compras" />

            <p className='itemcount' >0</p>
        </>
    )
}

export default CartWidget