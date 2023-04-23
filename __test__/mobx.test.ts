import { expect, test, beforeEach } from '@jest/globals';

import { Todo } from '../src/store/todo';

let todo: Todo;

const newTodoName = 'new todo';
const newNameUncompletedTodo = 'uncompleted todo';

beforeEach(() => {
  todo = new Todo();
  todo.addTodo(newTodoName);
});

test('add todo', () => {
  expect(todo.things[0].name).toBe(newTodoName);
});

test('remove todo', () => {
  todo.removeTodo(todo.things[0].id);
  expect(todo.things.length).toBe(0);
});

test('complete todo', () => {
  todo.completeTodo(todo.things[0].id, true);
  expect(todo.things[0].completed).toBeTruthy();
});

test('get completed todo', () => {
  todo.addTodo(newNameUncompletedTodo);
  todo.completeTodo(todo.things[0].id, true);
  todo.completeTodo(todo.things[1].id, false);
  expect(todo.completedTodo.length).toBe(1);
});

test('get uncompleted todo', () => {
  todo.addTodo(newNameUncompletedTodo);
  todo.completeTodo(todo.things[0].id, true);
  todo.completeTodo(todo.things[1].id, false);
  expect(todo.uncompletedTodo.length).toBe(1);
});
