import React, { useState, useEffect, useRef } from 'react';

import TodoList from "./components/TodoList";
import { ITodo } from './types/data';

import './App.css';

function App():JSX.Element {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [])

  const addToDo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false
      }])
      setValue('');
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown:  React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addToDo();
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id ));
  };

  const toggleTodo = (id:number): void => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        complete: !todo.complete,
      }
    }))
  };

  return (
    <div className="App">
      <div>
        <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
        <button onClick={addToDo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
