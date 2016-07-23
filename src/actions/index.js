//action constants
export const ADD_PIANO = 'ADD_PIANO';
export const REMOVE_PIANO = 'REMOVE_PIANO';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_TYPE = 'CHANGE_TYPE';
export const ADD_TO_PLAYED_KEYS = 'ADD_TO_PLAYED_KEYS';

export const PianoOptions = ['sillyMode', 'pianoMode', 'necktieMode'];

export function addPiano(pianoMode) {
  return {
    type: ADD_PIANO,
    pianoMode: pianoMode
  }
}

export function removePiano() {
  return {
    type: REMOVE_PIANO
  }
}

export function changeColor(pianoIndex, keyToChange) {
  return {
    type: CHANGE_COLOR,
    pianoIndex: pianoIndex,
    keyToChange: keyToChange
  }
}

export function changeType(newType) {
  return {
    type: CHANGE_TYPE,
    newType: newType
  }
}

export function addToPlayedKeys(pianoIndex, playedKey) {
  return {
    type: ADD_TO_PLAYED_KEYS,
    pianoIndex: pianoIndex,
    playedKey: playedKey
  }
}
