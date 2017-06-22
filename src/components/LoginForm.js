import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import './LoginForm.css'

const LoginForm = ({ onChangeCredentials, onClickLogin, isFetching }) => (
  <div className='LoginForm'>
    <h1 className='LoginForm__title'>Login</h1>

    <Input type='email' name='email' onChange={onChangeCredentials} placeholder='Email' />
    <Input type='password' name='password' onChange={onChangeCredentials} placeholder='Senha' />

    <footer className='LoginForm__footer'>
      <Button onClick={onClickLogin} disabled={isFetching}>
        {isFetching ? 'Logando...' : 'Login'}
      </Button>
    </footer>
  </div>
)

LoginForm.propTypes = {
  onChangeCredentials: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default LoginForm
