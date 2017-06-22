import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import * as textsActions from '../actions/textsActions'
import Page from '../components/Page'
import TextForm from '../components/TextForm'

class Texts extends Component {
  state = {
    text: {},
  }

  handleChangeText = (e) => {
    const text = this.state.text
    const name = e.target.name
    const value = e.target.value

    text[name] = value

    this.setState({
      text,
    })
  }

  handleClickCreate = () => {
    const createText = this.props.createText
    const text = this.state.text

    createText(text)
  }

  render() {
    const { isFetching, errorMessage } = this.props
    const { text } = this.state

    return (
      <Page title='Novo Texto'>
        <TextForm
          onChange={this.handleChangeText}
          onClick={this.handleClickCreate}
          isFetching={isFetching}
        />
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  isFetching: getTextsIsFetching(state),
  errorMessage: getTextsErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  createText: (text) => dispatch(textsActions.createText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Texts)
