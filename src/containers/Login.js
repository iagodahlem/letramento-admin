import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAuthIsFetching, getAuthErrorMessage } from '../reducers'
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
    const { isFetching, errorMessage } = this.props

    return (
      <Page>
        <LoginForm
          onChangeCredentials={this.handleChangeCredentials}
          onClickLogin={this.handleClickLogin}
          isFetching={isFetching}
        />
      </Page>
    )
  }
}

Login.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  isFetching: getAuthIsFetching(state),
  errorMessage: getAuthErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(authActions.login(credentials)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
