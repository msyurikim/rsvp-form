import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  addToRSVP(attendee) {
    $.post('/rsvps', attendee)
      .done((data) => {
        console.log('Data loaded: ', data);
      })
      .fail((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Form addToRSVP={this.addToRSVP}/>
    );
  }
}

export default App;
