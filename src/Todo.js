import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.removeHandler = this.removeHandler.bind(this);
  }

  removeHandler(evt) {
    console.log(this.props);
    this.props.removeTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <button>edit</button>
        <button onClick={this.removeHandler}>x</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}
