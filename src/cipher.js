
function criptografar() {
  let inserir1 = document.getElementById("inserirTexto").value;
  let chave1 = parseInt(document.getElementById("inserirChave").value);
  let resultadoCrip = encode(inserir1, chave1);
  document.getElementById("colarTextoCrip").value = resultadoCrip;
}

function descriptografar() {
  let inserir2 = document.getElementById("colarTextoCrip").value;
  let chave2 = parseInt(document.getElementById("inserirChave").value);
  let resultadoDesCrip = decode(inserir2, chave2);
  document.getElementById("inserirTexto").value = resultadoDesCrip;
}



function encode(texto, chave) {
  let strEncoded = "";

  for (let i = 0; i < texto.length; i++) {
    let code = texto.charCodeAt(i);
    let codPrinLetra = 0;
    let novoCodigo = 0;

    if (code >= 65 && code <= 90) {
      codPrinLetra = 65;

    } else if (code >= 97 && code <= 122) {
      codPrinLetra = 97;

    } else if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {

      strEncoded += String.fromCharCode(code);
      return texto;
    }

    novoCodigo = (((code - codPrinLetra) + chave % 26) + 26) % 26 + codPrinLetra;

    strEncoded += String.fromCharCode(novoCodigo);
  }

  return strEncoded;
}



function decode(texto, chave) {
  let strDecoded = "";

  for (let i = 0; i < texto.length; i++) {
    let code = texto.charCodeAt(i);
    let codPrinLetra = 0;
    let novoCodigo = 0;

    if (code >= 65 && code <= 90) {
      codPrinLetra = 65;

    } else if (code >= 97 && code <= 122) {
      codPrinLetra = 97;

    } else if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
      strDecoded += String.fromCharCode(code);
      return texto;
    }

    novoCodigo = (((code - codPrinLetra) - chave % 26) + 26) % 26 + codPrinLetra;

    strDecoded += String.fromCharCode(novoCodigo);
  }
  return strDecoded;
}