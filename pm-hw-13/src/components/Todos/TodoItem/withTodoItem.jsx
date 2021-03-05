import React from 'react';
import API from '../../../config'

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    constructor(props) {
      super(props);

      this.markAsComplete = this.markAsComplete.bind(this);
    }

    markAsComplete() {
      const {id, callback} = this.props;

      API
        .patch(`/todos/${id}`, {completed: true})
        .then(({data}) => callback(data.id))
    }

    render() {
      const {id, title, completed} = this.props;
      const {markAsComplete} = this;

      return <Component id={id} title={title} completed={completed} handleMark={markAsComplete}/>
    }
  }

  return WithTodoItem;
}

export default withTodoItem;
