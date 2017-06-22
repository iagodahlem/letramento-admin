import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getText, getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import * as textsActions from '../actions/textsActions'
import Page from '../components/Page'
import TextForm from '../components/TextForm'

class TextsShow extends Component {
  state = {
    text: {},
  }

  componentDidMount = () => {
    this.show()
  }

  show = () => {
    const showText = this.props.showText
    const id = this.props.id

    showText(id)
      .then(() => this.setState({ text: this.props.text }))
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

  handleClickUpdate = (e) => {
    const { id, updateText } = this.props
    const text = this.state.text

    updateText(id, text)
  }

  render() {
    const { isFetching, errorMessage } = this.props
    const { text } = this.state

    return (
      <Page>
        <TextForm
          text={text}
          onChange={this.handleChangeText}
          onClick={this.handleClickUpdate}
        />
      </Page>
    )
  }
}

TextsShow.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  showText: PropTypes.func.isRequired,
  updateText: PropTypes.func.isRequired,
}

const mapStateToProps = (state, { match }) => ({
  id: match.params.id,
  text: getText(state),
  isFetching: getTextsIsFetching(state),
  errorMessage: getTextsErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  showText: (id) => dispatch(textsActions.showText(id)),
  updateText: (id, text) => dispatch(textsActions.updateText(id, text)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextsShow))
