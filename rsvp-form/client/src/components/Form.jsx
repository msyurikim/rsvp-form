import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      guests: 0
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit() {
    const regex = RegExp('.+@{1}.+');
    if (this.state.firstname && this.state.lastname && this.state.email && this.state.guests && regex.test(this.state.email)) {
      this.props.addToRSVP(this.state);
    }
  }

  render() {
    return (
      <form onsubmit={this.handleSubmit.bind(this)}>
        <label for='firstname'>First Name:</label>
        <input type='text' id='firstname' oninput={this.handleInput.bind(this)}>
        <label for='lastname'>Last Name:</label>
        <input type='text' id='lastname' oninput={this.handleInput.bind(this)}>
        <label for='email'>Email Address:</label>
        <input type='text' id='email' oninput={this.handleInput.bind(this)}>
        <label for='guests'>Number of Guests:</label>
        <input type='number' id='guests' oninput={this.handleInput.bind(this)}>
        <input type='submit' value='Submit'>
      </form>
    );
  }
}

export default Form;

