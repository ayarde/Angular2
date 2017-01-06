System.register(["../model/movie"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var movie_1;
    var MOVIES;
    return {
        setters:[
            function (movie_1_1) {
                movie_1 = movie_1_1;
            }],
        execute: function() {
            exports_1("MOVIES", MOVIES = [
                new movie_1.Movie(1, "Batman vs Superman", "Zack Snider", 2016),
                new movie_1.Movie(2, "Thor", "Zack Snide", 2016),
                new movie_1.Movie(3, "Captain America Civil War", "Zack Snider", 2016),
                new movie_1.Movie(4, "Deadpool", "Zack Snider", 2016),
                new movie_1.Movie(5, "Spiderman", "Zack Snider", 2016),
                new movie_1.Movie(6, "Antman", "Zack Snider", 2016)
            ]);
        }
    }
});
//# sourceMappingURL=mock.movie.js.map