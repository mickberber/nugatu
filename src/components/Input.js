import React from 'react';

import playSequence from './utils/playSequence';

let input = '';

const Input = ({ pianoId, changeColor, type }) => {
  return (
            <div>
              <fieldset className='form-group'>
                  <button onClick={(e) => { e.preventDefault(); playSequence(pianoId, changeColor, type, input); }} className='btn btn-warning'>Play a key sequence</button>
                  <input onChange={(e) => { input = e.target.value;}} className='form-control' placeholder='input key sequence'></input>
              </fieldset>
            </div>
          );
}

export default Input;
