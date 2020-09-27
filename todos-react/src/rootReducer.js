import { combineReducers } from 'redux'

const defaultState = [{
  id: -1,
  content: 'zero',
  completed: false
}]

//通过redux提供的combineReducers方法可以更简单合并reducers
// export default combineReducers({
//   todos,
//   filterState
// })


//Reducers
export default function rootReducer(state= {}, action) {
  return {
    todos: todos(state.todos, action),
    filterState: filterState(state.filterState, action)
  }
}

function todos(state= defaultState, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        action.payload
      ]
    case 'delete':
      return state.filter(it => it.id !== action.payload.id)
    case 'edit':
      return state.map(it => {
        if (it.id === action.payload.id) {
          return action.payload
        } else {
          return it
        }
      })
    case 'complete':
      return state.map(it => {
        if (it.id === action.payload.id) {
          return {
            id: it.id,
            content: it.content,
            completed: !it.completed
          }
        } else {
          return it
        }
      })
    case 'clear':
      return state.filter(it => !it.completed)
    case 'completeAll':
      return state.map(it => {
        return {
          id: it.id,
          content: it.content,
          completed: action.payload.completed
        }
      })
    default:
      return state
  }
}

function filterState(state= 'all', action) {
  switch (action.type) {
    case 'active':
      return 'active'
    case 'completed':
      return 'completed'
    case 'all':
      return 'all'
    default:
      return state
  }

}


