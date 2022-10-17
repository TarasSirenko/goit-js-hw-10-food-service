const iframe = document.querySelector('iframe');
const throttle = require('lodash.throttle');
import Vimeo from '../../node_modules/@vimeo/player/src/player.js';
const player = new Vimeo(iframe);
// console.log('выполняю try');
try {
  onReboot();
} catch {
  player.setCurrentTime(0);
}
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}
function onReboot() {
  const cyrrentTime = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  ).seconds;
  player.setCurrentTime(cyrrentTime);
}
localStorage.removeItem('videoplayer-current-time');
