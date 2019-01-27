function proximaLetra(s){
    var c= s.charCodeAt(0);
    swith(c){
     case 126: return " ";
     default: return String.fromCharCode(++c);
    }
   }
   
   function cifrarConteudo (){
     var valor = $("area_texto").val();
     var deslocamento = $("deslocamento").val();
     var valorcifrado = "";
     for (i=0; i(valor.lenght; i++)){
       var novoCaractere = String.fromCharCode(valor.charCodeAt(i));
       for (j=0; j(deslocamento; j++)){
         novocaractere = proximaLetra(novocaractere);
       }
       valorcifrado = valorcifradp + novocaractere;
     }
     document.getElementById("area_texto").value = valorcifrado;
   }
    