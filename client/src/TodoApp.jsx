import React, { useState, useEffect } from 'react';
import { axiosInstance } from './utils';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Load all todos
  const fetchTodos = async () => {
    try {
      const res = await axiosInstance.get('/todos');
      setTodos(res.data);
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new event
  const addTodo = async () => {
    if (!task.trim()) return;
    try {
      await axiosInstance.post('/todos', { task });
      setTask('');
      fetchTodos();
    } catch (error) {
      console.error('Add error:', error.message);
    }
  };

  // Update (toggle done)
  const toggleTodo = async (todo) => {
    try {
      await axiosInstance.put(`/todos/${todo.id}`, {
        task: todo.task,
        done: !todo.done,
      });
      fetchTodos();
    } catch (error) {
      console.error('Update error:', error.message);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      fetchTodos();
    } catch (error) {
      console.error('Delete error:', error.message);
    }
  };

  // Clear all
  const clearTodos = async () => {
    try {
      await axiosInstance.delete('/todos/clear');
      fetchTodos();
    } catch (error) {
      console.error('Clear error:', error.message);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>My Events</h2>

      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <input
          type="text"
          value={task}
          placeholder="Enter new event..."
          onChange={(e) => setTask(e.target.value)}
          style={{ flex: 1, padding: '10px' }}
        />
        <button onClick={addTodo} style={{ marginLeft: '10px' }}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No events yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.done ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => toggleTodo(todo)}
              >
                {todo.task}
              </span>
              <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <button onClick={clearTodos} style={{ marginTop: '15px', width: '100%' }}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default TodoApp;
