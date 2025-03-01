import express from "express";
import { getAllTasks } from "./db/main";
import { tasksRoutes } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello, World!");
});

const userRoutes = (router: express.Router) => {
  router.get("/user/:id", (req: express.Request, res: express.Response) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
  });

  // Multiple parameters
  router.get(
    "/users/:userId/posts/:postId",
    (req: express.Request, res: express.Response) => {
      const { userId, postId } = req.params;
      res.send(`User: ${userId}, Post: ${postId}`);
    },
  );

  return router;
};

app.use(userRoutes(express.Router()));
app.use(tasksRoutes(express.Router()));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
