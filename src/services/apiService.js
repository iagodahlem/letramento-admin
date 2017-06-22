import axios from 'axios'

const BASE_URL = 'http://localhost:3001/api'

const get = (url, config) => axios
  .get(`${BASE_URL}${url}`, config)

const post = (url, data, config) => axios
  .post(`${BASE_URL}${url}`, data, config)

export default {
  get,
  post,
}

export {
  get,
  post,
}
