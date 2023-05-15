import './CartWidget.css'
import { useContext } from 'react'
import cart from './assets/Cart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className='CartImg' src={cart} alt="Cart" />
      { totalQuantity }
    </Link>
  )
}

export default CartWidget