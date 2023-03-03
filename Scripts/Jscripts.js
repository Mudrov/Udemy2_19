"use strict"
/* if (numberOfMovies < 10){
    alert ('Нормальный человек, фильмы для овощей');
    
} else if (numberOfMovies >= 10 && numberOfMovies <= 30){
alert ('Еще не все потеряно! Время остановиться!');
} else if(numberOfMovies >30) {
    alert ('Вась не спасти, вы амеба');
} else {
    alert ('Error');
} */

let numberOfMovies;

function start() {
    numberOfMovies = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)){
        numberOfMovies = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

start();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i <= numberOfMovies; i++){
    let a = prompt("Название фильма" , ""), b = +prompt("Ваша оценка" , "");
        if (a != '' && b != '' && a!= null && b != null && a.length < 50 && b <= 10){
            console.log('OK');
            personalMovieDB.movies[a] = b;
        } else {
            console.log('error');
            i--;
        }
}

console.log(personalMovieDB);