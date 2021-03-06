import React, {useRef} from "react";
import PropTypes from 'prop-types';

import API from '../../../config';

import styles from "./NewTodoForm.module.css";

const propTypes = {
  userId: PropTypes.number,
  createTodo: PropTypes.func.isRequired
}

const NewTodoForm = ({userId, createTodo}) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const {current} = inputRef;
    current.focus();

    if (!current.value) {
      return;
    }

    const newTodo = {
      userId,
      title: current.value,
      completed: false
    }

    API
      .post('/todos/', newTodo)
      .then(({data}) => createTodo(data))

    current.value = "";
  }

  return (
    <form className={styles.newTodo} onSubmit={handleSubmit}>
      <input type="text" placeholder="Type new todo here" ref={inputRef}/>
      <button>Add new todo</button>
    </form>
  )
}

NewTodoForm.propTypes = propTypes;

export default NewTodoForm;
