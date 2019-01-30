
function criptografar() {
  let inserir1 = document.getElementById("inserirTexto").value;
  let chave1 = parseInt(document.getElementById("inserirChave").value);
  let resultadoCrip = encode(inserir1, chave1);

  document.getElementById("colarTextoCrip").value = resultadoCrip;
}


function encode(texto, chave) {
  let strEncoded = "";

  for (let i = 0; i < texto.length; i++) {
    let code = texto.charCodeAt(i);
    let codPrinLetra = 0;
    let novoCodigo = 0;

    if (code == 32) {
      novoCodigo = code;
    }
    else {
      if (code >= 65 && code <= 90) {
        codPrinLetra = 65;
      }
      if (code >= 97 && code <= 122) {
        codPrinLetra = 97;
      }
      novoCodigo = ((code - codPrinLetra + chave) % 26) + codPrinLetra;
    }

    console.log("code: " + code + "=> newCode: " + novoCodigo);

    strEncoded += String.fromCharCode(novoCodigo);
  }

  return strEncoded;
}
