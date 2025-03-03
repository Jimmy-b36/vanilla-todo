import dotenv from 'dotenv';
import pgp from 'pg-promise';
import { testData } from '../data/testData';

dotenv.config();

const pgpInstance = pgp();
const db = pgpInstance(`${process.env.DB_PATH}`);

const getAllTodos = async () => {
  const todos = await db.any('SELECT * FROM todos');
  return todos;
};

const createTestData = async () => {
  await db.tx(async t => {
    for (const user of testData.users) {
      await t.none(
        'Insert into users (id, name, email, password) values (${id}, ${name}, ${email}, ${password})',
        user
      );
    }

    for (const task of testData.tasks) {
      await t.none(
        'Insert into todos (id, task, description, complete, user_id) values (${id}, ${task}, ${description}, ${completed}, ${user_id})',
        task
      );
    }
  });
};

export { createTestData, getAllTodos };
