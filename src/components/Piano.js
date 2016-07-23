import React from 'react';

import Keys from './keys/Keys';
import Input from './Input';

const Piano = ({ piano, changeColor, playSequence, addToPlayedKeys }) => {
  return (<div>
            <div>{piano.type}</div>
            <Keys piano={piano} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />
            <img src={piano.img} />
            <div>Played Keys:{piano.playedKeys}</div>
          </div>)
}

export default Piano;

// //items to display
// const pianoPiano = {
//   img: './../assets/pknecktie5.png',
//   type: 'pianoMode',
//   audio: 'pianoAudio',
//   playedKeys: [],
//   text: '',
//   'C': 'white',
//   'D': 'white',
//   'E': 'white',
//   'F': 'white',
//   'G': 'white',
//   'A': 'white',
//   'B': 'white'
// }