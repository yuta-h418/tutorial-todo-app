import React, { useState } from 'react';
import './Todo.css';

export default function TodoForm(props = { Done: false, Content: '', onSave: () => {} }) {
  const [done, setDone] = useState(!!props.Done);
  const [content, setContent] = useState(props.Content);

  const handleSave = () => {
    const data = {
      Done: done,
      Content: content,
    };

    props.onSave(data);

    // フォームの初期化
    setDone(false);
    setContent('');
  };

  return (
    <div className="todo">
      <div className="check">
        <input type="checkbox" checked={done}
          onChange={e => setDone(e.target.checked)} />
      </div>
      <div className="body">
        <textarea value={content}
          onChange={e => setContent(e.target.value)} />
      </div>
      <button className="btn" onClick={handleSave}>Save</button>
    </div>
  );
}
