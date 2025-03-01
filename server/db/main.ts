const pgp = require("pg-promise")(/* options */);

const db = pgp(`${process.env.DB_PATH}`);

const getAllTasks = async () => {
  const tasks = await db.any("SELECT * FROM tasks");
  return tasks;
};

export { getAllTasks };
