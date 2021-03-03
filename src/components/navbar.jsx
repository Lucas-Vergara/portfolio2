import {React} from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return(
    <nav className="navbar sticky-top navbar-dark navbar-color">
      <div className="navbar-brand">Portafolio de Lucas</div>
      <div>
          <Link to='/' className='button link'> Home </Link>
          <Link to='/aboutMe' className='button link'> Sobre Mi </Link>
      </div>
    </nav>
  )
}

export default Navbar