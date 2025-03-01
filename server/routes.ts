import express from "express";
import { getAllTasks } from "./db/main";
export const tasksRoutes = (router: express.Router) => {
  router.get("/tasks", async (req, res) => {
    const tasks = await getAllTasks();
    res.json(tasks);
  });

  router.post("/tasks", (req, res) => {
    res.send("Create a new task");
  });

  router.get("/tasks/:id", (req, res) => {
    res.send("Get a task by ID");
  });

  router.put("/tasks/:id", (req, res) => {
    res.send("Update a task by ID");
  });

  router.delete("/tasks/:id", (req, res) => {
    res.send("Delete a task by ID");
  });

  return router;
};
