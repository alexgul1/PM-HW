import React, {useRef} from 'react';

import styles from './SearchBox.module.css'

const SearchBox = ({updateTodoList}) => {

  const inputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    inputRef.current.focus();
  }

  const changeHandler = ({target}) => {
    updateTodoList(target.value)
  }

  return (
    <form className={styles.searchBox} onSubmit={submitHandler}>
      <input type="text" placeholder="Type here to search" onChange={changeHandler} ref={inputRef}/>
      <button>Search</button>
    </form>
  )
}

export default SearchBox;
