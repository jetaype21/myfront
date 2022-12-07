import axios from 'axios'

export default axios.create({
  baseURL: 'https://enyoi-backend.onrender.com/api'
})