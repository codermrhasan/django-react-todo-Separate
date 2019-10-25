import axios from "axios";

const API_URL = "http://localhost:8000";

export default class Todos {
  constructor() {}

  getTodos() {
    const url = `${API_URL}/api/v1/todos/`;
    return axiois.get(url).then(response => response.data);
  }
  getTodosByURL(link) {
    const url = `${API_URL}${link}`;
    return axios.get(url).then(response => response.data);
  }
  getTodo(pk) {
    const url = `${API_URL}/api/v1/todos/${pk}`;
    return axios.get(url).then(response => response.data);
  }
  deleteTodo(todo) {
    const url = `${API_URL}/api/v1/todos/${todo.pk}`;
    return axios.delete(url);
  }
  createTodo(todo) {
    const url = `${API_URL}/api/v1/todos/`;
    return axios.post(url, todo);
  }
  createTodo(todo) {
    const url = `${API_URL}/api/v1/todos/${todo.pk}`;
    return axios.put(url, todo);
  }
}
