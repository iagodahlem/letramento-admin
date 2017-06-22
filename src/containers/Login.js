import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'

class Login extends Component {
  state = {
    credentials: {},
  }

  handleChangeCredentials = (e) => {
    const credentials = this.state.credentials
    const name = e.target.name
    const value = e.target.value

    credentials[name] = value

    this.setState({
      credentials,
    })
  }

  handleClickLogin = (e) => {
    const credentials = this.state.credentials
    const login = this.props.login

    login(credentials)
  }

  render() {
    return (
      <div>
        <input type="email" name="email" onChange={this.handleChangeCredentials}/>
        <input type="password" name="password" onChange={this.handleChangeCredentials}/>

        <button type="button" onClick={this.handleClickLoginForm}>
          Entrar
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(authActions.login(credentials)),
})

export default connect(null, mapDispatchToProps)(Login)
