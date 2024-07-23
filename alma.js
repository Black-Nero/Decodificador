function ajustarEstilos (){
    var textoInput = document.getElementById("texto");
    var areaDerechaTexto = document.querySelector(".areaDerechaTexto");
    var inputPadron = document.querySelector(".inoutPadron");
    var simbolo = document.querySelector(".simbolo");
    var botones = document.querySelector(".botones");
    var imagenNoTexto = document.getElementById("ImagenNoTexto");
    var mensajeOutput = document.getElementById(".mensajeOutput");
    var botonCopiar = document.getElementById("botonCopiar");
    var encriptar = document.querySelector(".encriptar");
    var desencriptar = document.querySelector(".desencriptar");

    if (window.innerWidth <=768 & window.innerHeight <= 1174 & textoInput.ariaValueMax.trim()!= ''){
       
        imagenNoTexto.style.display = "none";
        textoInput.style.maxHeight = "35%";
        simbolo.style.marginTop = "61%";
        botones.style.marginTop ="-1%";
        
        areaDerechaTexto.style.height = '30%'; 
        areaDerechaTexto.style.top = '83%';
        areaDerechaTexto.style.maxHeight ='25%';
        
        mensajeOutput.style.top = '31%';
        mensajeOutput.style.right = '1%';
        mensajeOutput.style.width = '93%';
        mensajeOutput.style.maxHeight ='40%';
        

        botonCopiar.style.height = '23%';
        botonCopiar.style.width = '93%';
    
        
        console.log('ajustar estilo activado');
    }

    if (window.innerWidth <= 768 & window.innerHeight <= 1384 & textoInput.value.trim()!= '') {
        
        imagenNoTexto.style.display = 'none';

        textoInput.style.maxHeight = '40%';
        simbolo.style.marginTop = '74%';
        botones.style.marginTop = '-7%'; 

        areaDerechaTexto.style.height = '33%'; 
        areaDerechaTexto.style.top = '81%';
        areaDerechaTexto.style.maxHeight ='25%';
        
        mensajeOutput.style.top = '31%';
        mensajeOutput.style.right = '1%';
        mensajeOutput.style.width = '93%';
        mensajeOutput.style.maxHeight ='40%';
        
        botonCopiar.style.top = '73%';
        botonCopiar.style.height = '21%';
        botonCopiar.style.width = '94%';
    
        
        console.log('ajustar estilo activado');
        
    }
    if (window.innerWidth <= 375 &  textoInput.value.trim()!== '') {
        
        imagenNoTexto.style.display = 'none';
        textoInput.style.maxHeight = '25%';
        
        simboloLeyenda.style.marginTop = '58%';
        
        
        encriptar.style.top= '47%';
        desencriptar.style.top= '56%';
        
        
        

        areaDerechaTexto.style.maxHeight = '42%'; 
        areaDerechaTexto.style.top = '77%';
        
        
        mensajeOutput.style.top = '15%';

        mensajeOutput.style.maxWidth = '87%';
        mensajeOutput.style.maxHeight ='60%';
        mensajeOutput.style.left = '2%';
        
        
        botonCopiar.style.top = '73%'
        botonCopiar.style.height = '21%'
        botonCopiar.style.width = '94%'
    
        
        console.log('ajustar estilo activado');
        
    }

}

function habilitarBoton(){
    var textoInput = document.getElementById("texto");
    var botondesencriptar = document.getElementById("desencriptar");

    if (textoInput.value.trim()!== ""){
        botondesencriptar.removeAttribute("Disabled");
    } else {
        botondesencriptar.setAttribute("desabled","disabled");
    }
}
function ocultarboton (){
    var mensajeOutput = document.getElementById("mensajeOutput");
    var botonCopiar = document.getElementById("botoncopiar");

    if (mensajeOutput.innerText.trim() !== "") {
        botonCopiar.style.display = "block"; 
        document.querySelector("#desencriptar").removeAttribute("disabled");
    } else {
        botonCopiar.style.display = "none";   
    }

}

function ocultarTexto(){
    var textoInput = document.getElementById("texto");
    var LeyendaNoTexto = document.getElementById("LeyendaNoTexto");
    var LeyendaNoTexto2 = document.getElementById("LeyendaNoTexto2");

    if (textoInput.value.trim()==""){
        LeyendaNoTexto.style.display = "block";
        LeyendaNoTexto2.style.display = "block";
    } else{
        LeyendaNoTexto.style.display = "none";
        LeyendaNoTexto2.style.display = "none";
    }
    console.log("Funcion Ocultar Texto Realizada");
}