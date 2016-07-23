import React from 'react';

import audio from './../utils/audio';
import WhiteKey from './WhiteKey';
import BlackKeys from './BlackKeys';

const keyAudioHelper = (type, key) => {
  return audio[type][key];
}

const whiteKeyUtil = (piano, changeColor, addToPlayedKeys) => {
  const makeWhiteKey = (letter) => {
    return (<WhiteKey letter={letter} color={piano[letter]} pianoId={piano.id} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} keyAudio={keyAudioHelper(piano.type, letter)} />);
  }
  //Made seperately for keeping order
  var keyArray = [];
  keyArray.push(makeWhiteKey('C'));
  keyArray.push(makeWhiteKey('D'));
  keyArray.push(makeWhiteKey('E'));
  keyArray.push(makeWhiteKey('F'));
  keyArray.push(makeWhiteKey('G'));
  keyArray.push(makeWhiteKey('A'));
  keyArray.push(makeWhiteKey('B'));
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
