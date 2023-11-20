"use strict";

const movieBack = document.querySelector(".movie__back"),
  resItem = document.querySelector(".search__result-item"),
  searchBtn = document.querySelector(".search__btn"),
  resImg = document.querySelector(".search__result-image"),
  movieImg = document.querySelector(".movie__image"),
  resTitle = document.querySelector(".search__result-title"),
  movieTitle = document.querySelector(".movie__title"),
  resYear = document.querySelector(".search__result-year"),
  movieYear = document.querySelector(".movie__year"),
  resType = document.querySelector(".search__result-type"),
  movieRated = document.querySelector(".movie__rated"),
  movieReleased = document.querySelector(".movie__released"),
  movieTime = document.querySelector(".movie__runtime"),
  movieGenre = document.querySelector(".movie__genre"),
  movieDirector = document.querySelector(".movie__director"),
  movieWriter = document.querySelector(".movie__writer"),
  movieActors = document.querySelector(".movie__actors"),
  moviePlot = document.querySelector(".movie__plot"),
  searchErr = document.querySelector(".search__error"),
  searchResList = document.querySelector(".search__result-list"),
  searchRequest = document.querySelector(".search__input"),
  moreBtn = document.querySelector(".search__result-item-inner"),
  movieClose = document.querySelector(".movie"),
  searchClose = document.querySelector(".search");

  searchBtn.addEventListener("click", function () {
  searchErr.innerHTML = " ";
  searchResList.classList.remove("search__result-list-close");
  resItem.classList.remove("search__result-item-close");

  fetch(`https://www.omdbapi.com/?t=${searchRequest.value}&apikey=7e6decf1`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status == "success") {
        return;
      }

      if (data.Response === "False") {
        searchResList.classList.add("search__result-list-close");
        searchErr.innerHTML = "Фильмы не найдены";
      }
      if (data.Type === "movie") {
        resType.innerHTML = "Фильм";
      }
      if (data.Type === "series") {
        resType.innerHTML = "Сериал";
      }
      if (data.Type === "game") {
        resType.innerHTML = "Игра";
      }

      const imgSrc = data.Poster;

      resImg.innerHTML = `<img src='${imgSrc}' width='100'>`;

      const currentTitle = data.Title;

      resTitle.innerHTML = `${currentTitle}`;

      const currentYear = data.Year;
      resYear.innerHTML = `${currentYear}`;

      const currentRated = data.Rated,
        currentReleased = data.Released,
        currentTime = data.Runtime,
        currentGenre = data.Genre,
        currentDirector = data.Director,
        currentWriter = data.Writer,
        currentActors = data.Actors,
        currentPlot = data.Plot;

      moreBtn.addEventListener("click", function () {
        movieClose.classList.remove("movie-close");
        searchClose.classList.add("search-close");
        movieImg.innerHTML = `<img src='${imgSrc}' width='300'>`;
        movieTitle.innerHTML = `${currentTitle}`;
        movieYear.innerHTML = `${currentYear}`;
        movieRated.innerHTML = `${currentRated}`;
        movieReleased.innerHTML = `${currentReleased}`;
        movieTime.innerHTML = `${currentTime}`;
        movieGenre.innerHTML = `${currentGenre}`;
        movieDirector.innerHTML = `${currentDirector}`;
        movieWriter.innerHTML = `${currentWriter}`;
        movieActors.innerHTML = `${currentActors}`;
        moviePlot.innerHTML = `${currentPlot}`;

        movieBack.addEventListener("click", function () {
          searchClose.classList.remove("search-close");
          searchResList.classList.add("search__result-list-close");
          movieClose.classList.add("movie-close");
          window.location.reload();
        });
      });
    });
});
