const encriptar = document.getElementById("boton_Encriptar");
const desencriptar = document.getElementById("boton_Desencriptar");
const copiar = document.getElementById("boton_Copiar");
const inputTextArea = document.getElementById("textoInput");
const texto2 = document.getElementById("texto2");
const persona = document.getElementById("persona");
const informacion =document.getElementById("informacion");
const LadoDerecha = document.getElementById("derecha");

const remplace = (newvalue) => {
    texto2.innerHTML = newvalue;
    texto2.classList.add("ajustar");
    rigth.classList.add("ajuste");
    inputTextArea.value = " ";
    inputTextArea.style.height = "auto";
    inputTextArea.placeholder ="Ingrese texto aqui";
    persona.classList.add("ocultar");
    informacion.classList.add("ocultar");
    copiar.classList.remove("bnOcultar");
}

const reset = () => {
    inputTextArea.value ="";
    inputTextArea.style.height = "auto";
    inputTextArea.innerHTML = "";
    LadoDerecha.classList.remove("ajuste");
    texto2.placeholder = "Ningun mensaje fue encontrado";
    informacion.classList.add("bnOcultar");
    inputTextArea.focus();
}

let remplazar =[
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

encriptar.addEventListener("click", () => {

	const texto = inputTextArea.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
});

desencriptar.addEventListener("click", () => {

	const texto = inputTextArea.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reset();
	};
});

copiar.addEventListener("click", () => {
	let texto = texto2;
	texto.select();
	document.execCommand("copy");
	alert("Texto Copiado");
	reset();
});
//auto ajuste de textarea
inputTextArea.addEventListener("change", e => {
	inputTextArea.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	inputTextArea.style.height = `${scHeight}px`;
});
inputTextArea.addEventListener("keyup", e => {
	inputTextArea.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	inputTextArea.style.height = `${scHeight}px`;
});