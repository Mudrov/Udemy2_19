"use strict"

let numberOfMovies;

function start() {
    numberOfMovies = +prompt("Сколько фильмов вы уже посмотрели?","");

    while (numberOfMovies == '' || numberOfMovies == null || isNaN(numberOfMovies)){
        numberOfMovies = +prompt("Сколько фильмов вы уже посмотрели?","");
    }
}

function showDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
} 

function rememberMyMovies(){
    for (let i = 1; i <= numberOfMovies; i++){
        let a = prompt("Название фильма" , ""), b = +prompt("Ваша оценка" , "");
            if (a != '' && b != '' && a!= null && b != null && a.length < 50 && b <= 10){
                console.log('OK');
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error: wrong type');
                i--;
            }
    }
}

function fanLevel(){
    if (numberOfMovies < 10){
        alert ('Любитель');
        
    } else if (numberOfMovies >= 10 && numberOfMovies <= 30){
    alert ('Фанат');
    } else if(numberOfMovies >30) {
        alert ('Фанатик');
    } else {
        alert ('error: smthing gone wrong');1
    }

}

function writeYourGenres(){
    for (let i = 1; i < 4; i++){
    // let a = prompt(`Ваш любимый жанр под номером ${i}` , "");
    // personalMovieDB.genres[i - 1] = a;
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}` , "");
    }
}

// Сама программа

//start();
//fanLevel();

const personalMovieDB = {
    count: numberOfMovies,
    movies: {
    },
    actors: {},
    genres: [],
    private: false
};

//rememberMyMovies();
writeYourGenres();
showDB(personalMovieDB.private);