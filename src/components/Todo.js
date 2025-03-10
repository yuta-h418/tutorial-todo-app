import React, { useState } from 'react';
import TodoForm from './TodoForm';
import './Todo.css';

export default function Todo(props) {
  const [edit, setEdit] = useState(false);

  // TodoFormに引き渡す更新メソッド
  const handleUpdate = data => {
    props.onSave(data);
    setEdit(false); // 編集モード終了
  };

  if (edit) {
    return (
      <TodoForm
        {...props}
        onSave={handleUpdate}
        onCancel={() => setEdit(false)}
      />
    );
  }

  return (
    <div className="todo">
      <div className="check">
        {/* Doneがtrueならチェックマークを表示 */}
        {props.Done && <span>✓</span>}
      </div>
      <div className="body">
        <div className="header">
          <span className="date">CreatedAt: {props.CreatedAt}</span>
          <span className="date">UpdatedAt: {props.UpdatedAt}</span>
        </div>
        {/* contentをそのまま表示 */}
        <div className="content">{props.Content}</div>
      </div>
      <button className="btn" onClick={() => setEdit(true)}>Edit</button>
      <button className="btn" onClick={() => props.onDelete(props.ID)}>Delete</button>
    </div>
  );
}
