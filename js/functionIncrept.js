
function encriptar(){

    textEncrip = [];
    var text = document.getElementById('textInput').value;   
   
    var reg=new RegExp('[a-z]{2,254}');  

    if (text.match(reg)){
        alert ("El formato es el correcto");

        const inputText = [text];

        var e = /e/gi;
        var ii = /i/gi;
        var a = /a/gi;
        var o = /o/gi;
        var u = /u/gi;

        for (let i = 0; i < inputText.length; i++){
            textEncrip[i] = inputText[i].replace(e,"enter").replace(ii,"imes").replace(a,"ai").replace(o,"ober").replace(u,"ufat");
        }
        var texto = textEncrip.toString();
        document.getElementById('mensajeSinTexto').style.display="none";
        document.getElementById('mueco').style.display="none";        
        document.getElementById('divTextEncriptado').style.display="";        
        document.getElementById('mueco2').style.display="";        
        document.getElementById('textEncriptado').style.display="";
        document.getElementById('conTexto').style.display="";            
        return document.getElementById('textEncriptado').value = texto; 
    } else {
        alert ("El formato es incorrecto"); 
    }
}

function desEncriptar(){

    textDesEncrip = [];
    
    var text_in = document.getElementById('textInput').value;
    this.text = text_in;  

    var reg=new RegExp('[a-z]{2,254}');

    if (text.match(reg)){

        alert ("El formato es el correcto");

        const inputText = [text];
        var e = /enter/gi;
        var ii = /imes/gi;
        var a = /ai/gi;
        var o = /ober/gi;
        var u = /ufat/gi;

        for (let i = 0; i < inputText.length; i++){
            textDesEncrip[i] = inputText[i].replace(e,"e").replace(ii,"i").replace(a,"a").replace(o,"o").replace(u,"u");
        }
        var texto = textDesEncrip.toString();     
        document.getElementById('mensajeSinTexto').style.display="none";
        document.getElementById('mueco').style.display="none";        
        document.getElementById('divTextEncriptado').style.display="";        
        document.getElementById('mueco2').style.display="";        
        document.getElementById('textEncriptado').style.display="";
        document.getElementById('conTexto').style.display="";     

        document.getElementById('textEncriptado').value = texto;
    } else {
        alert ("El formato es incorrecto"); 
    }
}

function copiar(){
    var textoCopiado = document.getElementById('textEncriptado').value;
    var textoVacio = document.getElementById('textInput').value;

    if(textoCopiado.length > 0){
        document.getElementById('textEncriptado').value = '';
        return document.getElementById('textInput').value = textoCopiado;
    }
    else{
        document.getElementById('mensajeSinTexto').style.display="";
        document.getElementById('mueco').style.display="";        
        document.getElementById('divTextEncriptado').style.display="none";        
        document.getElementById('mueco2').style.display="none";        
        document.getElementById('textEncriptado').style.display="none";
        document.getElementById('conTexto').style.display="none";     
        return document.getElementById('textInput').value = '';
    }

}

