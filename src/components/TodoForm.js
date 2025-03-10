import React, { useState } from 'react';
import './Todo.css';

export default function TodoForm(props = { Done: false, Content: '' }) {
  const [done, setDone] = useState(!!props.Done);
  const [content, setContent] = useState(props.Content || '');

  const handleSave = () => {
    const data = {
      ...props, // 受け取ったpropsを展開
      Done: done,
      Content: content,
    };

    props.onSave(data);
    setDone(false);
    setContent('');
  };

  return (
    <div className="todo">
      <div className="check">
        <input 
          type="checkbox" 
          checked={done}
          onChange={e => setDone(e.target.checked)} 
        />
      </div>
      <div className="body">
        <textarea 
          value={content}
          onChange={e => setContent(e.target.value)} 
        />
      </div>
      <button className="btn" onClick={handleSave}>Save</button>
      {/* IDが存在する場合はキャンセルボタンを表示 */}
      {props.ID && (
        <button className="btn" onClick={props.onCancel}>Cancel</button>
      )}
    </div>
  );
}
