import React from "react";
import styles from "./CreateForm.module.css"

class CreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      input: ""
    };


    this.changeVisibility = this.changeVisibility.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  inputHandler(event) {
    this.setState({
      input: event.target.value.trim()
    })
  }

  changeVisibility() {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }


  submitForm(event) {
    event.preventDefault();
    const {input} = this.state;

    if(input) {
      this.setState({
        input: ""
      })
      this.changeVisibility();
      this.props.createCard(input);

    }
  }

  render() {
    const {isVisible, input} = this.state;

    const createBtn = <button className={styles['create-btn']} onClick={this.changeVisibility}>+ Write note</button>;

    const form = (
      <form className={styles['form']}>
        <textarea rows="10" placeholder="Type here..." onInput={this.inputHandler}/>
        <div className={styles['actions']}>
          <button className={styles['cancel-btn']} onClick={this.changeVisibility}>Cancel</button>
          <button className={styles['add-btn']} onClick={this.submitForm} disabled={!input.length}>Add note</button>
        </div>
      </form>);

    return <div className={styles["container"]}>{isVisible ? form : createBtn}</div>;
  }

}

export default CreateForm;
