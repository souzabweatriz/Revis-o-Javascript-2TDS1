let ingressos = 9;
let batatinha = 0;  
let nome = "Ana";

for (let i= 1; i <= ingressos; i++){
    if (i % 3 === 0){
        batatinha++;
    }
} 
console.log ("Olá " + nome + ", você ganhou " + batatinha + " batatas grátis")
