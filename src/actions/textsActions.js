import * as types from '../constants/actionTypes'
import * as textsService from '../services/textsService'
import { getTextsIsFetching } from '../reducers'

export const fetchTexts = () => (dispatch, getState) => {
  const fetchTextsRequest = () => ({
    type: types.TEXTS_FETCH_REQUEST,
  })

  const fetchTextsSuccess = (payload) => ({
    type: types.TEXTS_FETCH_SUCCESS,
    payload,
  })

  const fetchTextsFailure = (error) => ({
    type: types.TEXTS_FETCH_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(fetchTextsRequest())

  return textsService.fetchTexts()
    .then(payload => dispatch(fetchTextsSuccess(payload)))
    .catch(error => dispatch(fetchTextsFailure(error)))
}
