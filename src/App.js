import React, { useState } from 'react';
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
    const now = (new Date()).toISOString('ja-JP');
    data.CreatedAt = now;
    data.UpdatedAt = now;
    // 末尾に追加
    setTodos([...todos, data]);
  };

  const handleUpdate = data => {
    const now = (new Date()).toISOString();
    data.UpdatedAt = now;
  
    setTodos(todos.map(item => {
      // IDが一致する要素を差し替える
      if (item.ID === data.ID) {
        return data;
      }
      return item;
    }));
  };

  const handleDelete = id => {
    // IDが一致する項目のindexを取得
    const index = todos.findIndex(item => item.ID === id);
    if (index >= 0) {
      // 新しい配列を生成
      const newList = [...todos];
      // 配列から該当要素を削除
      newList.splice(index, 1);
      // stateに反映
      setTodos(newList);
    }
  };
  
  return (
    <div className="App">

      {/* <Todo key={item.ID} {...item} onSave={handleUpdate} onDelete={handleDelete} /> */}

      <TodoForm onSave={handleCreate} />

      {todos.map(item => (
        <Todo key={item.ID} {...item}
          onDelete={handleDelete}
        />)
      )}

    </div>
  );
}

export default App;