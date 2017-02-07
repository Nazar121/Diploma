angular.module('mainCtrl',[])
    .controller('mainCtrl',mainCtrl)
mainCtrl.$inject=['Factory','$http'];           

function mainCtrl(Factory,$http){
    
    this.arrQuestionAnswer = [
        {
            id: '1',
            question: 'Я нічого не розумію в програмуванні. Чи зможу я навчатися на ваших курсах?',
            answer: 'Так. Більшість курсів розрахована на новачків. Технічна освіта теж не обов’язкова. Якщо у Вас є сумніви, або ж ви вагаєтесь запрошуємо пройти безкоштовний курс по “Основах програмування”.'
        },
        {
            id: '2',
            question: 'Які мінімальні знання та вимоги для початку навчання по курсах програмування та тестування?',
            answer: 'Впевнене володіння персональним комп’ютером.'
        },
        {
            id: '3',
            question: 'Чи є у Вас пробні заняття?',
            answer: 'Так. Ви можете записатися на пробне заняття по телефону.'
        },
        {
            id: '4',
            question: 'Чим Logos IT Academy відрізняється від інших навчальних закладів?',
            answer: 'Кваліфікованими практикуючими викладачами, привітним персоналом, сучасними комп’ютерними аудиторіями, також ми не заощаджуємо на оренді наш офіс знаходиться в центрі міста, що забезпечує оптимальний маршут з будь-якої точки міста.'
        },
        {
            id: '5',
            question: 'Чи потрібно носити з собою особистий ноутбук на заняття?',
            answer: 'При бажанні, всі аудиторії Logos IT Academy обладнані необхідною сучасною технікою та безпровідним інтернетом.'
        },
        {
            id: '6',
            question: 'Чи задаєте ви домашні завдання?',
            answer: 'Так. Іноді навіть багато. Виконання цих завдань дуже важливе, якщо ви дійсно хочете навчитися програмуванню.'
        },
        {
            id: '7',
            question: 'Як зазвичай проходить заняття?',
            answer: 'Все залежить від теми. Зазвичай перші 10-15 хвилин відведені на обговорення домашнього завдання та питання по ньому, весь наступний час практичне заняття під час якого лектор показує на проекторі новий матеріал який слухачі відразу тестять. Конспекти ніхто не пише, презентації та теоретичний матеріал подається в електронній формі, домашні завдання також відсилаються на емейл.'
        },
        {
            id: '8',
            question: 'Чи ви видаєте сертифікат про закінчення курсів?',
            answer: 'Так – видаємо.'
        },
        {
            id: '9',
            question: 'Чи можна оплачувати курси за безготівковим розрахунком?',
            answer: 'Так.'
        },
        {
            id: '10',
            question: 'Я не встиг (ла) записатися на навчання і курс вже почався. Чи можу приєднається до групи?',
            answer: 'Так, викладач безкоштовно проводить 1-3 індивідуальні заняття по даному курсу і якщо є місця, долучає до групи.'
        },
        {
            id: '11',
            question: 'Скільки зазвичай людей в групі?',
            answer: 'Зазвичай до 5, або 10 залежить від курсу. В акційних групах може бути до 15 осіб. У будь-якому випадку процес навчання побудований так, що ніхто не залишиться без уваги. У разі якщо група велика, на занятті присутній асистент викладача, який допомагає студентам з практичними завданнями. Мінімальна кількість людей для запуску групи троє.'
        },
        {
            id: '12',
            question: 'Якщо я з іншого міста, можна пройти курс в онлайн режимі?',
            answer: 'Так, попередній графік та необхідний софт узгоджується з викладачем, пробне заняття є безкоштовним, також перевагою онлайн навчання є економія часу та можливість відеозапису кожного заняття.'
        }
    ];
    
    
    //  Поява/скривання меню на малих екранах
    this.menu = function(){
        $('.header__menu2').toggle();
    };
    
    
    //  Поява/скривання відповідей на питпння
    this.questionAnswer = function($index){
        var index = $index;
        $('.read__answer').eq(index).toggle();
    };
    
    // Навігація по сайті
   /* this.navigationScroll = function(event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });*/
    
    
    //  Функція для репіту всіх курсів
    this.repeatCourse = function(){
        $http.post("http://localhost:3000/repeatCourse")
            .success((res) => {
            this.arrAllCourse = res;
            /*console.log("arrAllCourse Success ",res);*/
        })
            .error((err) => {
            console.log("ERROR arrAllCourse ",err)
        })
    }
    this.repeatCourse();
    
    
    //  Функція для рупіту всіх розкладів
    this.repeatSchedule = function(){
        $http.post("http://localhost:3000/repeatSchedule")
            .success((res) => {
            this.arrAllSchedule = res;
            /*console.log("repeatSchedule Success ",res);*/
        })
            .error((err) => {
            console.log("ERROR arrAllCourse ",err)
        })
    }
    this.repeatSchedule();
    
    
    //  Функція для репіту цін усіх курсів
    this.repeatPrice = function(){
        $http.post("http://localhost:3000/repeatPrice")
            .success((res) => {
            this.arrAllPrice = res;
            /*console.log("repeatPrice Success ",res);*/
        })
            .error((err) => {
            console.log("ERROR arrAllCourse ",err)
        })
    }
    this.repeatPrice();
    
    
    //  Функція яка дає,всю інфу про даний курс
    this.repeatCourseName = function($index){
        var index = $index;
        /*console.log(index);*/
        this.courseName = function(){
            var obj = {
                title_Course: this.arrAllCourse[index].title_Course
            }
            $http.post("http://localhost:3000/courseName",obj)
                .success((res) => {
                this.arrCourseName = res;
                /*console.log("arrCourseName Success ",res);*/
            })
                .error((err) => {
                console.log("ERROR arrCourseName ",err)
            })
        };
        this.courseNameOclock = function(){
            var obj = {
                title_Course: this.arrAllCourse[index].title_Course
            }
            $http.post("http://localhost:3000/courseNameOclock",obj)
                .success((res) => {
                this.courseNameOclock = res;
                /*console.log("courseNameOclock Success ",res);*/
            })
                .error((err) => {
                console.log("ERROR courseNameOclock ",err)
            })
        };
        this.courseNamePrograms = function(){
            var obj = {
                title_Course: this.arrAllCourse[index].title_Course
            }
            $http.post("http://localhost:3000/courseNamePrograms",obj)
                .success((res) => {
                this.arrCoursePrograms = res;
                /*console.log("arrCoursePrograms Success ",res);*/
            })
                .error((err) => {
                console.log("ERROR arrCoursePrograms ",err)
            })
        };
        this.courseName();
        this.courseNameOclock();
        this.courseNamePrograms();
    };
    
    
    //  Функція ака вертає перелік всіх курсів
    this.repeatNews = function(){
        $http.post("http://localhost:3000/repeatNews")
            .success((res) => {
            this.arrNews = res;
            /*console.log("arrNews Success ",res);*/
        })
            .error((err) => {
            console.log("ERROR arrNews ",err)
        })
    };
    this.repeatNews();
    
    
    //  Функція яка дає,всю інфу про дану новину
    this.repeatNewsName = function($index){
        var index = $index;
        /*console.log(this.arrNews[index].title_News);*/
        this.newsName = function(){
            var obj = {
                title_News: this.arrNews[index].title_News
            }
            $http.post("http://localhost:3000/newsName",obj)
                .success((res) => {
                this.arrNewsName = res;
                /*console.log("arrNewsName Success ",res);*/
            })
                .error((err) => {
                console.log("ERROR arrNewsName ",err)
            })
        };
        this.newsName();
    };
    
};