import { createStore } from 'redux';
import { ADD_PIANO, REMOVE_PIANO, CHANGE_TYPE, CHANGE_COLOR, PLAY_SEQUENCE, ADD_TO_PLAYED_KEYS, addPiano, removePiano } from '../actions/index.js';
import { generateNewPiano, findPianoIndex, colorChangeUtil, sequencePlayUtil } from './utils.js';

let pianoId = 0;

let initalState = {
  pianos: [],
  newPianoType: 'necktieMode'
}

const pianos = (state = initalState, action) => {
  console.log(state)
  switch(action.type) {
    case ADD_PIANO:
      return Object.assign({}, state, {
        pianos: [
          ...state.pianos,
          generateNewPiano(pianoId++, state.newPianoType)
        ]
      })
    case REMOVE_PIANO:
      pianoId--;
      return Object.assign({}, state, {
        pianos: state.pianos.slice(0, state.pianos.length - 1)
      })
    case CHANGE_TYPE:
      return Object.assign({}, state, {
        newPianoType: action.newType
      })
    case CHANGE_COLOR:
      let index = findPianoIndex(state.pianos, action.pianoIndex);
      let key = action.keyToChange;
      return Object.assign({}, state, {
        pianos: [
          ...state.pianos.slice(0, index),
          Object.assign({}, state.pianos[index], {
            key: colorChangeUtil(state.pianos[index][key])
          }),
          ...state.pianos.slice(index + 1)
        ]
      })
    case PLAY_SEQUENCE:
      let indexSeq = findPianoIndex(state.pianos, action.pianoIndex);
      return Object.assign({}, state, {
        pianos: [
          ...state.pianos.slice(0, indexSeq),
          Object.assign({}, state.pianos[indexSeq], {
            text: sequencePlayUtil(action.textToPlay)
          }),
          ...state.pianos.slice(indexSeq + 1)
        ]
      })
    case ADD_TO_PLAYED_KEYS:
      let indexPlyd = findPianoIndex(state.pianos, action.pianoIndex);
      return Object.assign({}, state, {
        pianos: [
          ...state.pianos.slice(0, indexPlyd),
          Object.assign({}, state.pianos[indexPlyd], {
            playedKeys: [
              ...state.pianos[indexPlyd].playedKeys,
              action.playedKey
            ]
          }),
          ...state.pianos.slice(indexPlyd + 1)
        ]
      })
    default:
      return state;
  }
}

const store = createStore(pianos);

export default store;
