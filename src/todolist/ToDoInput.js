import React, { useState, useEffect, useRef } from 'react';

const ToDoInput = ({ addItem }) => {
  const [text, setText] = useState('');
  const onChangeText = (e) => {
    setText(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText('');
  }
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  })
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChangeText} ref={ref} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default ToDoInput;