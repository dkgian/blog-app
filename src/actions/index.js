import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const CREATE_POST = 'CREATE_POST'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = 'some_api_key_!'

export default function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request,
  }
}

export function fetchPost({ id }) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request,
  }
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request,
  }
}
