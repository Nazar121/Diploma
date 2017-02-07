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
    .filter('newsTitleFilter', function () { 
        return function (str) {
            var res=str.charAt(0).toUpperCase()+str.slice(1).toLocaleLowerCase();
            return res;
        }
    })