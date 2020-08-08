import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnirocketbox.herokuapp.com'
})

export default api