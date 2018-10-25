import { mapKeys } from 'lodash'

import { FETCH_POSTS, FETCH_POST } from '../actions'

export default function (state = {}, action) {
  const { data } = action.payload

  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(data, 'id')
    case FETCH_POST:
      return {
        ...state,
        [data.id]: data,
      }
    default:
      return state
  }
}
