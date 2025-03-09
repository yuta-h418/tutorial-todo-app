import React from 'react';

export default function NameForm(props) {
  const handleTextInput = (e) => {
    props.onChangeName(e.target.value);
  };

  return (
    <div className="form">
      <input type="text"
        value={props.name}
        onChange={handleTextInput} />
    </div>
  );
}