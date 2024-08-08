let metaLivros = 90;
let livroslidos = ["É assim que acaba", "Quem é você, Alasca?", "O seminarista", "Garota em pedaços", "A princesa salva a si mesma nesse livro"]
let quantidade = metaLivros - livroslidos.length

for (let i = 0; i < livroslidos.length; i++) {
    console.log (`Livros Lidos: ${livroslidos [i]}`);
}

if (metaLivros.length >= metaLivros){
    console.log ("Parabéns! Você atingiu a meta de leitura")
} else {
console.log ("Você está progredindo! faltam " + quantidade + " livros para atingir sua meta")
}
