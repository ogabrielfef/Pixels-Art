
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
