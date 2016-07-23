import React from 'react';

const playAudio = (keyAudio) => {
  new Audio(keyAudio).play();
}

const WhiteKey = ({ letter, color, pianoId, changeColor, addToPlayedKeys, keyAudio }) => {
        const helper = () => {
          changeColor(pianoId, letter);
          addToPlayedKeys(pianoId, letter);
          playAudio(keyAudio);
          setTimeout(() => { changeColor(pianoId, letter) }, 1000);
        }
        return (
            <div onClick={helper} className='keyboard' style={{backgroundColor: color}}>
                <div style={{textAlign: 'center', paddingTop: '375px'}}>{letter}</div>
            </div>
        )
}

export default WhiteKey;
