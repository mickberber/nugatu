import React from 'react';

const Nav = ({ addPiano, removePiano, changeType, newPianoType }) => {
  return (<div>
            <button onClick={() => { addPiano(newPianoType) }}>add piano</button>
            <button onClick={() => { removePiano() }}>remove piano</button>
            <button onClick={() => { changeType('necktieMode') }}>NeckTie</button>
            <button onClick={() => { changeType('pianoMode') }}>Piano</button>
            <button onClick={() => { changeType('sillyMode') }}>Mugatu's Silly Mode</button>
            <div>Current Type:{newPianoType}</div>
          </div>)
}

export default Nav;
