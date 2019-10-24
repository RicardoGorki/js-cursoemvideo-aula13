var inicio = document.querySelector("input#inputInicio");
var passo = document.querySelector("input#inputPasso");
var fim = document.querySelector("input#inputFim");
var res = document.querySelector("div#res");
var imagem = document.getElementById("mao")

function contar() {
  inicio = Number(inputInicio.value);
  passo = Number(inputPasso.value);
  fim = Number(inputFim.value);
  imagem.setAttribute('imagem', "maodireta.png")
  

  if (inicio > 0 && fim > 0 && passo > 0) {
    
    if (inicio < fim) {
    for (var i = inicio; i <= fim; i += passo) {
      res.innerHTML += ` ${i} \u{1F449}`
    }
   
  } else {
    for(i = inicio; i >= fim; i-= passo) {
      res.innerHTML += ` ${i} \u{1F449}`
    }
  }
  res.innerHTML += `\u{1F3C1}`
  } else {
    res.innerHTML = "insira um valor acima de 0"
  }
}
