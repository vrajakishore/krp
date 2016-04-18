/**
 * Created by vraja on 4/16/2016.
 */

var routerApp = angular.module('routerApp', ['ui.router','ngMessages']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/create');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('create', {
            url: '/create',
            templateUrl: 'pages/create/create.html'
        })

        // nested list with custom controller and add actor
        .state('create.addActor', {
            url: '/addActor',
            templateUrl: 'pages/create/createActor.html',
            /*controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }*/
        })

        // nested list with add film
        .state('create.addFilm', {
            url: 'addFilm',
            templateUrl: 'pages/create/createFilm.html'

        })

        // UPDATE STATE AND NESTED VIEWS =====================================
        .state('update', {
            url: '/update',
            templateUrl: 'pages/update/update.html'
        })

        // nested list with update actor
        .state('update.updateActor', {
            url: '/updateActor',
            templateUrl: 'pages/update/updateActor.html'
        })

        // nested list with update film
        .state('update.updateFilm', {
            url: 'updateFilm',
            templateUrl: 'pages/update/updateFilm.html'

        })

        // SEARCH STATE AND NESTED VIEWS =====================================
        .state('search', {
            url: '/search',
            templateUrl: 'pages/search/search.html'
        })

        .state('search.searchActor', {
            url: '/searchActor',
            templateUrl: 'pages/search/searchActor.html',
            controller:"findActor"
        })

        .state('search.searchFilm', {
            url: '/searchFilm',
            templateUrl: 'pages/search/searchFilm.html',
            controller:"findFilm"
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('register', {
            url: '/register',
            templateUrl: 'register.html'
        });

});

var validationApp = angular.module('validationApp', ['ngMessages']);

validationApp.controller('MainCtrl', MainCtrl);
function MainCtrl() {};