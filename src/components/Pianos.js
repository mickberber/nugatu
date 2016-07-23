import React from 'react';

import Piano from './piano';

const Pianos = ({ pianos, changeColor, playSequence, addToPlayedKeys }) => {
  let pianoArray = pianos.map((piano) => { return (<Piano piano={piano} changeColor={changeColor} playSequence={playSequence} addToPlayedKeys={addToPlayedKeys} />)});
  return (<div>{pianoArray}</div>);
}

export default Pianos;
