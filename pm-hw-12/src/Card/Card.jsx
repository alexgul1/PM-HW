import React from "react";
import classnames from 'classnames';

import styles from "./Card.module.css";

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: this.props.text,
      isEdit: false
    }

    this.focusRef = React.createRef();

    this.onDownVoteClick = this.onDownVoteClick.bind(this);
    this.onUpvoteClick = this.onUpvoteClick.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
    this.controlsHandler = this.controlsHandler.bind(this);
  }

  onDownVoteClick() {
    this.props.downVoteHandler(this.props.id);
  }

  onUpvoteClick() {
    this.props.upVoteHandler(this.props.id);
  }

  toggleVisibility() {
    this.setState((state) => ({
      isEdit: !state.isEdit
    }), () => {
      this.state.isEdit && this.focusRef.current.focus();
    });
  }

  controlsHandler({keyCode}) {
    if (keyCode === 27) {
      this.toggleVisibility();
      return;
    }
    if (keyCode === 13) {
      if (this.state.input) {
        this.toggleVisibility()
        this.props.chandeTextHandler(this.props.id, this.state.input)
      }
    }
  }

  onEditHandler(event) {
    this.setState({
      input: event.target.value.trim()
    })
  }

  render() {
    const {background, text, rating, createdAt} = this.props;
    const {onDownVoteClick, onUpvoteClick, toggleVisibility, controlsHandler, onEditHandler, focusRef} = this;

    return this.state.isEdit ?
      (
        <div className={styles['update-box']}>
        <textarea className={styles['update-textarea']} defaultValue={text} onInput={onEditHandler}
                  onKeyDown={controlsHandler} ref={focusRef}/>
          <p className={styles['hints-box']}>
            <span className={styles["hint"]}>enter</span> to update, <span className={styles["hint"]}>escape</span> to
            discard
          </p>
        </div>
      ) :
      (<div className={styles['card']}>
        <div className={styles['text']}>
          <p>{text}</p>
          <button onClick={toggleVisibility} className={styles['edit-btn']}><i className="fas fa-pen"/></button>
        </div>
        <div className={styles['info']} style={{background: background}}>
          <p>{createdAt.toLocaleString()}</p>
          <div className={styles['votes']}>
            <button className={classnames(styles['vote-btn'], styles['downvote'])} onClick={onDownVoteClick}>
              <i className={classnames("fas", "fa-arrow-down")}/>
            </button>
            <p className={styles["rating"]}>{rating}</p>
            <button className={classnames(styles['vote-btn'], styles['upvote'])} onClick={onUpvoteClick}>
              <i className={classnames("fas", "fa-arrow-up")}/>
            </button>
          </div>
        </div>
      </div>);
  }
}

export default Card;
