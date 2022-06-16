const valeurEntree = document.getElementById("valeurEntree");
const valeurSortie = document.getElementById("valeurSortie");
const bouton = document.getElementById("bouton");
const input = document.getElementById("input");
const output = document.getElementById("output");


bouton.addEventListener('click', () =>{
  result = input.value*valeurEntree.value/valeurSortie.value;
  output.textContent = result.value;
})

