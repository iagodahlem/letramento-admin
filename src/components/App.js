import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as authActions from '../actions/authActions'
import Footer from './Footer'
import Header from './Header'
import './App.css'

class App extends Component {
  handleClickLogout = (e) => {
    this.props.logout()
  }

  render() {
    const { isPrivate, children } = this.props

    return (
      <div className='App'>
        {isPrivate && <Header onClickLogout={this.handleClickLogout} />}

        <main className='App__main'>
          {children}
        </main>

        <Footer />
      </div>
    )
  }
}

const mapDispacthToProps = (dispacth) => ({
  logout: () => dispacth(authActions.logout()),
})

export default connect(null, mapDispacthToProps)(App)
