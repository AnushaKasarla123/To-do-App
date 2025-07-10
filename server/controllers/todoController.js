// server/controllers/todoControllers.js

let todos = []; // In-memory array
let id = 1;

export const getTodos = (req, res) => {
  res.json(todos);
};

export const addTodo = (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });

  const newTodo = { id: id++, task, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req, res) => {
  const { id } = req.params;
  const { task, done } = req.body;
  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  todo.task = task ?? todo.task;
  todo.done = done ?? todo.done;
  res.json(todo);
};

export const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));

  if (index === -1) return res.status(404).json({ error: 'Todo not found' });

  todos.splice(index, 1);
  res.json({ message: 'Deleted successfully' });
};

// Optional: Clear all todos
export const clearTodos = (req, res) => {
  todos = [];
  id = 1;
  res.json({ message: 'All todos cleared' });
};
