// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
let amigos  = [];
console.log(amigos);

function agregarAmigo(){
    let elementoAmigoNuevo = document.querySelector("#amigo");
    let amigoNuevo = elementoAmigoNuevo.value;
    if(amigoNuevo==''){
        alert("Tienes que escribir algo en el campo de amigos");
    }else{
        amigos.push(amigoNuevo);
        console.log(amigos);
    }
    elementoAmigoNuevo.value ='';
    actualizarLista();
}
function actualizarLista(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = amigos.map(amigo =>`<li>${amigo}</li>`).join("");
}
