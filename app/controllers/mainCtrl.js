angular.module('mainCtrl',[])
    .controller('mainCtrl',mainCtrl)
mainCtrl.$inject=['Factory','$http'];           

function mainCtrl(Factory,$http){
    this.menu = function(){
        $('.header__menu').toggle(200);
    };
};