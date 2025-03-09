import React, { useState } from 'react';
import './App.css';
import Message from './components/Message';
import NameForm from './components/NameForm';

export default function App() {
  const message = 'Hello, React!';
  const libraries = [
    'Laravel',
    'React',
    'MySQL'
  ];
  const [name, setName] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/* JSXに式を埋め込む */}
          {message}

          {/* 配列表示 */}
          {libraries.map(item => <p>{item}</p>)}

          {/* 子から親に値を渡す/ユーザーの入力を扱う: state */}
          <NameForm 
            name={name}
            onChangeName={value => setName(value)} 
          />

          {/* コンポーネントに値を渡す: props */}
          <Message name={name} />

        </p>
      </header>
    </div>
  );
}
