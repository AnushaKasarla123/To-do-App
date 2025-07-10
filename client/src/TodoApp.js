import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/api/todos');
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    if (!task.trim()) return;
    await axios.post('http://localhost:5000/api/todos', { task });
    setTask('');
    fetchTodos();
  };

  const updateTodo = async (id) => {
    await axios.put(`http://localhost:5000/api/todos/${id}`, { task });
    setEditingId(null);
    setTask('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>📅 Your Events</h2>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Type your event here..."
          value={task}
          maxLength={100}
          onChange={(e) => setTask(e.target.value)}
          style={{
            flexGrow: 1,
            padding: '10px',
            borderRadius: '4px 0 0 4px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        />
        <button
          onClick={editingId ? () => updateTodo(editingId) : addTodo}
          style={{
            padding: '10px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '0 4px 4px 0',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          {editingId ? 'Update' : 'Add'}
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              padding: '8px',
              marginBottom: '8px',
              background: '#f9f9f9',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{todo.task}</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => {
                  setEditingId(todo.id);
                  setTask(todo.task);
                }}
                style={{
                  backgroundColor: '#ffc107',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
