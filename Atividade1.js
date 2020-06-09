
function validarformulario(){
    var tNome = document.forms[0].tNome.value;
    var tMail = document.forms[0].tMail.value;
    var cMsg = document.forms[0].cMsg.value;

    if(tNome.length < 2 || tNome.length > 40){
        alert("Nome Obrigatório!");
    }
    else{
        document.forms[0].submit();
    }
    
    if(tMail == "" || tMail.indexOf('@') == -1){
        alert("Email Obrigatório!");
        return false;
    }
    else{
        document.forms[0].submit();
    }

    if(cMsg.length < 5 || cMsg.length > 80){
        alert("Mensagem Obrigatório!");
        return false;
    }
    else{
        document.forms[0].submit();
    }
}