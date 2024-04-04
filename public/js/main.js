const liens = document.querySelectorAll('nav a');
liens.forEach(element => {
    element.addEventListener("click", main);
});
function main(){
    document.querySelector('#menu').classList.toggle('box');
    document.querySelector('#hand').classList.toggle('button');
}