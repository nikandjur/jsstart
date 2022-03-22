
let numberOfFilms;

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

  while (numberOfFilms == '' || numberOfFilms == 'null' || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
  }
 
}

start();

const personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++){
  let a = prompt('Один из последних просмотренных фильмов?','');
  let b = prompt('На сколько оцените его?', '');
  console.log(i);
 
  if (a != '' && b != ''){
    personalMovieDB.movies[a] = b;
  } else {
    console.log('error');
    i--;
  }
}
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count<10){
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count<30 && personalMovieDB.count<30){
    console.log("Вы классический зритель");
} else if (30<personalMovieDB.count){
    console.log("Вы киноман");
}

}
detectPersonalLevel();


function showMyDB() {
  if (personalMovieDB.privat === false){
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
  for (let i=1; i<=3; i++){
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
console.log(personalMovieDB);

// function cutFruit(fruit) {
//     return fruit*4;
// }
// function combFruit(apple,orange){
//     const cutApple = cutFruit(apple);
//     const cutOrange = cutFruit(orange);


//     const sjuice = `вариант с ${cutApple} вдобавок еще ${cutOrange}`;
//     return sjuice; 
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