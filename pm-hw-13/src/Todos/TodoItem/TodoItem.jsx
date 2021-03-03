import React from 'react';
import style from './TodoItem.module.css';
import classnames from 'classnames';

const TodoItem = ({id, title, completed}) => {

  return (
    <div className={style.item}>
      <p className={classnames({
        [style.title]: true,
        [style.completed]: completed
      })}>{id}. {title}</p>
      <input className={style.toggle} type="checkbox" defaultChecked={completed} />
    </div>
  )
}

export default TodoItem;
