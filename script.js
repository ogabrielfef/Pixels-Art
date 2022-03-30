function pixelBoard(){
    let cont = document.getElementById("pixel-board");
    cont.style.display = "block";
    cont.style.width = "210px";
    cont.style.height = "210px";
    for ( let i = 0; i < 25; i++){
       let quadro = document.createElement("div");
        quadro.style.marginBottom = '-5px'
        quadro.className = "pixel";
        quadro.style.border = "solid black 1px"
        quadro.style.width = "40px"
        quadro.style.height = "40px"
        quadro.style.backgroundColor = "white"
        quadro.style.display = "inline-block"
   cont.appendChild(quadro);
   }
}
pixelBoard();

let corInicial = document.querySelectorAll('.color')[0];
corInicial.classList.add('selected');

function selecionaCor() {
   let cores = document.querySelectorAll('.color');
   for( let i = 0; i < cores.length; i++) {
      cores[i].addEventListener('click', function newSelect(event) {
   let corEscolhida = event.target;
   let selecionada = document.querySelectorAll('.selected')[0];
   selecionada.className = 'color'; 
   corEscolhida.classList.add('selected');
}); 
   }
} selecionaCor();

function coloreQuadros() {
   let quadros = document.getElementsByClassName('pixel');
   for (i = 0; i < quadros.length; i += 1) {
       quadros[i].addEventListener('click', function (event) {

           let clickedColor = document.querySelector('.selected');
           let css = window.getComputedStyle(clickedColor, null);
           let newColor = css.getPropertyValue('background-Color');
           console.log(clickedColor);
           event.target.style.backgroundColor = newColor;
       });
   }
} coloreQuadros();
