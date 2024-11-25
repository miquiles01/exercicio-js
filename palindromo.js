const palavra = prompt("Digite uma palavra:");
const invertida = palavra.split("").reverse().join("");
if (palavra === invertida) {
  console.log("A palavra é um palíndromo.");
} else {
  console.log("A palavra não é um palíndromo.");
}

// verifica se é um palíndromo (se dá p ler de trás p frente)