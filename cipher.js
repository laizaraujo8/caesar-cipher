
function encrypt() {
  const insertEncrypt = document.getElementById("insertText").value;
  const keyEncrypt = parseInt(document.getElementById("insertKey").value);
  const encryptResult = encode(insertEncrypt, keyEncrypt);
  document.getElementById("pasteTextEncrypt").value = encryptResult;
}

function decrypt() {
  const insertDecrypt = document.getElementById("pasteTextEncrypt").value;
  const keyDecrypt = parseInt(document.getElementById("insertKey").value);
  const descryptResult = decode(insertDecrypt, keyDecrypt);
  document.getElementById("insertText").value = descryptResult;
}



function encode(text, key) {
  let strEncoded = "";

  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    let firstLetter = 0;
    let newCode = 0;

    if (code >= 65 && code <= 90) {
      firstLetter = 65;
      newCode = (((code - firstLetter) + key % 26) + 26) % 26 + firstLetter;

    } else if (code >= 97 && code <= 122) {
      firstLetter = 97;
      newCode = (((code - firstLetter) + key % 26) + 26) % 26 + firstLetter;

    } else if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
      newCode = code;

    }


    strEncoded += String.fromCharCode(newCode);
  }

  return strEncoded;
}



function decode(text, key) {
  let strDecoded = "";

  for (let i = 0; i < text.length; i++) {
    let code = text.charCodeAt(i);
    let firstLetter = 0;
    let newCode = 0;

    if (code >= 65 && code <= 90) {
      firstLetter = 65;
      newCode = (((code - firstLetter) - key % 26) + 26) % 26 + firstLetter;

    } else if (code >= 97 && code <= 122) {
      firstLetter = 97;
      newCode = (((code - firstLetter) - key % 26) + 26) % 26 + firstLetter;

    } else if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
      newCode = code;
    }


    strDecoded += String.fromCharCode(newCode);
  }
  return strDecoded;
}
