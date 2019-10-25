import React, { Component } from "react";
import TodosApiService from "../../src/TodosApiService";

const todosApiService = new TodosApiService();

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    todosApiService
      .getTodos()
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(err => console.log(err));
  }
  handleDelete(id) {
    todosApiService.deleteTodo(id).then(() => {
      var newTodos = this.state.todos.filter(todo => todo.id !== id);
      this.setState({ todos: newTodos });
    });
  }
  render() {
    return (
      <div className="todos--list">
        <table className="table">
          <thead key="thead">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => this.handleDelete(todo.id)}>
                    Delete
                  </button>
                  <a href={`/todos/${todo.id}/`}>Update</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
