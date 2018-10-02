import { mapKeys } from 'lodash'

import { FETCH_POSTS } from '../actions/index'

const initialState = null

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return mapKeys(action.payload.data, 'id')
    default:
      return state
  }
}
