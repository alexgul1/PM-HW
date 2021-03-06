import React from "react";

import styles from './Column.module.css';
import Card from "../Card/Card";
import CreateForm from "../CreateForm/CreateForm";

class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      votesCount: 0
    }

    this.createCard = this.createCard.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.upVoteHandler = this.changeRatingHandler.bind(this, 1);
    this.downVoteHandler = this.changeRatingHandler.bind(this, -1);
    this.changeText = this.changeText.bind(this);
  }

  createCard(input) {
    this.setState((state) => ({
      cards: [...state.cards, {
        id: performance.now(),
        text: input,
        rating: 0,
        createdAt: new Date()
      }].sort((a, b) => b.rating - a.rating)
    }));
  }

  changeRatingHandler(value, id) {
    this.setState((state) => ({
      cards: state.cards
        .map(card => id === card.id ? {
          ...card,
          rating: card.rating + value
        } : card)
        .sort((a, b) => b.rating - a.rating),
      votesCount: state.votesCount + 1
    }))
  }

  changeText(id, newValue) {
    this.setState((state) => ({
      cards: state.cards
        .map(card => id === card.id ? {
          ...card,
          text: newValue
        } : card)
    }))
  }

  sortByRating() {
    this.setState((state) => ({
      cards: state.cards.sort((a, b) => b.rating - a.rating)
    }));
  }

  render() {
    const {name, background} = this.props;
    const {cards, votesCount} = this.state;
    const {upVoteHandler, downVoteHandler, changeText} = this;

    return (
      <div className={styles['container']}>
        <div className={styles['header']}>
          <div className={styles['title']}>{name}</div>
          <div className={styles['stats']}>{cards.length} comments &bull; {votesCount} votes</div>
          <CreateForm createCard={this.createCard}/>
        </div>
        <div className={styles['list']}>
          {cards.map(card => <Card key={card.id} background={background} {...card}
                                   upVoteHandler={upVoteHandler} downVoteHandler={downVoteHandler}
                                   chandeTextHandler={changeText}/>)}
        </div>
      </div>
    )
  }
}

export default Column;
