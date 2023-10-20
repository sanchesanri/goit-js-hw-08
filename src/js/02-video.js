import Player from '@vimeo/player';
import { values } from '@vimeo/player';
import { throttle } from 'throttle-debounce';

const iframeRef = document.querySelector('#vimeo-player');

const iframeId = iframeRef.id

const player = new Player(iframeRef);

const onPlay = function({seconds}) {
   localStorage.setItem("videoPlayer-current-time", seconds);
};

player.on('timeupdate', throttle(1000,onPlay));

const getApplicationVAlue = JSON.parse(localStorage.getItem("videoPlayer-current-time")) ??0; 
console.log(getApplicationVAlue);

player.setCurrentTime(getApplicationVAlue).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});