"use strict"
const numberOfMovies = +prompt("Сколько фильмов вы уже посмотрели?","");
const personalMovieDB = {
    count: numberOfMovies,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний фильм?" , ""), b = prompt("Ваша оценка" , "");

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);