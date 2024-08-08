let quantidadepalmas = 10;
let mensagem = "";

for (let i = 1; i <= quantidadepalmas; i++){
    mensagem += "👏";
    if (i % 5 === 0){
     mensagem += "🎉";
    }
}
console.log (mensagem);

