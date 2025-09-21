


function modi(id){
    window.location.href=("formCitas.php?id="+id);
}
function modi2(evento,fechalinea){
    window.location.href=("formCitas.php?dia="+fechalinea+"&hora="+evento.textContent);
}
function modiCli(id){
    window.location.href=("modificaCliente.php?id="+id);
}

function fichaCli(id){
    window.location.href=("fichaCliente.php?id="+id);
}
function modiUsu(id){
    window.location.href=("modificaUsuario.php?id="+id);
}
