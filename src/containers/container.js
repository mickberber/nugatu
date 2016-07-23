import { connect } from 'react-redux';

import { addPiano , removePiano, changeColor, changeType, playSequence } from './../actions/index'

import App from './../components/App';

function mapDispatchToProps(dispatch) {
  return {
    addPiano: function(mode) {
      dispatch(addPiano(mode));
    },
    removePiano: function() {
      dispatch(removePiano());
    },
    changeColor: function(pianoIndex, keyToChange) {
      dispatch(changeColor(pianoIndex, keyToChange));
    },
    changeType: function(newType) {
      dispatch(changeType(newType));
    },
    playSequence: function(pianoIndex, textToPlay) {
      dispatch(playSequence(pianoIndex, textToPlay));
    },
    addToPlayedKeys: function(pianoIndex, playedKey) {
      dispatch(addToPlayedKeys(pianoIndex, playedKey));
    }
  }
}

function mapStateToProps(state) {
  return {
    pianos: state.pianos,
    newPianoType: state.newPianoType
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
