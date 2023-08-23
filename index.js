const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

rl.question('Digite uma palavra: ', (word) => {
  const sanitizedWord = word.toLowerCase().replace(/\s/g, ''); 
  if (isPalindrome(sanitizedWord)) {
    console.log(`A palavra "${word}" é um palíndromo.`);
  } else {
    console.log(`A palavra "${word}" não é um palíndromo.`);
  }
  
  rl.close();
});