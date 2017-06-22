import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import Textarea from './Textarea'
import './TextForm.css'

const TextForm = ({ text = {}, onChange, onClick, isFetching }) => (
  <div className='TextForm'>
    <Input name='title' value={text.title} onChange={onChange} placeholder='Titulo' />
    <Input name='description' value={text.description} onChange={onChange} placeholder='Descrição' />
    <Textarea name='body' value={text.body} rows='10' onChange={onChange} placeholder='Texto' />

    <footer className='TextForm__footer'>
      <Button onClick={onClick} disabled={isFetching}>
        {isFetching ? 'Salvando...' : 'Salvar'}
      </Button>
    </footer>
  </div>
)

TextForm.propTypes = {
  text: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default TextForm
