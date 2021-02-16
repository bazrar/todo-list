import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({ task: " " });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">new todo</label>
        <input
          type="text"
          placeholder="new todo"
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}
