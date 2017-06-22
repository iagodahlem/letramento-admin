import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'
import Page from '../components/Page'
import LoginForm from '../components/LoginForm'

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
      <Page>
        <LoginForm
          onChangeCredentials={this.handleChangeCredentials}
          onClickLogin={this.handleClickLogin}
        />
      </Page>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(authActions.login(credentials)),
})

export default connect(null, mapDispatchToProps)(Login)
