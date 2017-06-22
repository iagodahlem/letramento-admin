import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import './TextForm.css'

const TextForm = ({ onChangeText, onClickCreateText }) => (
  <div className='TextForm'>
    <Input name='title' onChange={onChangeText} placeholder='Titulo' />
    <Input name='description' onChange={onChangeText} placeholder='Descrição' />
    <Textarea name='body' rows='10' onChange={onChangeText} placeholder='Texto' />

    <Button onClick={onClickCreateText}>
      Salvar
    </Button>
  </div>
)

TextForm.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onClickCreateText: PropTypes.func.isRequired,
}

export default TextForm
