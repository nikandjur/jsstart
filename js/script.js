const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');    
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;
console.log(personalMoviesDB);











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