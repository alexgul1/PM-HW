import React from 'react';

import API from '../../../config';

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    constructor(props) {
      super(props);

      this.handleMark = this.handleMark.bind(this);
    }

    handleMark() {
      const {id, markTodoAsComplete} = this.props;

      API
        .patch(`/todos/${id}`, {id, completed: true})
        .then(({data}) => markTodoAsComplete(data.id));
    }

    render() {
      const {id, title, completed, searchedText} = this.props;
      const {handleMark} = this;

      return <Component id={id} title={title} searchedText={searchedText}
                        completed={completed} handleMark={handleMark}/>
    }
  }

  return WithTodoItem;
}

export default withTodoItem;
