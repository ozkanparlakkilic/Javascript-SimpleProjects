// API Key : eabba054376b05e27f9056813130bc62
// url : https://api.themoviedb.org/3
// search movie : search/movie

// model-view-controller

import Search from "./models/Search";
import { elements,renderLoader,clearLoader } from "./base";
import * as searchView from "./views/searchView";
import * as movieView from "./views/movieView";
import { Movie } from "./models/Movie";

const state = {};

// Search Controller

const searchController = async () => {
  const keyword = elements.searchInput.value;

  if (keyword) {
    state.search = new Search(keyword);

    searchView.clearInput();
    searchView.clearResults();

    renderLoader(elements.movieListContainer); 
    
    await state.search.getResult();

    searchView.displayResults(keyword,state.search.data);

    setTimeout(()=>{
        clearLoader(elements.movieListContainer);
    },1000);

  } else {
    alert("anahtar kelime girmelisiniz");
  }
};

elements.searchFrom.addEventListener("submit", function (e) {
  e.preventDefault();
  searchController();
});

// Movie Controller

const movieController = async () => {
  const id = window.location.hash.replace("#", "");
  if (id) {
    state.movie = new Movie(id);

    renderLoader(elements.movieDetailsContainer); 

    await state.movie.GetMovie();

    movieView.backToTop();
    movieView.displayMovie(state.movie.data);
    
    setTimeout(()=>{
      clearLoader(elements.movieDetailsContainer);
    },1000);

  }
};

window.addEventListener("hashchange", movieController);
elements.movieDetailsClose.addEventListener('click',movieView.closeDetails);
