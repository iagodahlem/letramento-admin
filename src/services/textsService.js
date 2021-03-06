import apiService from './apiService'
import authService from './authService'

const fetchTexts = () => apiService
  .get('/users/texts', { headers: authService.authorization() })
  .then(response => response.data)

const showText = (id) => apiService
  .get(`/texts/${id}`)
  .then(response => response.data)

const createText = (text) => apiService
  .post('/texts', text, { headers: authService.authorization() })
  .then(response => response.data)

const updateText = (id, text) => apiService
  .put(`/texts/${id}`, text, { headers: authService.authorization() })
  .then(response => response.data)

export default {
  fetchTexts,
  showText,
  createText,
  updateText,
}

export {
  fetchTexts,
  showText,
  createText,
  updateText,
}
