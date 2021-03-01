import React from "react";
import classnames from 'classnames';

import styles from "./Card.module.css";

class Card extends React.Component{

  constructor(props) {
    super(props);

    this.onDownVoteClick = this.onDownVoteClick.bind(this);
    this.onUpvoteClick = this.onUpvoteClick.bind(this);
  }

  onDownVoteClick() {
    this.props.downVoteHandler(this.props.id);
}

  onUpvoteClick() {
    this.props.upVoteHandler(this.props.id);
  }

  render() {
    const {background, text, rating, createdAt} = this.props;
    const {onDownVoteClick, onUpvoteClick} = this;
    return (
      <div className={styles['card']}>
        <div className={styles['text']}>{text}</div>
        <div className={styles['info']} style={{background: background}}>
          <p>{createdAt.toLocaleString()}</p>
          <div className={styles['votes']}>
            <button className={classnames(styles['vote-btn'], styles['downvote'])} onClick={onDownVoteClick}>
              <i className={classnames("fas", "fa-arrow-down")} />
            </button>
            <p className={styles["rating"]}>{rating}</p>
            <button className={classnames(styles['vote-btn'], styles['upvote'])} onClick={onUpvoteClick}>
              <i className={classnames("fas", "fa-arrow-up")}/>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
