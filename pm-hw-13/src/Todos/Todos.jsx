import React from 'react';
import style from './Todos.module.css'
import TodoItem from "./TodoItem/TodoItem";

class Todos extends React.Component {
  render() {
    return (
      <div>
        Todos block
        <div className={style.todoList}>
          <TodoItem id={1} title={'sadsadasd'} completed={true} />
          <TodoItem id={2} title={'sadsadasd'} completed={false} />
        </div>

      </div>

    )
  }
}

export default Todos;
