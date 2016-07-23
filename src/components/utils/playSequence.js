import audio from './audio';
import verify from './verify';

const playAudio = (keyAudio) => {
  new Audio(keyAudio).play();
}

const playSequence = (pianoId, changeColor, type, text) => {
    verify(text);
    let textArr = text.split(',');
    function playAll(i = 0) {
      if(i >= textArr.length) {
        return;
      }
      changeColor(pianoId, textArr[i].toUpperCase());
      playAudio(audio[type][textArr[i].toUpperCase()]);
      setTimeout(() => {
        changeColor(pianoId, textArr[i].toUpperCase());
        playAll(i + 1);
      }, 1000);
    }
    playAll();
};

export default playSequence;
