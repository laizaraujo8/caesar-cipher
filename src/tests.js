function testes(cipher, texto, chave, resultado) {
   var meuTest = cipher(texto, chave);
   if (meuTest == resultado) {
      console.log("Teste satisfatório");

   } else {
      console.log("Teste falho");
   }
}


testes(encode, "Xuxu", -6, "Roro");
testes(encode, "Bab.a", -10, "Rqr.q");
testes(encode, "Xuxu", 1, "Yvyv");
testes(encode, "Baba", 5, "Gfgf");
testes(encode, "Oi Laiz", 8, "Wq Tiqh");
testes(encode, "abcdefghi", 12, "mnopqrstu");
testes(encode, "ABC.DEFGHI", 12, "MNO.PQRSTU");
testes(encode, "jklmnopqr-s", 15, "yzabcdefg-h");
testes(encode, "tuvwxyz", 22, "pqrstuv");
testes(encode, "123", 30, "123");
testes(encode, "laiz.araujo8@gmail.com", 1, "mbja.bsbvkp8@hnbjm.dpn");
testes(decode, "Roro", -6, "Xuxu");
testes(decode, "Baba", -9, "Kjkj");
testes(decode, "Yvyv", 1, "Xuxu");
testes(decode, "Gf gf", 5, "Ba ba");
testes(decode, "Wq Tiqh", 8, "Oi Laiz");
testes(decode, "MNOPQRS TU", 12, "ABCDEFG HI");
testes(decode, "YZABCDEFGH5", 15, "JKLMNOPQRS5")
testes(decode, "PQRSTUV", 22, "TUVWXYZ");
testes(decode, "pqrstuv", 22, "tuvwxyz");
testes(decode, "789", 25, "789");
