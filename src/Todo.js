import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.removeHandler = this.removeHandler.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  removeHandler(evt) {
    // console.log(this.props);
    this.props.removeTodo(this.props.id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdate(e) {
    e.preventDefault();
    //take new task data and pass up to parent
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button onClick={this.handleUpdate}>save</button>
        </form>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>edit</button>
          <button onClick={this.removeHandler}>x</button>
          <li
            className={this.props.isCompleted ? "completed" : ""}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
        </div>
      );
    }

    return result;
  }
}
