import React from 'react';

const playAudio = (keyAudio) => {
  new Audio(keyAudio).play();
}

const WhiteKey = ({ letter, color }) => {
        return (
            <div className='keyboard' style={{backgroundColor: color}}>
                <div style={{textAlign: 'center', paddingTop: '375px'}}>{letter}</div>
            </div>
        )
}
