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

function exibe_text(elementId) {
    document.getElementById(elementId).style.visibility = "visible";
}

function some_tudo(elementId) {
    document.getElementById(elementId).style.visibility = "hidden";
}

for (let k = 1; k <= 10; k++) {
    const elementId = `element${k}`;
    const textId = `text${k}`;
    
    const element = document.getElementById(elementId);
    
    element.addEventListener("mouseover", () => {
        exibe_text(textId);
    });
    
    element.addEventListener("mouseout", () => {
        some_tudo(textId);
    });
}


AOS.init();

   