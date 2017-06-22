import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ type = 'text', name, onChange, placeholder }) => (
  <input
    className='Input'
    type={type}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
  />
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Input
