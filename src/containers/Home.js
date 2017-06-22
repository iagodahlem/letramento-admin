import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTexts, getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import * as textsActions from '../actions/textsActions'
import Page from '../components/Page'
import TextList from '../components/TextList'

class Home extends Component {
  componentDidMount = () => {
    this.fetch()
  }

  fetch = () => {
    const fetchTexts = this.props.fetchTexts
    fetchTexts()
  }

  render() {
    const { texts, isFetching } = this.props

    return (
      <Page isFetching={isFetching}>
        <TextList texts={texts} />
      </Page>
    )
  }
}

const mapStateToProps = (state) => ({
  texts: getTexts(state),
  isFetching: getTextsIsFetching(state),
  errorMessage: getTextsErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchTexts: () => dispatch(textsActions.fetchTexts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
