System.register(["angular2/core", "./components/movies-list.component", "./components/movies-footer.component", "./components/contact.component", "./components/create-movie.component", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, movies_list_component_1, movies_footer_component_1, contact_component_1, create_movie_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (movies_list_component_1_1) {
                movies_list_component_1 = movies_list_component_1_1;
            },
            function (movies_footer_component_1_1) {
                movies_footer_component_1 = movies_footer_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (create_movie_component_1_1) {
                create_movie_component_1 = create_movie_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Movies with Angular 2";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        templateUrl: "app/view/movies.html",
                        directives: [movies_list_component_1.MoviesListComponent, movies_footer_component_1.MoviesFooterComponent,
                            contact_component_1.ContactComponent,
                            create_movie_component_1.CreateMovieComponent,
                            router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: "/movies", name: "Movies", component: movies_list_component_1.MoviesListComponent,
                            useAsDefault: true },
                        { path: "/create-movie", name: "CreateMovie", component: create_movie_component_1.CreateMovieComponent },
                        { path: "/create-movie/:title/:director/:year", name: "CreateMovieBaseOther",
                            component: create_movie_component_1.CreateMovieComponent },
                        { path: "/contact", name: "Contact", component: contact_component_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map