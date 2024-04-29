

// referencia variavel chamamos de let sempre vai receber um valor novo
//let contador = 0;

//while = enquanto. usado para repetir a função, tipo um loope
/*while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

   tecla.onclick = function(){
        tocaSom(idAudio);

    }
    
    contador = contador + 1;

    console.log(contador);
}*/


function tocaSom (seletorAudio){
   const elemento =  document.querySelector(seletorAudio);

    if (elemento && elemento.localName == 'audio') {
        elemento.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');
//for = para//
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

   tecla.onclick = function() {
        tocaSom(idAudio);
    }
} 


tecla.onkeydown = function (evento) {

    if (evento.code === 'Space') {
        tecla.classList.add('ativa');
    }

    if (evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

}
    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
