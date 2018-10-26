import { mapKeys, omit } from 'lodash'

import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

export default function PostsReducer(state = {}, action) {
  const { data } = action.payload

  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(data, 'id')
    case FETCH_POST:
      return {
        ...state,
        [data.id]: data,
      }
    case DELETE_POST:
      return omit(state, action.payload)
    default:
      return state
  }
}
