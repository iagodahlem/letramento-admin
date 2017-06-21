import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Admin = () => (
  <header className='Admin__header'>
    <h1>
      <Link to='/'>FL Admin</Link>
    </h1>

    <nav>
      <ul>
        <li>
          <NavLink to='/'>Textos</NavLink>
        </li>
        <li>
          <NavLink to='/'>Novo Texto</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Admin
