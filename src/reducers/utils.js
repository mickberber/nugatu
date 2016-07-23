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


export function colorChangeUtil(color) {
  if(color === 'white') {
    return 'blue';
  } else {
    return 'white';
  }
}


export function sequencePlayUtil(actionText) {
  return actionText;
}


const necktiePiano = {
  img: './../assets/pknecktie5.png',
  type: 'necktieMode',
  audio: 'necktieAudio',
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
  img: './../assets/pknecktie5.png',
  type: 'sillyMode',
  audio: 'sillyAudio',
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
  img: './../assets/pknecktie5.png',
  type: 'pianoMode',
  audio: 'pianoAudio',
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
