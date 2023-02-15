"use strict"
const numberOfMovies = prompt("Сколько фильмов вы уже посмотрели?"," ");
const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
alert(personalMovieDB.count);