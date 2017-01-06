import {Component} from "angular2/core";
import {MoviesListComponent} from "./components/movies-list.component";
import {MoviesFooterComponent} from "./components/movies-footer.component";
import {ContactComponent} from "./components/contact.component";
import {CreateMovieComponent} from "./components/create-movie.component";

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";


@Component({
  selector:"my-app",
  templateUrl: "app/view/movies.html",
  directives: [MoviesListComponent, MoviesFooterComponent,
               ContactComponent,
               CreateMovieComponent,
               ROUTER_DIRECTIVES]

})

@RouteConfig([
  {path: "/movies", name: "Movies", component: MoviesListComponent,
   useAsDefault:true},
  {path: "/create-movie", name: "CreateMovie", component: CreateMovieComponent},
  {path: "/create-movie/:title", name: "CreateMovieBaseOther",
   component: CreateMovieComponent},
  {path: "/contact", name: "Contact", component: ContactComponent}
])

export class AppComponent{
  private title:string = "Movies with Angular 2";
}
