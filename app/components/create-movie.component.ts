import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Movie} from "../model/movie";
import {Router, RouteParams} from "angular2/router";
import {MovieService} from "../services/movie.service";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
  templateUrl: "app/view/create-movie.html",
  providers:[MovieService]
})

export class CreateMovieComponent implements OnInit{
  private titleMovie = "";
  constructor(private movieService:MovieService, private router: Router,
              private routeParams: RouteParams){

  }

  onCreateMovie(title, director, year){
    let movie: Movie = new Movie(8, title, director, year);
    this.movieService.insertMovie(movie);

    this.router.navigate(["Movies"]);
  }

  ngOnInit():any{
    this.titleMovie = this.routeParams.get("title");
  }
}
