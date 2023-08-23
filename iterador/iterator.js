//atividade 1 //
const hobbies = ["jogar volei","tocar violão","assistir serie","andar de bike", 'ler']

hobbies.forEach(function(hobby) {
console.log("Olá, eu sou o hobby " + hobby + "!");
});


//atividade 2 //
const bookTitles = hobbies.map(function(hobby) {
    return "O incrível mundo de " + hobby;
    });
    console.log(bookTitles);


//atividade 3 //
const dHobbies = hobbies.filter(function(hobby) {
     return hobby[0] === 'a';
    } );
    console.log(dHobbies);
//desafio//
const xHobbies = hobbies.filter(function(hobby) {
    return hobby.length <= 4;
   } );
   console.log(xHobbies);


//atividade 4 //
 const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'jogar volei';
    });
    console.log("jogar volei está na posição: " + runningPosition);


//desafio//
const catalogos = ["eu e esse meu coração","todas as suas imperfeições","destrua esse diario"];
const livro = catalogos.map(function(livro){
      return "No seu catalogo tem:" + livro;
  })
  console.log(livro);

// atividade 5 //
const allHobbies = hobbies.reduce(function(accumulator, hobby) {
  return accumulator + " e " + hobby; }, "");
  
  console.log("Meus hobbies são: " + allHobbies);

//Atividade 6 // 
const allShort = hobbies.every(function(hobby) { return hobby.length < 15; });
console.log("Todos os meus hobbies têm menos de 15 letras? " + allShort);

//desafio // 
const allMinusculas = hobbies.every(function(hobby) { return hobby === hobby.toLowerCase(); });
console.log("Todos os meus hobbies têm letras minúsculas? " + allMinusculas);

//Atividade 7 // 
const fiveLetterHobby = hobbies.find(function(hobby) {
  return hobby.length === 5; });
  console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

//desafio // 
const letterZHobby = hobbies.find(function(hobby) {
  return hobby.includes ("z"); });
  console.log("Meu hobby que contém a letra z é: " + letterZHobby);


//Atividade 8  //
const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);

//desafio //
const secondFourthHobbies = hobbies.slice(1, 4); console.log("Meus hobbies do segundo ao quarto são: ",
secondFourthHobbies);