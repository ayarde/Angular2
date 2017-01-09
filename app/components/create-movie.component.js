System.register(["angular2/core", "../model/movie", "angular2/router", "../services/movie.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, movie_1, router_1, movie_service_1, CreateMovieComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movie_1_1) {
                movie_1 = movie_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            }
        ],
        execute: function () {
            CreateMovieComponent = (function () {
                function CreateMovieComponent(movieService, router, routeParams) {
                    this.movieService = movieService;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.titleMovie = "";
                }
                CreateMovieComponent.prototype.onCreateMovie = function (title, director, year) {
                    var movie = new movie_1.Movie(8, title, director, year);
                    this.movieService.insertMovie(movie);
                    this.router.navigate(["Movies"]);
                };
                CreateMovieComponent.prototype.ngOnInit = function () {
                    this.titleMovie = this.routeParams.get("title");
                };
                return CreateMovieComponent;
            }());
            CreateMovieComponent = __decorate([
                core_1.Component({
                    templateUrl: "app/view/create-movie.html",
                    providers: [movie_service_1.MovieService]
                }),
                __metadata("design:paramtypes", [movie_service_1.MovieService, router_1.Router,
                    router_1.RouteParams])
            ], CreateMovieComponent);
            exports_1("CreateMovieComponent", CreateMovieComponent);
        }
    };
});
//# sourceMappingURL=create-movie.component.js.map