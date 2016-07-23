import React, { Component } from 'react';

import Piano from './piano';

const Pianos = ({ pianos, changeColor, addToPlayedKeys }) => {
  let pianoArray = pianos.map((piano) => {
    return (<Piano key={piano.id}
                   piano={piano}
                   changeColor={changeColor}
                   addToPlayedKeys={addToPlayedKeys} />)});
  return (<div>{pianoArray}</div>);
}

export default Pianos;
