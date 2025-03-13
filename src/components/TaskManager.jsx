import React, { Component } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    };
  }

  componentDidMount() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      this.setState({ tasks: savedTasks });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        { id: Date.now(), ...task, completed: false },
      ],
    }));
  };

  toggleComplete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center">To-Do List</h2>
        <TaskForm onAddTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          onToggleComplete={this.toggleComplete}
          onDeleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
