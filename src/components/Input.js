import React from 'react';

const handleChangeText = () => {}

const Input = ({ playSequence }) => {
  return (
            <div>
              <fieldset className='form-group'>
                  <button onClick={playSequence} className='btn btn-warning'>Play a key sequence</button>
                  <input onChange={handleChangeText} className='form-control' placeholder='input key sequence'></input>
              </fieldset>
            </div>
          );
}

export default Input;
