function exibe_text(elementId) {
    document.getElementById(elementId).style.visibility = "visible";
}

function some_tudo(elementId) {
    document.getElementById(elementId).style.visibility = "hidden";
}

for (let i = 1; i <= 5; i++) {
    const elementId = `element${i}`;
    const textId = `text${i}`;
    
    const element = document.getElementById(elementId);
    
    element.addEventListener("mouseover", () => {
        exibe_text(textId);
    });
    
    element.addEventListener("mouseout", () => {
        some_tudo(textId);
    });
}
    

