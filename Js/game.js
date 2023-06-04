const ANCHO = 1024;
const ALTO = 768;

let tesoro = {
    x: getUbication(ANCHO),
    y: getUbication(ALTO)
};

console.log(tesoro);
let $mapa = document.getElementById('mapa');
let cantidad_clicks = 0;

$mapa.addEventListener('click', function(e) {
    /*cantidad_clicks++;
    let distancia = getDistance(e, tesoro);
    console.log(distancia);
    let pista = getPista(distancia);
    console.log(pista);*/

    cantidad_clicks++;
    let distancia = getDistance(e, tesoro);
    let pista = getPista(distancia);
    console.log(distancia)

    showFloatingWord(pista);

    if (distancia <= 15) {
        alert(`¡Encontraste el tesoro!\n ${cantidad_clicks} clicks en total.`);
        location.reload();
    }
})