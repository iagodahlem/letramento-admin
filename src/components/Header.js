import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = ({ onClickLogout }) => (
  <header className='Header'>
    <div className='Header__left'>
      <h1 className='Header__title'>
        <Link to='/'>Letramento</Link>
      </h1>

      <nav className='Header__nav'>
        <ul>
          <li>
            <NavLink exact className='Header__navLink' activeClassName='is-active' to='/'>
              Textos
            </NavLink>
          </li>
          <li>
            <NavLink exact className='Header__navLink' activeClassName='is-active' to='/textos/novo'>
              Novo Texto
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

    <div className='Header__right'>
      <p className='Header__navLink' onClick={onClickLogout}>
        Logout
      </p>
    </div>
  </header>
)

export default Header
