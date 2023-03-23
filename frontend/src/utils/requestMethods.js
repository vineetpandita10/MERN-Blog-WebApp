import axios from 'axios'

const baseURL = "https://mern-blog-g13y.onrender.com/"
export const Axios = axios.create({baseURL})