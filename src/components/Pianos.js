import React, { Component } from 'react';

import Piano from './piano';

class Pianos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this.props.pianos', this.props.pianos)
    let pianoArray = this.props.pianos.map((piano) => {
      return (<Piano key={piano.id}
                     piano={piano}
                     changeColor={this.props.changeColor}
                     playSequence={this.props.playSequence}
                     addToPlayedKeys={this.props.addToPlayedKeys} />)});
    return (<div>{pianoArray}</div>);
  }
}

export default Pianos;
