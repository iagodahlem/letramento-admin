import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

const Input = ({ type = 'text', name, value, onChange, placeholder }) => (
  <input
    className='Input'
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
)

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Input
