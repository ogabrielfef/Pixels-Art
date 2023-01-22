function pixelBoard() {
  const cont = document.getElementById('pixel-board');
  cont.style.display = 'block';
  cont.style.width = '210px';
  cont.style.height = '210px';
  for (let i = 0; i < 25; i += 1) {
    const quadro = document.createElement('div');
    quadro.style.marginBottom = '-5px';
    quadro.className = 'pixel';
    quadro.style.border = 'solid black 1px';
    quadro.style.width = '40px';
    quadro.style.height = '40px';
    quadro.style.backgroundColor = 'white';
    quadro.style.display = 'inline-block';
    cont.appendChild(quadro);
  }
}
pixelBoard();

const corInicial = document.querySelectorAll('.color')[0];
corInicial.classList.add('selected');

function selecionaCor() {
  const cores = document.querySelectorAll('.color');
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].addEventListener('click', (event) => {
      const corEscolhida = event.target;
      const selecionada = document.querySelectorAll('.selected')[0];
      selecionada.className = 'color';
      corEscolhida.classList.add('selected');
    });
  }
} selecionaCor();

function coloreQuadros() {
  const quadros = document.getElementsByClassName('pixel');
  for (let i = 0; i < quadros.length; i += 1) {
    quadros[i].addEventListener('click', (event) => {
      const clickedColor = document.querySelector('.selected');
      const css = window.getComputedStyle(clickedColor, null);
      const newColor = css.getPropertyValue('background-Color');
      console.log(clickedColor);
      const ev = event;
      ev.target.style.backgroundColor = newColor;
    });
  }
} coloreQuadros();

function limpaTudo() {
  const limpa = document.getElementById('clear-board');
  const quadros = document.getElementsByClassName('pixel');
  for (let i = 0; i < quadros.length; i += 1) {
    limpa.addEventListener('click', () => {
      if (quadros[i].style.backgroundColor !== 'white') {
        quadros[i].style.backgroundColor = 'white';
      }
    });
  }
} limpaTudo();
