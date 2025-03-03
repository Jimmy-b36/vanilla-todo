import { ITodo, useTodos } from './composables/useTodos.service';

const { getTodosApi } = useTodos();

export async function getTodos() {
  const todos: ITodo[] = await getTodosApi();

  document.querySelector('#todos')!.innerHTML = `
  <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody id="todos">${todos
          .map(
            todo => `
              <tr class="todo-wrapper">
                <td>${todo.task}</td>
                <td>${todo.description}</td>
                <td><input type="checkbox" ${
                  todo.completed ? 'checked' : ''
                } /></td>
              </tr>
            `
          )
          .join('')}</tbody>
  `;
}

const getTodosButton = document.querySelector('#get-todos');
getTodosButton!.addEventListener('click', getTodos);
