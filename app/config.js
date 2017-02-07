angular.module('myApp')
    .config(function($routeProvider){
    $routeProvider
    
        .when("/",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/home.html',
            title: 'Logos'
        })
        .when("/contacts",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/contacts.html',
            title: 'Контакти Logos'
        })
        .when("/course",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/course.html',
            title: 'Комп"ютерні курси Logos'
        })
        .when("/schedule",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/schedule.html',
            title: 'Розклад занять | Графік роботи Logos'
        })
        .when("/price",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/price.html',
            title: 'Ціни курсів в Logos'
        })
        .when("/courseName",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/courseName.html',
            title: 'Курси в Logos'
        })
        .when("/news",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/news.html',
            title: 'Новини в Logos'
        })
        .when("/newsName",{
            controller: 'mainCtrl',
            templateUrl:'app/templates/newsName.html',
            title: 'Новини в Logos'
        })
        .otherwise("/");
    
        }) 

    .run(['$rootScope', function($rootScope) {

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });

    }])