import './Navbar.css'

import { NavLink } from 'react-router-dom'
import {
  BsSearch,
  BsFillPersonFill,
  BsHouseDoorFill,
  BsFillCameraFill
} from 'react-icons/bs'

import { useAuth } from '../hooks/useAuth'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { auth } = useAuth()
  const { user } = useSelector(state => state.auth)

  return (
    <div>
      <nav id='nav'>
        <NavLink to={'/'}>InstaUFSC</NavLink>
        <form id='search-form'>
          <BsSearch />
          <input type='text' placeholder='Pesquisar' />
        </form>
        <ul id='nav-links'>
          {auth ? (
            <>
              <li>
                <NavLink to={'/'}>
                  <BsHouseDoorFill />
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to={`/user/${user._id}`}>
                    <BsFillCameraFill />
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to={'/profile'}>
                  <BsFillPersonFill />
                </NavLink>
              </li>
              <li>
                <span>Sair</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={'/login'}>Entrar</NavLink>
              </li>
              <li>
                <NavLink to={'/register'}>Cadastrar</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
