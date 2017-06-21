import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ onClick, to, children }) => {
  if (onClick) {
    return (
      <button type='button' className='Button' onClick={onClick}>
        {children}
      </button>
    )
  }

  return (
    <Link className='Button Button--link' to={to}>
      {children}
    </Link>
  )
}

export default Button
