import React, { useState } from 'react';
// import uuid from 'uuid';
import {v4 as uuid} from "uuid"; 
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      ID: 1,
      Content: 'hoge',
      Done: true,
      CreatedAt: (new Date()).toISOString(),
      UpdatedAt: (new Date()).toISOString(),
    },
  ]);

  const handleCreate = data => {
    // IDを採番
    data.ID = uuid();
    // 現在日時を取得
    const now = (new Date()).toISOString();
    data.CreatedAt = now;
    data.UpdatedAt = now;
    // 末尾に追加
    setTodos([...todos, data]);
  };


  return (
    <div className="App">

      <TodoForm onSave={handleCreate} />

      {todos.map(item => <Todo key={item.ID} {...item} />)}

    </div>
  );
}

export default App;