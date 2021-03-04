import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import withTodoItem from "./withTodoItem";
import style from './TodoItem.module.css';

const propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleMark: PropTypes.func.isRequired
}

const TodoItem = ({id, title, completed, handleMark}) => {
  return (
    <div className={style.item}>
      <p className={classnames({
        [style.title]: true,
        [style.completed]: completed
      })}>{id}. {title}</p>
      <button onClick={handleMark} className={classnames({
          [style.button]: true,
          [style.isHide]: completed
        }
      )}>&#10006;</button>
    </div>
  )
}

TodoItem.propTypes = propTypes;

export default withTodoItem(TodoItem);
