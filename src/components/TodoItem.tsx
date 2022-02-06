import React from 'react';

import { ITodo } from "../types/data";

interface ITodoItem extends ITodo{
  removeTodo: (id:number) => void,
  toggleTodo: (id:number) => void,
}

const TodoItem: React.FC <ITodoItem> = ({ id, title, complete, removeTodo, toggleTodo }) => {
  return (
    <div>
      <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
      {title}
      <button type="button" onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export default TodoItem;
