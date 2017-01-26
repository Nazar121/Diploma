create database if not exists Diploma;

use Diploma;

CREATE TABLE IF NOT EXISTS Course(
	id_Course INT PRIMARY KEY AUTO_INCREMENT,
    title_Course VARCHAR(255) NOT NULL,
    description_Course text(2500) NOT NULL,
    src_Course VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Programs(
	id_Programs INT PRIMARY KEY AUTO_INCREMENT,
    description_Programs text(2500) NOT NULL,
    fk_Programs_Course INT NOT NULL
);


CREATE TABLE IF NOT EXISTS Times(
	id_Times INT PRIMARY KEY AUTO_INCREMENT,
    time_Times VARCHAR(255) NOT NULL,
    days_Times VARCHAR(255) NOT NULL,
    start_Times DATE NOT NULL,
    fk_Times_Course INT NOT NULL
);


CREATE TABLE IF NOT EXISTS Price(
	id_Price INT PRIMARY KEY AUTO_INCREMENT,
    countLessons_Price INT NOT NULL,
    countAcademOclock_Price INT NOT NULL,
    priceGroupLessons_Price INT NOT NULL,
    priceIndividLessons_Price INT NOT NULL,
    fk_Price_Course INT NOT NULL
);


ALTER TABLE Programs ADD CONSTRAINT Programs_Course FOREIGN KEY (fk_Programs_Course) REFERENCES Course(id_Course);
ALTER TABLE Times ADD CONSTRAINT Times_Course FOREIGN KEY (fk_Times_Course) REFERENCES Course(id_Course);
ALTER TABLE Price ADD CONSTRAINT Price_Course FOREIGN KEY (fk_Price_Course) REFERENCES Course(id_Course);


/* JavaScript*/
INSERT INTO Course (title_Course,description_Course,src_Course) VALUES
("JavaScript","Курси JavaSсript у Львові охоплюють основи створення інтерактивних веб-сторінок за допомогою мови JavaScript і об’єктно-орієнтованого програмування. Основний акцент в курсі зроблений на практичних завданнях, що дозволяє краще засвоїти матеріал і закріпити отримані знання. Використання фреймворку JQuery і JQuery UI дозволить легко і елегантно організувати логіку роботи веб-додатків будь-якої складності на стороні клієнта. Ви також навчитеся основним засобам доступу до вузлів DOM документа для ефективної розробки сценаріїв сторінки.","/src/img/course_JS.png");


INSERT INTO Programs (description_Programs,fk_Programs_Course) VALUES
("Що таке JavaScript? Як викликати JavaScript? З чим взаємодіє JavaScript?",1),
("Типи даних, вирішення логічних задач на JavaScript.",1),
("Структура DOM документа, робота з DOM за допомогою JavaScript.",1),
("Функції, область видимості змінних, інші плюшки.",1),
("Робота з формами, стилями, обробники подій.",1),
("Приклад обробки: натиснення на кнопку, скролінг елемента, наведення курсора мишки, обробки форм на стороні клієнта...",1),
("Створення слайдера на JavaScript.",1),
("Загальні поняття ООП: клас, об'єкт, особливості ООП в JavaScript.",1),
("Масиви та асоціативні масиви, робота з масивами на практиці.",1),
("Об’єкт Math та його користь для сценарію, приклад годинника на JavaScript.",1),
("Навіщо потрібні фреймворки? Що таке JQuery? Де скачати і як підключити?",1),
("Робота з DOM за допомогою JQuery, селектори та ієрархія JQuery, фільтри, приклади складних фільтрів в JQuery.",1),
("Анімація в JQuery, прості анімаційні ефекти, ланцюжки з анімацій.",1),
("Створення слайдера на JQuery.",1),
("JQuery UI: де скачати та як встановити? Ефекти, підключення календаря.",1),
("Плагіни: draggable, droppable.",1),
("Що таке parallax scrolling? Застосування parallax scrolling на практиці.",1);


INSERT INTO Times (time_Times,days_Times,start_Times,fk_Times_Course) VALUES
("17:30 – 19:00","ПН-СР-ПТ","2017-02-20",1),
("10:30 – 13:30","СБ-НД","2017-02-18",1);


INSERT INTO Price (countLessons_Price,countAcademOclock_Price,priceGroupLessons_Price,priceIndividLessons_Price,fk_Price_Course) VALUES
(24,48,4500,10000,1);



/* JavaScript Advanced */
INSERT INTO Course (title_Course,description_Course,src_Course) VALUES
("JavaScript Advanced","Курси JavaScript Advanced охоплюють всі необхідні знання мови JavaScript які на сьогоднішній день є затребуваними в ІТ компаніях. Для вступу на курс необхідно володіти знаннями HTML/CSS на високому рівні, а також JavaScript (бажано пройти курс JavaScript). На курсі студенти випробують усі сторони ООП програмування на JavaScript, познайомляться з регулярними виразами та технологією AJAX. Також розглянуть популярні JavaScript фреймворки: Angular.js, Node.js, за допомогою яких студенти зможуть створювати неймовірні веб додатки які нагадують десктоп, а також створювати back-end частину. На курсі перевагу надають саме практичним заняттям, створенню міні додатків, а також окремих частин веб сторінок. На курсі ви навчитеся основним засобам JavaScript для ефективної та сучасної веб розробки.","/src/img/course_JS_Advanced.PNG");


INSERT INTO Programs (description_Programs,fk_Programs_Course) VALUES
("Поняття ООП в JavaScript.",2),
("Варіанти наслідування та прототипування.",2),
("Практика в ООП, this та шаблони виклику функцій.",2),
("Регулярні вирази, здійснення пошуку за допомогою регулярних виразів.",2),
("Використання регулярних виразів для валідації, правила пошуку тексту.",2),
("JSON. Серіалізація, передача даних за допомогою об'єктного запису JavaScript.",2),
("AJAX. HTTP запити, що це? Як працюють. Взаємодія 'КЛІЄНТ - Сервер'.",2),
("Використання методів AJAX для відправки та отримання даних.",2),
("Для чого потрібні фреймворки?",2),
("Підключення до сторінки Angular.js. Двостороннє зв'язування та інші особливості Angular.js.",2),
("Неймовірні веб-додатки що нагадують Desktop.",2),
("Node.js. Що таке серверний JavaScript?",2),
("Які переваги? Асинхронність роботи 'КЛІЄНТ - Сервер'.",2),
("Модулі Node.js. Пишем сервер JavaScript.",2);


INSERT INTO Times (time_Times,days_Times,start_Times,fk_Times_Course) VALUES
("19:00 - 20:30","ВТ-ЧТ","2017-01-17",2),
("14:00 – 17:00","СБ-НД","2017-02-25",2);


INSERT INTO Price (countLessons_Price,countAcademOclock_Price,priceGroupLessons_Price,priceIndividLessons_Price,fk_Price_Course) VALUES
(24,48,5500,10000,2);



/* Основи програмування */
INSERT INTO Course (title_Course,description_Course,src_Course) VALUES
("Основи програмування","Основи програмування – це безкоштовний курс, програма якого спеціально розроблена для людей без попереднього досвіду у сфері програмування.

Головний акцент ставиться саме на практичні заняття, тому кожен слухач курсу окрім необхідної теорії розпочинає безпосередньо програмувати – самостійно створює цикли, масиви та алгоритми для вирішення конкретних завдань.

Окрім того курс Основи програмування дає змогу усвідомити різницю між різними мовами програмування, завдяки чому Ви зможете обрати той напрямок із світу ІТ технологій, який підходить саме Вам.","/src/img/course_Основи_програмування.png");


INSERT INTO Programs (description_Programs,fk_Programs_Course) VALUES
("Комп’ютер та його основні компоненти: пристрої зберігання даних, пристрої введення, пристрої виведення, периферійні пристрої комп’ютера.",3),
("Системи числення: двійкова, вісімкова, шістнадцяткова. Робота з ними.",3),
("Типологія мов програмування: функціональні, об’єктно-орієнтовані, аспектно-орієнтовані, скриптові, процедурні.",3),
("Алгоритми. Поняття алгоритму та його значення, типи алгоритмів, основні компоненти алгоритму, побудова алгоритмів.",3),
("Арифметичні операції. Типи даних. Змінні.",3),
("Строго типізовані і не строго типізовані мови програмування, відмінності.",3),
("Створення, оголошення, ініціалізація змінних.",3),
("Синтаксичні конструкції, побудова програми з їх допомогою.",3),
("Умовні конструкції (if, else if, else, switch).",3),
("Цикли (while, do while, for).",3),
("Масиви: одномірні і багатомірні масиви, робота з ними. Цикл foreach.",3),
("Основи GUI(Swing): основні компоненти, розміщення, взаємодія.",3),
("HTML/CSS: поняття тегів, та їх атрибути, розміщення елементів на сторінці. Основи CSS, селектори.",3),
("JavaScript: змінні та функції. Обробка подій.",3);


INSERT INTO Times (time_Times,days_Times,start_Times,fk_Times_Course) VALUES
("09:00 – 10:30","ПН-ВТ-СР-ЧТ-ПТ","2017-01-30",3),
("10:30 – 12:00","ПН-ВТ-СР-ЧТ-ПТ","2017-01-30",3),
("12:00 – 13:30","ПН-ВТ-СР-ЧТ-ПТ","2017-01-30",3);


INSERT INTO Price (countLessons_Price,countAcademOclock_Price,priceGroupLessons_Price,priceIndividLessons_Price,fk_Price_Course) VALUES
(12,24,0,1,3);



/* MySQL */
INSERT INTO Course (title_Course,description_Course,src_Course) VALUES
("MySQL","Курси MySQL призначені для програмістів бажаючих познайомитися з мистецтвом проектування баз даних в теорії і на практиці. Після цього курсу Ви зможете не просто самостійно проектувати і використовувати бази даних, але й робити це розумно й ефективно. У світі сучасного промислового програмування програміст, який не володіє SQL – це нонсенс (за винятком рідкісних випадків достатньо вузької спеціалізації). В курсі розглянуті питання теорії баз даних, мови SQL як засобу взаємодії з БД, прийомів правильного проектування БД і складання запитів. Практична частина курсу заснована на сервері MySQL, що робить курс особливо цінним для початківців веб-програмістів.","/src/img/course_MySQL.PNG");


INSERT INTO Programs (description_Programs,fk_Programs_Course) VALUES
("Вступ, реляційні бази даних: що таке база даних? Що таке реляційна база даних?",4),
("Приклади коду на мові SQL (створювати, видаляти, вибирати, оновлювати, вставляти).",4),
("Короткий огляд основних діалектів SQL (MSSQL, Oracle, MySQL, SQLite).",4),
("Знайомство з MySQL. Роль MySQL в розробці Web-Проектів.",4),
("Клієнтські програми для роботи з MySQL (PhpMyAdmin, HeidiSQL, MySQL).",4),
("Основні принципи проектування таблиць: одна таблиця - одна сутність, ключ кандидат, первинний ключ, зовнішній ключ.",4),
("Типи зв'язків: зв'язок 'Один-до-багатьох', зв'язок 'Один-до-одного', зв'язок 'Багато-до-багатьох'.",4),
("Робота з базами даних, робота з таблицями.",4),
("Типи даних SQL, сновні типи даних: вибір типів даних полів таблиць, особливе значення NULL.",4),
("Управління даними на SQL (DML): вставка, видалення, оновлення, вибірка даних.",4),
("Оператор Select і робота з ним.",4),
("Складна вибірка і модифікація даних.",4),
("Збережені процедури і транзакції.",4),
("Специфіка роботи з MySQL.",4),
("Управління доступом до бази даних.",4),
("Команди огляду БД і таблиць.",4),
("Види движків таблиць: MyISAM, InnoDB, Memory.",4);


INSERT INTO Times (time_Times,days_Times,start_Times,fk_Times_Course) VALUES
("19:00 - 20:30","СБ-НД","2017-02-11",4),
("19:00 – 22:00","ВТ-ЧТ","2017-02-07",4);


INSERT INTO Price (countLessons_Price,countAcademOclock_Price,priceGroupLessons_Price,priceIndividLessons_Price,fk_Price_Course) VALUES
(12,24,3000,4500,4);


select * from course as c join programs as p on c.id_Course=p.fk_Programs_Course where c.id_Course=2;
