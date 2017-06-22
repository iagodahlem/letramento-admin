import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import './TextForm.css'

const TextForm = ({ text, onChange, onClick }) => (
  <div className='TextForm'>
    <Input name='title' value={text.title} onChange={onChange} placeholder='Titulo' />
    <Input name='description' value={text.description} onChange={onChange} placeholder='Descrição' />
    {/*<Textarea name='body' value={text.body} rows='10' onChange={onChange} placeholder='Texto' />*/}

    <Button onClick={onClick}>
      Salvar
    </Button>
  </div>
)

TextForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TextForm
