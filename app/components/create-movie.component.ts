import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Movie} from "../model/movie";
import {Router, RouteParams} from "angular2/router";
import {MovieService} from "../services/movie.service";


@Component({
  templateUrl: "app/view/create-movie.html",
  providers:[MovieService]
})

export class CreateMovieComponent implements OnInit{
  private titleMovie = "";
  private newMovie:Movie;
  constructor(private movieService:MovieService, private router: Router,
              private routeParams: RouteParams){

  }

  onSubmit(){
    this.movieService.insertMovie(this.newMovie);
    this.router.navigate(["Movies"]);
  }

  ngOnInit():any{
    this.titleMovie = this.routeParams.get("title");

    this.newMovie = new Movie(0,
                              this.routeParams.get("title"),
                              this.routeParams.get("director"),
                              parseInt(this.routeParams.get("year"))
                              );
  }
}
