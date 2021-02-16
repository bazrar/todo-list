import React, { Component } from "react";
import "./Todo.css";
import "./App.css";

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
        <form className="input_div" onSubmit={this.handleUpdate}>
          <input
            className="edit_input"
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="addButton" onClick={this.handleUpdate}>
            <i class="fas fa-plus"></i>
          </button>
        </form>
      );
    } else {
      result = (
        <div className="item">
          <div className=" item_input ">
            <li
              className=""
              className={this.props.isCompleted ? "completed" : ""}
              onClick={this.handleToggle}
            >
              {this.props.task}
            </li>
          </div>
          <button className="editButton" onClick={this.toggleForm}>
            <i class="fas fa-pen"></i>
          </button>
          <button className="removeButton" onClick={this.removeHandler}>
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      );
    }

    return result;
  }
}
