import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
      <nav>
          <Link to='/'><img src={logo} alt="Logo" /></Link>
          <div className='Categories'>
              <NavLink to={`/category/Novedades`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Novedades</NavLink>
              <NavLink to={`/category/Guantes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guantes</NavLink>
              <NavLink to={`/category/Ofertas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
          </div>
          <CartWidget />
      </nav>


    )
  }

export default NavBar