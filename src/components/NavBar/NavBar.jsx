import './NavBar.css'
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
      <nav>
          <h3>OnlyGoalkeeper</h3>
          <div>
              <NavLink to={`/category/Novedades`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Novedades</NavLink>
              <NavLink to={`/category/Guantes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Guantes</NavLink>
              <NavLink to={`/category/Ofertas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
          </div>
          <CartWidget />
      </nav>
    )
  }

export default NavBar