import React, { Component } from "react";
import TodosApiService from "../../src/TodosApiService";

const todosApiService = new TodosApiService();

export class TodoCreateUpdate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    if (params && params.id) {
      todosApiService.getTodo(params.id).then(todo => {
        this.refs.title.value = todo.title;
        this.refs.description.value = todo.description;
        this.refs.completed.value = todo.completed;
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      match: { params }
    } = this.props;
    if (params && params.id) {
      this.handleUpdate(params.id);
    } else {
      this.handleCreate();
    }
  }
  handleCreate() {
    todosApiService
      .createTodo({
        title: this.refs.title.value,
        description: this.refs.description.value,
        completed: this.refs.completed.checked
      })
      .then(() => {
        alert("Todo Created ");
      })

      .catch(() => {
        alert("Error! Please check the form.");
      });
  }

  handleUpdate(id) {
    todosApiService
      .updateTodo({
        id: id,
        title: this.refs.title.value,
        description: this.refs.description.value,
        completed: this.refs.completed.checked
      })
      .then(() => {
        alert("Todo updated!");
      })
      .catch(() => {
        alert("Error! Please check your form.");
      });
  }

  render() {
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" className="form-control" ref="title" />
          </div>
          <div className="form-group">
            <label>Description:</label>

            <input type="text" className="form-control" ref="description" />
          </div>
          <div className="form-group">
            <input type="checkbox" ref="completed" />
            <label className="p-2">Completed</label>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TodoCreateUpdate;
