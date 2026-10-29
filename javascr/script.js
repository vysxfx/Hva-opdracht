/*https://www.youtube.com/watch?v=pLK9aeTakuA en https://webdesign.tutsplus.com/build-a-grid-to-full-screen-image-animation-with-css-and-a-touch-of-javascript--cms-108293t en https://www.instructables.com/Matrix-Style-Rain-in-HTML/ zijn gebruikt voor onderstaande code*/
function startBinaryAnimation() {
  const canvas = document.getElementById('binaryCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const rainDrops = Array(Math.floor(columns)).fill(1);

  canvas.style.opacity = "1";

  function drawBinary() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; 
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = Math.random() > 0.5 ? "1" : "0";
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  }

  const interval = setInterval(drawBinary, 33);

  setTimeout(() => {
    clearInterval(interval);
    canvas.style.transition = "opacity 0.5s ease";
    canvas.style.opacity = "0";
    document.documentElement.classList.remove('run-transition');
  }, 3900);
}


document.addEventListener("DOMContentLoaded", () => {
  const knopPagina1 = document.getElementById('startTransition');

  
  if (knopPagina1) {
    knopPagina1.addEventListener('click', () => {
      document.documentElement.classList.add('run-transition');
    });
  }

  
  const afzender = document.referrer; 

  
  if (afzender.includes("begin-pagina.html") || afzender.includes("index.html")) {
    
    
    startBinaryAnimation();
    
  } else {
    
    const canvas = document.getElementById('binaryCanvas');
    if (canvas) canvas.style.opacity = "0"; 
  }
});