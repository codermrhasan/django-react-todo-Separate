import axios from "axios";

const API_URL = "http://localhost:8000";

export default class TodosApiService {
  constructor() {}

  getTodos() {
    const url = `${API_URL}/api/v1/todos/`;
    return axios.get(url).then(response => response.data);
  }
  // getTodosByURL(link) {
  //   const url = `${API_URL}${link}`;
  //   return axios.get(url).then(response => response.data);
  // }
  getTodo(id) {
    const url = `${API_URL}/api/v1/todos/${id}/`;
    return axios.get(url).then(response => response.data);
  }
  deleteTodo(id) {
    const url = `${API_URL}/api/v1/todos/${id}/`;
    return axios.delete(url);
  }
  createTodo(todo) {
    const url = `${API_URL}/api/v1/todos/`;
    return axios.post(url, todo);
  }
  updateTodo(todo) {
    const url = `${API_URL}/api/v1/todos/${todo.id}/`;
    return axios.put(url, todo);
  }
}
