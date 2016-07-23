import React from 'react';

import Keys from './keys/Keys';
import Input from './Input';

const Piano = ({ piano, changeColor, playSequence, addToPlayedKeys }) => {
  return (<div>
            <div>{piano.type}</div>
            <div className='piano'>
              <Keys piano={piano} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />
              <img src={piano.img} style={{height: '400px', width: '750px', float: 'right'}} />
            </div>
            <div>Played Keys:{piano.playedKeys}</div>
          </div>)
}

export default Piano;
