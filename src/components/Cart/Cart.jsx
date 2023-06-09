import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


const Cart = () => {
    const { cart, clearCart, total} = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <div className='Return'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='Option'>Volver a productos</Link>
            </div>
        )
    }

    return (
        <div >
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            <section className='Total'>
                <h3>Total: ${total()}</h3>
                <button onClick={() => clearCart()} className='Button'>Vaciar carrito</button>
                <Link to='/checkout' className='Option'>Checkout</Link>
            </section>
            <Footer />
        </div>
    )
}

export default Cart