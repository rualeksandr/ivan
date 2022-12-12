const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "20");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?","Один дома"),
      b = prompt("На сколько оцените его?", "10"),
      c = prompt("Один из последних просмотренных фильмов?","Один дома"),
      d = prompt("На сколько оцените его?", "10");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);