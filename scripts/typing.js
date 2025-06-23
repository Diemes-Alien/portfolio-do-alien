const text = "Sou o Alien Dev, um programador que veio das estrelas para dominar o código e explorar galáxias de bugs e soluções!";
const typingElement = document.getElementById("typing");
let index = 0;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 60);
  }
  // Quando terminar, para de digitar, mas o cursor continua piscando via CSS
}

type();

const toggleBtn = document.getElementById('toggleAboutBtn');
const moreText = document.querySelector('.more-text');

toggleBtn.addEventListener('click', () => {
  if (moreText.style.display === 'block') {
    moreText.style.display = 'none';
    toggleBtn.textContent = 'Leia mais';
  } else {
    moreText.style.display = 'block';
    toggleBtn.textContent = 'Leia menos';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const layers = document.querySelectorAll('.stars');
  const docHeight = document.documentElement.scrollHeight;
  const docWidth = window.innerWidth;

  layers.forEach(layer => {
    layer.innerHTML = ''; // Limpa as estrelas antigas

    const starsCount = 150; // Quantidade de estrelas por camada

    // Cria as estrelas e adiciona na camada
    for (let i = 0; i < starsCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');

      // Posição aleatória
      star.style.top = Math.random() * docHeight + 'px';
      star.style.left = Math.random() * docWidth + 'px';

      // Tamanho aleatório
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';

      // Opacidade natural
      star.style.opacity = 0.3 + Math.random() * 0.7;

      // Adiciona a estrela na camada
      layer.appendChild(star);
    }

    // Agora que todas as estrelas foram criadas, pega elas pra configurar o piscar
    const stars = layer.querySelectorAll('.star');

    stars.forEach(star => {
      // Aplica um delay aleatório para a animação ficar natural
      star.style.animationDelay = (Math.random() * 4) + 's';
    });
  });

  // Parallax no scroll
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    document.querySelector('.layer1').style.transform = `translateY(${scrollY * 0.03}px)`;
    document.querySelector('.layer2').style.transform = `translateY(${scrollY * 0.06}px)`;
    document.querySelector('.layer3').style.transform = `translateY(${scrollY * 0.1}px)`;
  });
});
