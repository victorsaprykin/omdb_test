"use strict";

const searchBtn = document.querySelector(".search__btn");
const movieBack = document.querySelector(".movie__back");
const resItem = document.querySelector(".search__result-item");
const resImg = document.querySelector(".search__result-image");
const movieImg = document.querySelector(".movie__image");
const resTitle = document.querySelector(".search__result-title");
const movieTitle = document.querySelector(".movie__title");
const resYear = document.querySelector(".search__result-year");
const movieYear = document.querySelector(".movie__year");
const resType = document.querySelector(".search__result-type");
const movieRated = document.querySelector(".movie__rated");
const movieReleased = document.querySelector(".movie__released");
const movieTime = document.querySelector(".movie__runtime");
const movieGenre = document.querySelector(".movie__genre");
const movieDirector = document.querySelector(".movie__director");
const movieWriter = document.querySelector(".movie__writer");
const movieActors = document.querySelector(".movie__actors");
const moviePlot = document.querySelector(".movie__plot");
const searchErr = document.querySelector(".search__error");
const searchResList = document.querySelector(".search__result-list");
const searchRequest = document.querySelector(".search__input");

const moreBtn = document.querySelector(".search__result-item");
const movieClose = document.querySelector(".movie");
const searchClose = document.querySelector(".search");

searchBtn.addEventListener("click", function () {
  searchErr.innerHTML = " ";
  searchResList.classList.remove("search__result-list-close");
  resItem.classList.remove('search__result-item-close');
  

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
      
      
      const currentRated = data.Rated;
      const currentReleased = data.Released;
      const currentTime = data.Runtime;
      const currentGenre = data.Genre;
      const currentDirector = data.Director;
      const currentWriter = data.Writer;
      const currentActors = data.Actors;
      const currentPlot = data.Plot;

    

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


