import { createStore } from 'redux';
import { ADD_PIANO, REMOVE_PIANO, CHANGE_TYPE, CHANGE_COLOR, ADD_TO_PLAYED_KEYS } from '../actions/index.js';
import { generateNewPiano, findPianoIndex, colorChangeUtil } from './utils.js';

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
      let key = action.keyToChange;
      return Object.assign({}, state, {
        pianos: [
          ...state.pianos.slice(0, action.pianoIndex),
          Object.assign({}, state.pianos[action.pianoIndex],
            colorChangeUtil(state.pianos[action.pianoIndex][key], key)
          ),
          ...state.pianos.slice(action.pianoIndex + 1)
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
