let itemId= 0

function addTodo(text) {
  return {
    type: 'add',
    payload: {
      id: itemId++,
      content: text,
      completed: false
    }
  }
}