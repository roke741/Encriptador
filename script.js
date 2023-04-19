
function encriptar() {
  texto = document.getElementById("texto").value;
  resultado = document.getElementById("resultado");
  if(validarTexto(texto)){
    let textoEncriptado = texto.replaceAll('e', 'enter')
                             .replaceAll('i', 'imes')
                             .replaceAll('a', 'ai')
                             .replaceAll('o', 'ober')
                             .replaceAll('u', 'ufat');
    resultado.innerHTML = textoEncriptado;
    resultado.style.color = "black";
    resultado.style.fontSize = '26px';
    resultado.style.marginBottom = "auto";
    document.getElementById("btn-copiar").style.display = 'block';

  }
  else{
    resultado.innerHTML = "No ingrese caracteres especiales ni letras en mayuscula";
    resultado.style.color = "red";
    resultado.style.fontSize = '30px';
  }
  document.getElementById("imgPrincipal").style.display = 'none';
  document.getElementById("msjPrincipal").style.display = 'none';
  document.getElementById("bg-result").style.justifyContent  = 'start';
}

function desencriptar() {
  texto = document.getElementById("texto").value;
  resultado = document.getElementById("resultado");
  if (validarTexto(texto)) {
    let textoEncriptado = texto.replaceAll('enter', 'e')
                             .replaceAll('imes', 'i')
                             .replaceAll('ai', 'a')
                             .replaceAll('ober', 'o')
                             .replaceAll('ufat', 'u');
    resultado.innerHTML = textoEncriptado;
    resultado.style.color = "black";
    resultado.style.fontSize = '26px';
    resultado.style.marginBottom = "auto";
    document.getElementById("btn-copiar").style.display = 'block'
  } else {
    resultado.innerHTML = "No ingrese caracteres especiales ni letras en mayuscula";
    resultado.style.color = "red";
    resultado.style.fontSize = '30px';
    resultado.style.marginBottom = "auto";
  }
  document.getElementById("imgPrincipal").style.display = 'none';
  document.getElementById("msjPrincipal").style.display = 'none';
  ;
  document.getElementById("bg-result").style.justifyContent  = 'start';
}

function validarTexto(texto) {
  var regex = /^[a-z0-9\s]+$/
  if (regex.test(texto)) {
    return true;
  } else {
    return false;
  }
}
function copiar(){
  copyText = document.getElementById("resultado");
  const seleccion = window.getSelection();
  const rango = document.createRange();
  rango.selectNodeContents(copyText);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand('copy');
  seleccion.removeAllRanges();
  
  btn = document.getElementById("btn-desencriptar");
  btn.textContent = "Copiado!"

  setTimeout(() => {
    btn.textContent = 'Copiar';
  }, 2000);
}