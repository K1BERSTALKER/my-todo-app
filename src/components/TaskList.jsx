import React, { Component } from "react";

class TaskList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.tasks.length === 0 ? (
          <li className="list-group-item text-center">Vazifalar yo‘q</li>
        ) : (
          this.props.tasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed
                  ? "text-decoration-line-through text-success"
                  : ""
              }`}
            >
              <div>
                <strong>{task.description}</strong> <br />
                <small className="text-muted">Muddat: {task.deadline}</small>
              </div>
              <div>
                <button
                  className={`btn btn-sm ${
                    task.completed ? "btn-warning" : "btn-success"
                  } me-2`}
                  onClick={() => this.props.onToggleComplete(task.id)}
                >
                  {task.completed ? "Bekor qilish" : "Bajarildi"}
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.onDeleteTask(task.id)}
                >
                  O‘chirish
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    );
  }
}

export default TaskList;
