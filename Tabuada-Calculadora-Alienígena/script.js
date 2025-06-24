// calculadora alienígena
function calcularIdade(anoNascimento) {
    return 2025 - anoNascimento;
  }
  
  function mostrarIdade() {
    const input = document.getElementById("anoInput").value;
    const ano = parseInt(input);
    const resultadoDiv = document.getElementById("resultado");
  
    if (isNaN(ano) || ano < 1900 || ano > 2025) {
      resultadoDiv.textContent = "Por favor, digite um ano de nascimento válido.";
    } else {
      const idade = calcularIdade(ano);
      resultadoDiv.textContent = `Você tem ${idade} anos.`;
    }
  }
  
  function ativarModoAlien() {
    document.body.classList.toggle("alien-mode");
    const resultado = document.getElementById("resultado");
  
    if (document.body.classList.contains("alien-mode")) {
      resultado.textContent = "🛸 Modo Alien ativado! Pronto para explorar o universo da programação!";
    } else {
      resultado.textContent = "";
    }
  }
// tabuada alienígena
  function gerarTabuada() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    const tabuadaDiv = document.getElementById("tabuadaResultado");
  
    if (isNaN(numero) || numero < 0 || numero > 10) {
      tabuadaDiv.innerHTML = "Por favor, digite um número entre 0 e 10.";
      return;
    }
  
    let resultado = `<h3>Tabuada do ${numero}</h3>`;
    for (let i = 0; i <= 10; i++) {
      resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
  
    tabuadaDiv.innerHTML = resultado;
  }
  
  function limparTabuada() {
    document.getElementById("tabuadaResultado").innerHTML = "";
    document.getElementById("numeroInput").value = "";
  }
  