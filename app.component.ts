import {Component} from "angular2/core";
import {Movie} from "./model/movie";

@Component({
  selector:"my-app",
  templateUrl: "app/view/movies.html",
  styleUrls:["../assets/css/styles.css"]
})

export class AppComponent{
  private title:string = "Movies with Angular 2";
  private movie:Movie;
  private showData:boolean;

  constructor(){
    this.showData = false;
    this.movie = new Movie(1,"Batman vs Superman","Zack Snide",2016);
    this.debug();
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


}
