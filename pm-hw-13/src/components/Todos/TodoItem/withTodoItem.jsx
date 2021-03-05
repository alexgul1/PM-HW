import React from 'react';
import API from '../../../config'

const withTodoItem = (Component) => {
  class WithTodoItem extends React.Component {
    constructor(props) {
      super(props);
      /*TODO Rewrite with parent function*/
      this.state = {
        isCompleted: this.props.completed
      }

      this.markAsComplete = this.markAsComplete.bind(this);

    }

    markAsComplete() {
      const {id} = this.props;

      API
        .patch(`/posts/${id}`, {completed: true})
        .then(({data}) => this.setState({isCompleted: data.completed}))
    }


    render() {
      const {id, title} = this.props;
      const {isCompleted} = this.state;
      const {markAsComplete} = this;
      return <Component id={id} title={title} completed={isCompleted} handleMark={markAsComplete}/>
    }
  }

  return WithTodoItem;
}

export default withTodoItem;
