import * as type from '../types'

const initialState = {
  visited: [],
  current: 'START',
  children: [],
  found: false,
  steps: 0,
}

export default function traverseReducer(state = initialState, action) {
  switch (action.type) {
    case type.NEXT:
      return {
        ...state,
        visited: action.payload.visited,
        current: action.payload.current,
        children: action.payload.children,
        found: action.payload.found,
        steps: state.steps + 1,
      }
    case type.RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
