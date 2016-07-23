import React from 'react';

const Nav = ({ addPiano, removePiano, changeType, newPianoType }) => {
  return (<div>
            <button onClick={addPiano(newPianoType)}>add piano</button>
            <button onClick={removePiano()}>remove piano</button>
            <ul className='dropdown-menu'>
              <li onClick={changeType('necktieMode')}>NeckTie</li>
              <li onClick={changeType('pianoMode')}>Piano</li>
              <li onClick={changeType('sillyMode')}>Mugatu's Silly Mode</li>
            </ul>
            <div>Current Type:{newPianoType}</div>
          </div>)
}

export default Nav;
