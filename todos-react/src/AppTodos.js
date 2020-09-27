import { connect } from 'react-redux'
import AppTodos from './Components/AppTodosComponent'

let itemId = 0

//为props映射数据
function mapStateToProps(state) {
  return {
    todos: state.todos,
    showTodos: getVisibleTodos(state.todos, state.filterState),
  }
}

//为props映射修改数据的方法（所有方法均需提供action）
function mapDispatchToProps(dispatch) {
  return {
    addTodo: content => dispatch(addTodo(content)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    editTodo: (itemId, content) => dispatch(editTodo(itemId, content)),
    completeTodo: itemId => dispatch(completeTodo(itemId)),
    clearTodos: () => dispatch(clearTodos()),
    completeAll: selectState => dispatch(completeAll(selectState)),
    filterTodos: filterState=> dispatch(filterTodos(filterState))
  }
}

//使用connect方法生成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppTodos);



//创建action生成器
function addTodo(content) {
  return {
    type: 'add',
    payload: {
      id: itemId++,
      content: content,
      completed: false
    }
  }
}

function deleteTodo(itemId) {
  return {
    type: 'delete',
    payload: {
      id: itemId
    }
  }
}

function editTodo(itemId, content) {
  return {
    type: 'edit',
    payload: {
      id: itemId,
      content: content,
      completed: false
    }
  }
}

function completeTodo(itemId) {
  return {
    type: 'complete',
    payload: {
      id: itemId,
    }
  }
}

function clearTodos() {
  return {
    type: 'clear'
  }
}

function completeAll(selectState) {
  return {
    type: 'completeAll',
    payload:{
      completed: !selectState
    }
  }
}

function filterTodos(filterState) {
  return {
    type: filterState
  }
}

function getVisibleTodos(todos, filterState) {
  switch (filterState) {
    case 'active':
      return todos.filter(it => !it.completed)
    case 'completed':
      return todos.filter(it => it.completed)
    default:
      return todos
  }
}


