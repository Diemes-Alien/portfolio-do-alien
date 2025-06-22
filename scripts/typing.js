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
