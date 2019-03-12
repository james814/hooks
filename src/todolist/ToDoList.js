import React, { useState } from 'react';
import ToDoInput from './ToDoInput';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const addItem = text => {
    setItems([...items, { id: Date.now(), text }])
  }
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id))
  }
  const resetItem = () => {
    setItems([])
  }
  return (
    <div>
      <ToDoInput addItem={addItem} />
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => removeItem(item.id)}>{item.text}</li>
        ))}
      </ul>
      <button onClick={resetItem}>reset</button>
    </div>
  );
}

export default ToDoList;
