import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import TodosList from "./components/TodosList";
import TodoCreateUpdate from "./components/TodoCreateUpdate";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const BaseLayout = () => (
  <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Django React Todo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Todos</Nav.Link>
          <Nav.Link href="/create/">Create Todos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <div>
      <Route path="/" exact component={TodosList} />
      <Route path="/create/" component={TodoCreateUpdate} />
      <Route path="/todos/:id" exact component={TodoCreateUpdate} />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    );
  }
}

export default App;
