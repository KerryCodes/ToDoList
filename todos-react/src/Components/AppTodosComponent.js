import React from 'react';
import '../AppTodos.css'
import Footer from './Footer'
import TodoList from './TodoList';

//展示组件
export default function AppTodos(props) {
  const { todos, showTodos, addTodo, deleteTodo, editTodo, completeTodo, clearTodos, completeAll, filterTodos } = props
  let selectAllState = todos.length && todos.every(it => it.completed)
  
  function addTodos(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      addTodo(e.target.value)
      e.target.value = ''
    }
  }
  
  return (
    <div>
      <h1>todos</h1>
      <input type="checkbox" checked={selectAllState} onChange={()=>completeAll(selectAllState)}></input>
      <input type="text" onKeyUp={addTodos}></input>
      <TodoList showTodos={showTodos} editTodo={editTodo} completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoList>
      {
        todos.length ? <Footer todos={todos} clearTodos={clearTodos} filterTodos={filterTodos}></Footer>
        :
        ''
      }
      </div>
  );
}