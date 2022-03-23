// 1-я часть задания - Перезапись функций, как методов объекта personalMovieDB
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  // Метод start - Начало: первый вопрос...
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    // Проверка: на пустое поле для ввода ИЛИ на кнопку Отмена ИЛИ на НЕ число
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  // Метод rememberMyFilms - Информация о фильмах
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt(`Один из последних просмотренных фильмов №_${i + 1}`),
        b = prompt("На сколько оцените его?");
      /* Проверка на пустое поле для ввода ИЛИ на кнопку Отмена ИЛИ на кол сим */
      if (a != "" && b != "" && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  // Метод detectPersonalLevel - Анализ уровня Киномании
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  // Метод showMyDB - проверка приватности БД и вывод главного Объекта программы
  // Аргумент hidden - Свойство private: false или true
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  // 2-я часть задания - метод toggleVisibleMyDB
  // Переключаем приватность/видимость БД
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  // 3-я часть задания - метод Жанров writeYourGenres
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genre = prompt(
        `Введите ваши любимые жанры через пробел`
      ).toLowerCase();
      // Метод toLowerCase() переводит строку в нижний регистр
      if (genre == "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres = genre.split(" "); // Формируем массив из строки
        personalMovieDB.genres.sort(); // Сортировка массива
      }
    }
    // Вывод любимых жанров №... - Метод forEach
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};

// const oldArray = ['a', 'b','c'];
// const newArray = oldArray.slice();

// const oldArr = ['a', 'b','c'];
// const arr = ['d', 'e','f'];
// const allSum = [...oldArr, ...arr, 'dopoln'];
// console.log(allSum);

// function log(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2,5,7];
// log(...num);

// const newnum = [...num];
// console.log(newnum);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };
// const newNumbers = copy(numbers);
// newNumbers.b = 100;
// newNumbers.a = 99;
// console.log(newNumbers);
// console.log(numbers);

// console.log(Object.assign(numbers, newNumbers))
// const clone = Object.assign({}, newNumbers);
// const numNew = {...numbers}; //по новому
// console.log(numbers);
// console.log(numNew);
//console.log(personalMovieDB);

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
