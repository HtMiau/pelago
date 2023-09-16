var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('js-player', {
        height: '390',
        width: '640',
        videoId: '-JJAXwAaA2w',
		controls: 0,
		modestbranding: 1,
		rel: 0,
		showinfo: 0,
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function pauseVideo() {
    player.pauseVideo();
}

function playVideo() {
    player.playVideo();
}

var playing = true;

document.getElementById('js-video-container').addEventListener('click', function (e) {

    if(playing == true) {
        pauseVideo();
        playing = false;
    } else {
        playVideo();
        playing = true;
    }
  
});

   