import React from 'react';
import API from "../../config";
import TodoItem from "./TodoItem/TodoItem";

import style from './Todos.module.css'
import SearchBox from "./SearchBox/SearchBox";


class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser: undefined,
      users: [],
      todos: []
    }

    this.focusRef = React.createRef();

    this.getUserTodos = this.getUserTodos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();

    const {current} = this.focusRef;
    current.focus();

    if (current.value) {
      const todo = {
        userId: this.state.selectedUser,
        title: current.value,
        completed: false
      }

      API
        .post(`/todos/`, todo)
        .then(({data}) => {
          this.setState((state) => ({
            todos: [
              ...state.todos,
              data
            ]
          }))
        })

    }
    current.value = "";
  }


  componentDidMount() {
    API
      .get('/users')
      .then(({data}) => {
        this.setState({
          users: data,
          selectedUser: data[0].id
        });
        this.getUserTodos();
      })
  }

  render() {
    const {todos, users, selectedUser} = this.state;

    return (
      <div className={style.container}>
        <div className={style.actions}>
          <select className={style.select} value={selectedUser} onChange={this.handleChange}>
            {users.map((user) => <option value={user.id} key={user.id}>{user.name}</option>)}
          </select>
          <form className={style.newTodo} onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Type new todo here" ref={this.focusRef}/>
            <button>Add new todo</button>
          </form>
          <SearchBox/>
        </div>
        <div className={style.todoList}>
          {todos.map((todo) => <TodoItem key={todo.id} {...todo}/>)}
        </div>
      </div>
    )
  }
}

export default Todos;
