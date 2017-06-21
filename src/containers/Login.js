import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      credentials: {},
    }
  }

  handleChangeLoginForm(e) {
    const credentials = this.state.credentials
    const name = e.target.name
    const value = e.target.value

    credentials[name] = value

    this.setState({
      credentials,
    })
  }

  handleClickLoginForm(e) {
    const credentials = this.state.credentials
    const login = this.props.login

    login(credentials)
  }

  render() {
    return (
      <div>
        <input type="email" name="email" onChange={(e) => this.handleChangeLoginForm(e)}/>
        <input type="password" name="password" onChange={(e) => this.handleChangeLoginForm(e)}/>

        <button type="button" onClick={(e)=> this.handleClickLoginForm(e)}>
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
