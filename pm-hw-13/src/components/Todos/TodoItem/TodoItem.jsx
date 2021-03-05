import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withTodoItem from "./withTodoItem";
import styles from './TodoItem.module.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleMark: PropTypes.func.isRequired
}

const TodoItem = ({id, title, completed, handleMark}) => {
  return (
    <div className={styles.item}>
      <p className={classnames({
        [styles.title]: true,
        [styles.completed]: completed
      })}>{id}. {title}</p>
      {/*TODO Dont render button if is completed task*/}
      <button onClick={handleMark} className={classnames({
          [styles.button]: true,
          [styles.isHide]: completed
        }
      )}>&#10006;</button>
    </div>
  )
}

TodoItem.propTypes = propTypes;

export default withTodoItem(TodoItem);
