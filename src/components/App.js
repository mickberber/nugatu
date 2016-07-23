import React from 'react';

import Nav from './nav';
import Pianos from './pianos';

const App = ({ addPiano, removePiano, changeColor, changeType, addToPlayedKeys, pianos, newPianoType }) => {
  return (<div>
            <Nav addPiano={addPiano} removePiano={removePiano} changeType={changeType} newPianoType={newPianoType} />
            <Pianos pianos={pianos} changeColor={changeColor} addToPlayedKeys={addToPlayedKeys} />
          </div>)
}

export default App;
