import React, {useState} from 'react';

export default function Footer(props) {
  const { todos, clearTodos, filterTodos} = props
  const [selectState, setSelectState]= useState('all')
  
  return (
    <div>
      <span>{todos.length} items left</span>
        <label><input type="radio" name="filter" checked={selectState === 'all'} onChange={() => { setSelectState('all'); filterTodos('all') }}></input> All</label>
        <label><input type="radio" name="filter" checked={selectState === 'active'} onChange={() => { setSelectState('active'); filterTodos('active') }}></input> Active</label>
        <label><input type="radio" name="filter" checked={selectState === 'completed'} onChange={() => { setSelectState('completed'); filterTodos('completed') }}></input> Completed</label>
      <button onClick={clearTodos}>Clear all completed</button>
    </div>
  ) 
}