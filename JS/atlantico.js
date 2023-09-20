document.addEventListener('DOMContentLoaded', function () {
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
});