import React, {useState, useRef, useEffect} from 'react';

export default function TodoList(props) {
  const { showTodos, editTodo, completeTodo, deleteTodo} = props
  const [editId, setEditId] = useState(null)
  const editEl = useRef(null)

  useEffect(() => {
    if (editEl.current) {
      editEl.current.focus()
    }
  }, [editEl.current])

  function editTodos(e, itemId) {
    if (e.key === 'Enter' || e.type === 'blur') {
      editTodo(itemId, e.target.value)
      setEditId(null)
    }
  }

  return (
    <ul>
    {
      showTodos.map(it => {
        return (
          <li key={it.id}>
            <input type="checkbox" checked={it.completed} onChange={()=>completeTodo(it.id)}></input>
            {
              editId === it.id
              ?
              <input type="text" ref={editEl} defaultValue={it.content} onKeyUp={(e)=>editTodos(e, it.id)} onBlur={(e)=>editTodos(e, it.id)}></input>
              :
              <span className={it.completed?'completed':''} onDoubleClick={() => !it.completed && setEditId(it.id)}>{it.content}</span>
            }
            <button onClick={()=>deleteTodo(it.id)}>X</button>
          </li>
        )
      })
    }
    </ul>
  )
}
