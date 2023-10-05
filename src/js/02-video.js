import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoPlayer = document.querySelector("#vimeo-player");
const player = new Player(videoPlayer);

const saveTime = currentTime => {
    localStorage.setItem("videoplayer-current-time", currentTime);
};

const restoreTime = () => {
    const savedTime = localStorage.getItem("videoplayer-current-time");
    if (savedTime !== null) {
        return parseFloat(savedTime);
    };

    return null;
};

player.on("timeupdate", throttle(event => {
    const currentTime = event.seconds;
    saveTime(currentTime);
}, 1000));

const initialTime = restoreTime();
if (initialTime !== null) {
    player.setCurrentTime(initialTime);
};
