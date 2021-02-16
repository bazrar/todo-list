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
      <form onSubmit={this.handleSubmit} className="input_div">
        {/* <label htmlFor="task">new todo</label> */}
        <input
          className="input"
          type="text"
          placeholder="What do you want to do..."
          id="task"
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="addButton" onClick={this.handleSubmit}>
          <i class="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}
