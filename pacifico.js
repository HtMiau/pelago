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


var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

ocean.appendChild(docFrag);




AOS.init();

