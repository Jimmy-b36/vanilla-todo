import express from 'express';
import { getAllTodos } from './db/main';
export const tasksRoutes = (router: express.Router) => {
  router.get('/todos', async (req, res) => {
    const todos = await getAllTodos();
    res.json(todos);
  });

  router.post('/todos', (req, res) => {
    res.send('Create a new task');
  });

  router.get('/todos/:id', (req, res) => {
    res.send('Get a task by ID');
  });

  router.put('/todos/:id', (req, res) => {
    res.send('Update a task by ID');
  });

  router.delete('/todos/:id', (req, res) => {
    res.send('Delete a task by ID');
  });

  return router;
};
