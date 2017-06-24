import axios from 'axios'

// const BASE_URL = 'http://localhost:3001/api'
const BASE_URL = 'https://letramento-api.herokuapp.com/api'

const get = (url, config) => axios
  .get(`${BASE_URL}${url}`, config)

const post = (url, data, config) => axios
  .post(`${BASE_URL}${url}`, data, config)

const put = (url, data, config) => axios
  .put(`${BASE_URL}${url}`, data, config)

export default {
  get,
  post,
  put,
}

export {
  get,
  post,
  put,
}
