import express from 'express';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  clearTodos
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.delete('/clear', clearTodos); // clear all

export default router;
