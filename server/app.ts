import cors from 'cors';
import express from 'express';
import { createTestData, getAllTodos } from './db/main';
import { tasksRoutes } from './routes';

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();
const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello, World!');
});

router.get('/test', (req: express.Request, res: express.Response) => {
  createTestData();
  res.send('Test route');
});

const userRoutes = (router: express.Router) => {
  router.get('/user/:id', (req: express.Request, res: express.Response) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
  });

  // Multiple parameters
  router.get(
    '/users/:userId/posts/:postId',
    (req: express.Request, res: express.Response) => {
      const { userId, postId } = req.params;
      res.send(`User: ${userId}, Post: ${postId}`);
    }
  );

  return router;
};

app.use(userRoutes(router));
app.use(tasksRoutes(router));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
