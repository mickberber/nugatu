import React from 'react';

import WhiteKey from './WhiteKey';
import BlackKeys from './BlackKeys';

const whiteKeyUtil = (piano) => {
  var keyArray = [];
  keyArray.push(<WhiteKey letter={'C'} color={piano.C} />);
  keyArray.push(<WhiteKey letter={'D'} color={piano.D} />);
  keyArray.push(<WhiteKey letter={'E'} color={piano.E} />);
  keyArray.push(<WhiteKey letter={'F'} color={piano.F} />);
  keyArray.push(<WhiteKey letter={'G'} color={piano.G} />);
  keyArray.push(<WhiteKey letter={'A'} color={piano.A} />);
  keyArray.push(<WhiteKey letter={'B'} color={piano.B} />);
}

const Keys = ({ piano, changeColor, addToPlayedKeys }) => {
  let whiteKeys = whiteKeyUtil(piano);
  return (<div>
            <div>{whiteKeys}</div>
            <div>{BlackKeys}</div>
          </div>);
}
