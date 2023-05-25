// maquina de escribir

let title = ["Arquitectura de Computadoras"];
if (document.getElementsByClassName("Titulo_inicio").length > 0) {
	title = ["Índice"];
}
const speed = 100;
let textPosition = 0;
function typewriter() {
	document.querySelector("#titulo").innerHTML = title[0].substring(0, textPosition) + '\u25AE';
	if (textPosition++ != title[0].length)
		hola = setTimeout(typewriter, speed);
	else {
		clearTimeout(hola);
		document.querySelector("#titulo").innerHTML = title[0].substring(0, textPosition - 1);
	}
}

window.addEventListener("load", typewriter);