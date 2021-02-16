import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import "./App.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(todo) {
    // console.log(todo);
    this.setState((st) => ({
      todos: [...st.todos, { ...todo, id: uuid(), completed: false }],
    }));
  }

  remove(id) {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }

  update(id, updatedTask) {
    // let todos = [...this.state.todos]
    // let todo = todos.filter(todo => id === todo.id)
    // todo[task] = updatedTask;
    console.log(id, updatedTask);
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    let todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        isCompleted={todo.completed}
        toggleTodo={this.toggleCompletion}
        removeTodo={this.remove}
        updateTodo={this.update}
      />
    ));
    return (
      <div className="app-contanier">
        <h1 className="flux">
          <span className="neon">todo</span> list
        </h1>
        <NewTodoForm createTodo={this.create} />
        <ul className="container">{todos}</ul>
      </div>
    );
  }
}
