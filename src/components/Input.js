import React from 'react';

import audio from './utils';

const handleChangeText = () => {}

const playAudio = (keyAudio) => {
  new Audio(keyAudio).play();
}

let input = '';

const Input = ({ pianoId, changeColor, type }) => {
  const playSequence = (pianoId, text) => {
      verify(text);
      let textArr = text.split(',');
      function playAll(i = 0) {
        if(i >= textArr.length) {
          return;
        }
        changeColor(pianoId, textArr[i].toUpperCase());
        playAudio(audio[type][textArr[i].toUpperCase()]);
        setTimeout(() => {
          changeColor(pianoId, textArr[i].toUpperCase());
          playAll(i + 1);
        }, 1000);
      }
      playAll();
  };

  return (
            <div>
              <fieldset className='form-group'>
                  <button onClick={(e) => { console.log(e); e.preventDefault(); playSequence(pianoId, input); }} className='btn btn-warning'>Play a key sequence</button>
                  <input onChange={(e) => { input = e.target.value;}} className='form-control' placeholder='input key sequence'></input>
              </fieldset>
            </div>
          );
}

export default Input;


/* Verify User Input Formatting */
function verify(string) {
    //check type
    if(typeof string !== 'string') {
        return false;
    }
    if(string === '') {
        //test for empty string
        alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
        return false;
    }
    for(var i = 0; i < string.length; i++) {
        //check index 1 for comma
        if(i === 1 && string[i] !== ',') {
            alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
            return false;
        }
        //check odd indexes for commas
        if(i % 2 !== 0) {
            if(string[i] !== ',') {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        } else {
            //check even indexes for valid keys
            if(!checkAgainstKeys(string[i])) {
                alert('This is an incorrect submission! Try fromatting like this: a,b,c,d');
                return false;
            }
        }
    }
    return true;
}

//verify letters are keys on the piano
function checkAgainstKeys(val) {
    val = val.toUpperCase();
    let keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    for(var i = 0; i < keys.length; i++) {
        if(val === keys[i]) {
            return true;
        }
    }
    return false;
}
