import React from 'react'
import PropTypes from 'prop-types'
import './Textarea.css'

const Textarea = ({ name, rows, onChange, placeholder }) => (
  <textarea
    className='Textarea Input'
    name={name}
    rows={rows}
    onChange={onChange}
    placeholder={placeholder}
  />
)

Textarea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

export default Textarea
