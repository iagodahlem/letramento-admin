import React from 'react'
import PropTypes from 'prop-types'
import './Textarea.css'

const Textarea = ({ name, value, rows, onChange, placeholder }) => (
  <textarea
    className='Textarea Input'
    name={name}
    value={value}
    rows={rows}
    onChange={onChange}
    placeholder={placeholder}
  />
)

Textarea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Textarea
