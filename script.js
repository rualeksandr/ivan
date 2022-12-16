let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for(let i = 0; i <= 1; i++) {
        let a = prompt("Один из последних просмотренных фильмов?","Один дома"),
            b = prompt("На сколько оцените его?", "10");
        if(a && b && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы класический зритель');
    } else if(personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`,"Хоррор");
    }
}
writeYourGenres()

// // Переписать цикл: 1 способ
// let countQuetion = 2;
// while(countQuetion > 0) {
//     let a = prompt("Один из последних просмотренных фильмов?","Один дома"),
//         b = prompt("На сколько оцените его?", "10");
//     if(a && b && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         countQuetion++;
//     }
//     countQuetion--;
// }

// Переписать цикл: 2 способ
// let countQuetion = 1;
// do {
//     let a = prompt("Один из последних просмотренных фильмов?","Один дома"),
//         b = prompt("На сколько оцените его?", "10");
//     if(a && b && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         countQuetion++;
//     }
//     countQuetion--;
// } while (countQuetion > 0)
