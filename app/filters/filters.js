angular.module('filters',[])
    .filter('moneyFilter', function () { 
        return function (str) {
            if (str == 0){
                return str='Бесплатно';
            }
            else if (str == 1){
                return str='-//-';
            }
            else {
                return str+' грн. ';
            }
        }
    })