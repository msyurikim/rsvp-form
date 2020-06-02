import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      guests: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit() {
    const notEmpty = this.state.firstName && this.state.lastName && this.state.email && this.state.guests;
    const regex = RegExp('.+@{1}.+');
    const validEmail = regex.test(this.state.email);
    const validGuests = this.state.guests >= 0;
    if (notEmpty && validEmail && validGuests) {
      this.props.addToRSVP(this.state);
    } else {
      console.log('Invalid attendee');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor='firstName'>First Name:</label>
        <input type='text' id='firstName' onInput={this.handleInput.bind(this)}/>
        <label htmlFor='lastName'>Last Name:</label>
        <input type='text' id='lastName' onInput={this.handleInput.bind(this)}/>
        <label htmlFor='email'>Email Address:</label>
        <input type='text' id='email' onInput={this.handleInput.bind(this)}/>
        <label htmlFor='guests'>Number of Guests:</label>
        <input type='number' id='guests' onInput={this.handleInput.bind(this)}/>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default Form;


