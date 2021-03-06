import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import withTodoItem from "./withTodoItem";

import styles from './TodoItem.module.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleMark: PropTypes.func.isRequired,
  searchedText: PropTypes.string.isRequired
}

const TodoItem = ({title, completed, searchedText, handleMark}) => {
  const createMarkup = () => {
    if (!searchedText) {
      return {__html: title};
    }

    const newTitle = title.replace(
      new RegExp(searchedText, "gi"),
      match => `<strong>${match}</strong>`
    );

    return {__html: newTitle};
  }

  return (
    <div className={styles.item}>
      <p className={classnames({
        [styles.title]: true,
        [styles.completed]: completed
      })} dangerouslySetInnerHTML={createMarkup()}/>
      {!completed && <button onClick={handleMark} className={styles.button}>&#10006;</button>}
    </div>
  );
}

TodoItem.propTypes = propTypes;

export default withTodoItem(TodoItem);
