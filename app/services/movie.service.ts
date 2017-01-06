import{Injectable} from "angular2/core";
import{Movie} from "../model/movie";
import{MOVIES} from "./mock.movie";

@Injectable()
export class MovieService {
  getMovies(){
    return MOVIES;
  }

  insertMovie(movie: Movie){
    Promise.resolve(MOVIES).then((movies:Movie[]) => movies.push(movie));
  }
}
