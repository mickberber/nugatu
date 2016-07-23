import React from 'react';

import audio from './../utils';
import WhiteKey from './WhiteKey';
import BlackKeys from './BlackKeys';

const keyAudioHelper = (type, key) => {
  return audio[type][key];
}

const whiteKeyUtil = (piano, changeColor, addToPlayedKeys) => {
  var keyArray = [];
  keyArray.push(<WhiteKey letter={'C'} color={piano.C} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'C')} />);
  keyArray.push(<WhiteKey letter={'D'} color={piano.D} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'D')} />);
  keyArray.push(<WhiteKey letter={'E'} color={piano.E} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'E')} />);
  keyArray.push(<WhiteKey letter={'F'} color={piano.F} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'F')} />);
  keyArray.push(<WhiteKey letter={'G'} color={piano.G} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'G')} />);
  keyArray.push(<WhiteKey letter={'A'} color={piano.A} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'A')} />);
  keyArray.push(<WhiteKey letter={'B'} color={piano.B} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, 'B')} />);
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
