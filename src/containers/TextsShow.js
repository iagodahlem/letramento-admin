import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getText, getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import * as textsActions from '../actions/textsActions'
import Page from '../components/Page'
import TextForm from '../components/TextForm'

class TextsShow extends Component {
  componentDidMount = () => {
    this.show()
  }

  show = () => {
    const showText = this.props.showText
    const id = this.props.id
    showText(id)
  }

  handleChangeText = (e) => {
    const text = this.props.text
    const name = e.target.name
    const value = e.target.value

    text[name] = value

    console.log(this.props.text)
  }

  render() {
    const { text, isFetching, errorMessage } = this.props

    return (
      <Page>
        <TextForm
          text={text}
          onChange={this.handleChangeText}
          onClick={(e) => console.log(e, 'salvar')}
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
}

const mapStateToProps = (state, { match }) => ({
  id: match.params.id,
  text: getText(state),
  isFetching: getTextsIsFetching(state),
  errorMessage: getTextsErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  showText: (id) => dispatch(textsActions.showText(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TextsShow))
