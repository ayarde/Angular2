import {Component} from "angular2/core";
import {Movie} from "../model/movie";
import {MovieService} from "../services/movie.service";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
  selector:"movies-list",
  templateUrl: "app/view/movies-list.html",
  providers: [MovieService],
  directives: [ROUTER_DIRECTIVES]
})

export class MoviesListComponent{

  private movie:Movie;
  private selectedMovie:Movie;
  private showData:boolean;
  private movies;
  private dataService;

  constructor(private movieService: MovieService){

    this.showData = false;

    this.movies = this.movieService.getMovies();

    this.selectedMovie = this.movies[0];
    this.movie = this.movies[0];
  }

  debug(movie = null){
    if(movie != null){
      console.log(this.movie.movie);
    } else {
      console.log(this.movie);
    }

  }

  onShowHide(value){
    this.showData = value;
  }

  onChangeMovie(movie){
    this.movie = movie;
    this.selectedMovie = movie;
  }
}
