const frase = prompt("Digite uma frase:");
const vogais = frase.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
console.log(`A frase possui ${vogais ? vogais.length : 0} vogais.`);

// conta as vogais na frase 