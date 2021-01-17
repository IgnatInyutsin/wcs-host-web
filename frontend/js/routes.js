var main = angular.module("main", ['ngRoute','ngCookies']);

main.config(function($routeProvider){

    $routeProvider.when("/main/",{
        controller: "main",
        templateUrl:"views/controllers/main.html"
    });

    $routeProvider.when("/projects/",{
        controller: "projects",
        templateUrl:"views/controllers/projects.html"
    });

    $routeProvider.when("/contacts/",{
        controller: "contacts",
        templateUrl:"views/controllers/statistic.html"
    });


    $routeProvider.when("/about-us/",{
        controller: "about-us",
        templateUrl:"views/controllers/about-us.html"
    });

    $routeProvider.when("/search/",{
        controller: "search",
        templateUrl:"views/controllers/search.html"
    });

});