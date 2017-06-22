import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import './LoginForm.css'

const LoginForm = ({ onChangeCredentials, onClickLogin }) => (
  <div className='LoginForm'>
    <h1>Login</h1>

    <Input type='email' name='email' onChange={onChangeCredentials} placeholder='Email' />
    <Input type='password' name='password' onChange={onChangeCredentials} placeholder='Senha' />

    <Button onClick={onClickLogin}>
      Login
    </Button>
  </div>
)

LoginForm.propTypes = {
  onChangeCredentials: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
}

export default LoginForm
