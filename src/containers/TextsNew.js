import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import * as textsActions from '../actions/textsActions'
import Page from '../components/Page'

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

  handleClickCreateText = () => {
    const createText = this.props.createText
    const text = this.state.text

    createText(text)
  }

  render() {
    const { isFetching, errorMessage } = this.props

    return (
      <Page>
        <input type='text' name='title' placeholder='Titulo' onChange={this.handleChangeText} />
        <input type='text' name='description' placeholder='Descrição' onChange={this.handleChangeText} />
        <textarea name='body' placeholder='Texto' onChange={this.handleChangeText} />
        <button onClick={this.handleClickCreateText}>
          Salvar
        </button>
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
