import React from 'react';

import API from "../../config";
import TodoItem from "./TodoItem/TodoItem";
import SearchBox from "./SearchBox/SearchBox";
import NewTodoForm from "./NewTodoForm/NewTodoForm";

import styles from './Todos.module.css';

class Todos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      todos: [],
      searchedText: "",
      selectedUser: undefined,
    }

    this.getUserTodos = this.getUserTodos.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.markTodoAsComplete = this.markTodoAsComplete.bind(this);
    this.updateTodoList = this.updateTodoList.bind(this);
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
        {
          ...data,
          id: performance.now()
        }
      ]
    }))
  }

  updateTodoList(value) {
    this.setState({searchedText: value});
  }

  markTodoAsComplete(id) {
    this.setState(({todos}) => ({
      todos: todos.map((todo) => id === todo.id ? {
        ...todo,
        completed: true
      } : todo)
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
    const {todos, users, selectedUser, searchedText} = this.state;
    const {handleChange, createTodo, markTodoAsComplete, updateTodoList} = this;

    return (
      <div className={styles.container}>
        <div className={styles.actions}>
          <select className={styles.select} value={selectedUser} onChange={handleChange}>
            {users.map((user) => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
          <NewTodoForm userId={selectedUser} createTodo={createTodo}/>
          <SearchBox updateTodoList={updateTodoList}/>
        </div>
        <div className={styles.todoList}>
          {todos.map((todo) => <TodoItem key={todo.id} {...todo} searchedText={searchedText}
                                         markTodoAsComplete={markTodoAsComplete}/>)}
        </div>
      </div>
    )
  }
}

export default Todos;
