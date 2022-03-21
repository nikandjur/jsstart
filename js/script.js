'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB);

for (let i=0; i<2; i++){
     const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != '' && b != '' ){
        i--;
    }
    personalMoviesDB.movies[a] = b;
    
}

// function cutFruit(fruit) {
//     return fruit*4;
// }
// function combFruit(apple,orange){
//     const cutApple = cutFruit(apple);
//     const cutOrange = cutFruit(orange);

//     const juis = `состав ${cutApple} и еще ${cutOrange}`;
//     return juis;
// }
// console.log(combFruit(2,4));

//let incr = 10,
//    decr = 10;

//incr++; // увеличение на 1
//decr--; // уменьшение на 1


/* console.log('https://ya.ru/' + 'category' + '/'); // по старому  
console.log(`https://ya.ru/$[{category}/`); // по новому так

//const user = 'ivan'; //по старому 
//alert(`Привет, ${user}`); //по новому так */

// user привет 
//let answers = [];
//answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваше фамилия?', '');
// answers[2] = prompt('как  возраст?', '');
// document.write(answers);

// const persone = confirm('уверен');

// console.log(persone);