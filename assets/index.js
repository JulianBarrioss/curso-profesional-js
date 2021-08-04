import mediaPlayer from './mediaPlayer'
import autoPlay from './plugins/autoPlay.js'
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new mediaPlayer({ el: video, puglins: [new autoPlay()] });

button.onclick = () => video.play();