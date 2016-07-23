import { changeColor } from './../actions/index';

export function generateNewPiano(pianoId, type) {
  switch(type) {
    case 'sillyMode':
      return Object.assign({}, sillyPiano, {
        id: pianoId
      })
    case 'necktieMode':
      return Object.assign({}, necktiePiano, {
        id: pianoId
      })
    case 'pianoMode':
      return Object.assign({}, pianoPiano, {
        id: pianoId
      })
  }
}


export function findPianoIndex(pianos, index) {
  for(var i = 0; i < pianos.length; i++) {
    if(i === index){
      return i;
    }
  }
  return -1;
}


export function colorChangeUtil(color, key) {
  var obj = {};
  if(color === 'white') {
    obj[key] = 'blue';
    return obj;
  } else {
    obj[key] = 'white';
    return obj;
  }
}


export function sequencePlayUtil(actionText) {
  return actionText;
}


const necktiePiano = {
  img: './../assets/pknecktie5.png',
  type: 'necktieMode',
  playedKeys: [],
  text: '',
  'C': 'white',
  'D': 'white',
  'E': 'white',
  'F': 'white',
  'G': 'white',
  'A': 'white',
  'B': 'white'
}

const sillyPiano = {
  img: './../assets/mugatu-o.gif',
  type: 'sillyMode',
  playedKeys: [],
  text: '',
  'C': 'white',
  'D': 'white',
  'E': 'white',
  'F': 'white',
  'G': 'white',
  'A': 'white',
  'B': 'white'
}

const pianoPiano = {
  img: './../assets/piano.jpg',
  type: 'pianoMode',
  playedKeys: [],
  text: '',
  'C': 'white',
  'D': 'white',
  'E': 'white',
  'F': 'white',
  'G': 'white',
  'A': 'white',
  'B': 'white'
}
