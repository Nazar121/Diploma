angular.module('myApp')
    .config(function($routeProvider){
    $routeProvider
    
        .when("/",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/home.html',
            title: 'Logos'
        })
        .otherwise("/");
    
    }) 

    .run(['$rootScope', function($rootScope) {

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });

    }])