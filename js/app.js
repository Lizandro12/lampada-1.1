acenderApagar.addEventListener("click", acendApag);
let imagem = document.getElementById("imagem");
/* function acendApag(){
    let botao = document.getElementById("acenderApagar");
    if( botao.innerHTML == "Acender"){
        imagem.src = "img/on.jpg";
        botao.innerHTML = "Apagar";
    } else if( botao.innerHTML == "Apagar"){
        imagem.src = "img/off.jpg";
        botao.innerHTML = "Acender";
    }

} */
function acendApag(){
    let botao = document.getElementById("acenderApagar");
    if( botao.value == "acender"){
        imagem.src = "img/on.jpg";
        botao.innerHTML = "Apagar";
        botao.value = "apagar"
    } else if( botao.value == "apagar"){
        imagem.src = "img/off.jpg";
        botao.innerHTML = "Acender";
        botao.value = "acender"
    }

}