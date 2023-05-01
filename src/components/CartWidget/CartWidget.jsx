import './CartWidget.css'
import cart from './assets/Cart.png'

const CartWidget = () => {
  return (
    <div className='CartWidget'>
        <img src={cart} alt="cart-widget" />
        0
    </div>
  )
}

export default CartWidget