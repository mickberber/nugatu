import React from 'react';

import WhiteKey from './WhiteKey';
import BlackKeys from './BlackKeys';

const whiteKeyUtil = (piano, changeColor, addToPlayedKeys) => {
  var keyArray = [];
  keyArray.push(<WhiteKey letter={'C'} color={piano.C} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  keyArray.push(<WhiteKey letter={'D'} color={piano.D} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  keyArray.push(<WhiteKey letter={'E'} color={piano.E} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  keyArray.push(<WhiteKey letter={'F'} color={piano.F} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  keyArray.push(<WhiteKey letter={'G'} color={piano.G} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  keyArray.push(<WhiteKey letter={'A'} color={piano.A} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  keyArray.push(<WhiteKey letter={'B'} color={piano.B} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />);
  return keyArray;
}

const Keys = ({ piano, changeColor, addToPlayedKeys }) => {
  let whiteKeys = whiteKeyUtil(piano, changeColor, addToPlayedKeys);
  return (<div>
            <div className='white'>{whiteKeys}</div>
            <BlackKeys />
          </div>);
}

export default Keys;
