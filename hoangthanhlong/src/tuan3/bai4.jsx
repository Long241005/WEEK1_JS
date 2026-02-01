import React, { useState, useCallback } from 'react';

const TodoItem = React.memo(({ todo, onDelete }) => {
  console.log("render item", todo.id);
  return (
    <li>
      {todo.text} 
      <button onClick={() => onDelete(todo.id)}>Xóa</button>
    </li>
  );
});

function Bai4() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React' },
    { id: 2, text: 'Làm bài tập' }
  ]);

  const handleAdd = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText('');
    }
  };

  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <div className="exercise-box" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }} >
      <h3>Bài 4: Todo List (Memo & useCallback)</h3>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Task..."
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default Bai4;