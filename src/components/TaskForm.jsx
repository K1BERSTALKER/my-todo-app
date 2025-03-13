import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      deadline: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { description, deadline } = this.state;
    if (!description.trim() || !deadline.trim()) {
      alert("Barcha maydonlarni to‘ldiring!");
      return;
    }
    this.props.onAddTask({ description, deadline });
    this.setState({ description: "", deadline: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-3">
        <div className="mb-2">
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Vazifa tavsifi"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="date"
            name="deadline"
            value={this.state.deadline}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Qo‘shish
        </button>
      </form>
    );
  }
}

export default TaskForm;
