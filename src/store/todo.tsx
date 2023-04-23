import { makeAutoObservable } from 'mobx';

export class Todo {
  things: { id: number; name: string; completed: boolean }[];

  constructor() {
    this.things = [];
    makeAutoObservable(this);
  }

  addTodo(name: string) {
    this.things.push({ id: Math.random(), name, completed: false });
  }

  removeTodo(id: number) {
    this.things = this.things.filter((thing) => thing.id !== id);
  }

  completeTodo(id: number, isComplete: boolean) {
    this.things = this.things.map((thing) =>
      thing.id === id ? { ...thing, completed: isComplete } : thing
    );
  }

  get completedTodo() {
    return this.things.filter((thing) => thing.completed);
  }

  get uncompletedTodo() {
    return this.things.filter((thing) => !thing.completed);
  }
}

export const todo = new Todo();
