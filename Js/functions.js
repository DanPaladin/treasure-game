let getUbication = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (click, objetivo) => {
    let diferenciaX = click.offsetX - objetivo.x;
    let diferenciaY = click.offsetY - objetivo.y;

    return Math.sqrt((diferenciaX * diferenciaX) +
                    (diferenciaY * diferenciaY));
}

let getPista = distancia => {
    if (distancia <= 100){
        return("¡Caliente!");
    } else if (distancia <= 200){
        return("Tibio");
    } else if (distancia <= 300){
        return("Templado");
    } else if (distancia <= 400){
        return("Frío");
    } else if (distancia <= 500){
        return("Muy lejos");
    } else {
        return("Sigue buscando...");
    }
}

function showFloatingWord(pista) {
    var floatingWordContainer = document.getElementById("floating-word-container");
    var floatingWord = document.getElementById("floating-word");

    floatingWordContainer.style.pointerEvents = "none";
    floatingWord.style.opacity = "1";
    floatingWord.textContent = pista;
    
    setTimeout(function () {
        floatingWord.style.opacity = "0";
    }, 1000);
}