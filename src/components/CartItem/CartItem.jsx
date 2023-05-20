import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import './CartItem.css'

export const CartItem = ( { id, name, img, quantity, price } ) => {

    const { removeItem } = useContext(CartContext);


    return (
        <section className='CartItem'>
            <header className='CartTitle'>
                <h2>{name}</h2>
            </header>
            <picture className='CartImg'>
                <img src={img} alt={name}/>
            </picture>
            <div className='CartInfo'>
                <p>Cantidad: {quantity}</p>

                <p>Precio unitario: ${price}</p>

                <p>Subtotal: ${quantity * price}</p>
            </div>
            <footer className='Delete'>
                <button className='ButtonDelete' onClick={ () => removeItem(id) }>X</button>
            </footer>
        </section>
    )
}
  


export default CartItem;