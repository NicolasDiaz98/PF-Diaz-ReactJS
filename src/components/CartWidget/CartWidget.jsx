import './CartWidget.css'
import { useContext } from 'react'
import Cart from './assets/Cart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity() > 0 ? 'flex' : 'none'}}>
      <img className='CartImg' src={Cart} alt="Cart" />
      { totalQuantity() }
    </Link>
  )
}

export default CartWidget