import React from 'react';
import API from "../../config";
import TodoItem from "./TodoItem/TodoItem";
import SearchBox from "./SearchBox/SearchBox";
import NewTodoForm from "./NewTodoForm/NewTodoForm";

import styles from './Todos.module.css'


class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: undefined,
      users: [],
      todos: []
    }

    this.getUserTodos = this.getUserTodos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
  }

  getUserTodos() {
    API
      .get(`/users/${this.state.selectedUser}/todos`)
      .then(({data}) => this.setState({todos: data}));
  }

  handleChange(event) {
    this.setState({
        selectedUser: +event.target.value
      },
      this.getUserTodos);
  }

  createTodo(data) {
    this.setState((state) => ({
      todos: [
        ...state.todos,
        data
      ]
    }))
  }

  componentDidMount() {
    API
      .get('/users')
      .then(({data}) => {
        this.setState({
          users: data,
          selectedUser: data[0].id
        }, this.getUserTodos);
      })
  }

  render() {
    const {todos, users, selectedUser} = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.actions}>
          <select className={styles.select} value={selectedUser} onChange={this.handleChange}>
            {users.map((user) => <option value={user.id} key={user.id}>{user.name}</option>)}
          </select>
          <NewTodoForm userId={selectedUser} callback={this.createTodo}/>
          <SearchBox/>
        </div>
        <div className={styles.todoList}>
          {todos.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
        </div>
      </div>
    )
  }
}

export default Todos;
