import apiService from './apiService'
import authService from './authService'

const fetch = () => apiService
  .get('/texts')
  .then(response => response.data)

const create = (text) => apiService
  .post('/texts', text, { headers: authService.authorization() })
  .then(response => response.data)

export default {
  fetch,
  create,
}

export {
  fetch,
  create,
}
