function testes(cipher, texto, chave, resultado) {
   var meuTest=cipher(texto, chave);
   if(meuTest=resultado){
      console.log("Teste satisfatório");

   }else{
      console.log("Teste falho");
   }
}


testes(encode, "Xuxu", 1, "Yvyv");
testes(encode, "Baba", 5, "Gfgf");
testes(encode, "Oi Laiz", 8, "Wq Tiqh");

testes(decode, "Yvyv",1, "Xuxu");
testes(decode, "Gfgf", 5, "Baba");
testes(decode, "Wq Tiqh", 8, "Oi Laiz");
