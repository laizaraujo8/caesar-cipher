function tests(cipher, text, key, result) {
   var myTest = cipher(text, key);
   if (myTest == result) {
      console.log("Teste satisfatório");

   } else {
      console.log("Teste falho");
   }
}


tests(encode, "Xuxu", -6, "Roro");
tests(encode, "Bab.a", -10, "Rqr.q");
tests(encode, "Xuxu", 1, "Yvyv");
tests(encode, "Baba", 5, "Gfgf");
tests(encode, "Oi Laiz", 8, "Wq Tiqh");
tests(encode, "abcdefghi", 12, "mnopqrstu");
tests(encode, "ABC.DEFGHI", 12, "MNO.PQRSTU");
tests(encode, "jklmnopqr-s", 15, "yzabcdefg-h");
tests(encode, "tuvwxyz", 22, "pqrstuv");
tests(encode, "123", 30, "123");
tests(encode, "laiz.araujo8@gmail.com", 1, "mbja.bsbvkp8@hnbjm.dpn");
tests(decode, "Roro", -6, "Xuxu");
tests(decode, "Baba", -9, "Kjkj");
tests(decode, "Yvyv", 1, "Xuxu");
tests(decode, "Gf gf", 5, "Ba ba");
tests(decode, "Wq Tiqh", 8, "Oi Laiz");
tests(decode, "MNOPQRS TU", 12, "ABCDEFG HI");
tests(decode, "YZABCDEFGH5", 15, "JKLMNOPQRS5")
tests(decode, "PQRSTUV", 22, "TUVWXYZ");
tests(decode, "pqrstuv", 22, "tuvwxyz");
tests(decode, "789", 25, "789");
