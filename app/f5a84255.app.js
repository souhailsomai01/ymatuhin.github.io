(function(){"use strict";angular.module("ymatuhingithubioApp",["ngSanitize","ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){return a.otherwise({redirectTo:"/"}),b.html5Mode(!1),b.hashPrefix("!")}]).run(["$rootScope","$location","$http",function(a,b,c){return a.blogUrl="/assets/articles/",a.blogArticles={ru:"",en:""},a.getArticles=function(b){return a.blogArticles[a.lang]?b(a.blogArticles[a.lang]):c.get(a.blogUrl+a.lang+".json").success(function(c){return a.blogArticles[a.lang]=c,b(c)})},a.$on("$locationChangeStart",function(){return a.url=b.url()}),window.scrollTo(0,0),document.documentElement.addEventListener("mousedown",function(a){var b,c;return b=a.target,(c=b.getAttribute("href"))?(c="/"===c[0]&&-1===c.indexOf("/#!/")?"/#!"+c:c,b.setAttribute("href",c)):void 0})}])}).call(this),function(){"use strict";angular.module("ymatuhingithubioApp").config(["$routeProvider",function(a){return a.when("/blog/",{templateUrl:"app/blog/blog.html",controller:"BlogCtrl"})}]),angular.module("ymatuhingithubioApp").controller("BlogCtrl",["$rootScope","$scope",function(a,b){return a.getArticles(function(a){return b.data=a}),b.$watch("lang",function(){return a.getArticles(function(a){return b.data=a})})}])}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").config(["$routeProvider",function(a){return a.when("/blog/:page/",{template:'<div class="article" ng-bind-html="article">123</div>',controller:"BlogPageCtrl"})}]),angular.module("ymatuhingithubioApp").controller("BlogPageCtrl",["$rootScope","$scope","$http","$routeParams","$location",function(a,b,c,d,e){var f;return f=d.page,c.get(a.blogUrl+f+".html").success(function(a){return b.article=a}).error(function(){return e.path("/blog")})}])}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").config(["$routeProvider",function(a){return a.when("/folio/",{templateUrl:"app/folio/folio.html",controller:"FolioCtrl"})}]),angular.module("ymatuhingithubioApp").controller("FolioCtrl",["$scope",function(a){return a.message="Hello"}])}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").directive("footer",function(){return{templateUrl:"app/footer/footer.html",restrict:"EA",link:function(){}}})}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").directive("lang",function(){return{templateUrl:"app/lang/lang.html",restrict:"EA",controller:["$rootScope",function(a){var b;return b=(navigator.language||navigator.systemLanguage||navigator.userLanguage).substr(0,2).toLowerCase(),a.lang=localStorage.language?localStorage.language:"ru"===b?"ru":"en",a.changeDafaultLang=function(b){return localStorage.language=b,a.lang=b}}]}})}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").config(["$routeProvider",function(a){return a.when("/",{templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("ymatuhingithubioApp").controller("MainCtrl",["$scope","$http","$location",function(){}])}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").directive("navigation",function(){return{templateUrl:"app/navigation/navigation.html",restrict:"EA",link:function(){}}})}.call(this),function(){"use strict";angular.module("ymatuhingithubioApp").config(["$routeProvider",function(a){return a.when("/projects/",{templateUrl:"app/projects/projects.html",controller:"ProjectsCtrl"})}]),angular.module("ymatuhingithubioApp").controller("ProjectsCtrl",["$scope",function(a){return a.message="Hello"}])}.call(this),angular.module("ymatuhingithubioApp").run(["$templateCache",function(a){"use strict";a.put("app/blog/blog.html",'<div class=markdown><h1 class=ru>Блог</h1><h1 class=en>Blog</h1><ul class=blog-list><li data-date="{{ current.date }}" ng-repeat="current in data track by $index"><a ng-href="/blog/{{ current.link }}">{{ current.title }}</a> – {{ current.description }}<br><span class=blog-list__tags>{{ current.tags }}</span></li></ul></div>'),a.put("app/folio/folio.html",'<div class="markdown ru"><h1>Портфолио работ</h1><blockquote><p>Версия на офф. сайтах может частично или полностью отличаться от того, что было сделано мной.</p></blockquote><ol><li value=0>Этот сайт – vanillajs, angularjs, stylus.</li><li>Метро Тройка – разработка распонсив лэддинга (внизу слайдер с поддержкой свайпов).<br>Посмотреть на <a href="//www.troika.me/">офф. сайте</a> или <a href="//ymatuhin.bitbucket.org/projects/troika/">локальную копию</a>;</li><li>Биллинград – разработка распонсив админки с интересной регистрацией.<br>Посмотреть на <a href="//my.billingrad.com/">офф. сайте</a> или локальные копии <a href="//ymatuhin.bitbucket.org/projects/billingrad/public/">главной</a>, и других страниц (<a href=//ymatuhin.bitbucket.org/projects/billingrad/public/company.html>1</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/form.html>2</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/profile.html>3</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/proj_step_1.html>4</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/proj_step_2.html>5</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/proj_step_3.html>6</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/projects-new.html>7</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/projects.html>8</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/reg.html>9</a>);</li><li>Billingrad – верстка email писем.<br>Посмотреть локальные копии <a href="//ymatuhin.bitbucket.org/projects/billingrad/email/1/">первой</a> и <a href="//ymatuhin.bitbucket.org/projects/billingrad/email/2/">второй</a> страницы;</li><li>Терема – верстка email письма.<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/terema/">локальную копию</a>;</li><li>Искусство глазами искусственного интеллекта (Siemens iDos) – разработка сайта с интересной анимацией (если на последней картине нажать «Узнать больше», то машинка будет поворачиваться за курсором).<br>Посмотреть на <a href=//www.siemens-home.com/ru/idos-and-art.html>офф. сайте</a>;</li><li>Ford (Федор Бородач) – разработка сайта с интересным слайдером авто и анимацией.<br>Посмотреть на <a href="//fedorborodach.ru/">офф. сайте</a> или локальные копии <a href="//ymatuhin.bitbucket.org/projects/ford/">главной страницы</a>, <a href=//ymatuhin.bitbucket.org/projects/ford/contest.html>конкурса</a> и <a href=//ymatuhin.bitbucket.org/projects/ford/private_office.html>личного кабинета</a>;</li><li>Lays strong – разработка single page (angularjs).<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/lays-strong/">локальную копию</a>;</li><li>Музей современного момента (beeline) – разработка приложения для социальных сетей с параллаксом.<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/beeline_msm/">локальную копию</a>;</li><li>ChatOn (король вечеринки) – разработка приложения для социальной сети Вконтакте.<br>Посмотреть <a href=//vk.com/app3210355_33730242>Вконтакте</a> или <a href="//ymatuhin.bitbucket.org/projects/chat_on/">локальную копию</a>;</li><li>Калькулятор проектов – разработка калькулятора стоимости проектов.<br>Посмотреть на <a href=//msocial.calculateproject.ru>офф. сайте</a> или <a href="//ymatuhin.bitbucket.org/projects/calculator/">локальную копию</a>;</li><li>Hbo amediateka – разработка приложения для Вконтакте.<br>Посмотреть <a href=//vk.com/app3926030_33730242>Вконтакте</a> или локальные копии <a href="//ymatuhin.bitbucket.org/projects/hbo_amediateka/">главной страницы</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/information.html>правил</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/personal_office.html>личного кабинета</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/quiz.html>викторины</a>, страниц <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/serial_page.html>сериала</a> и <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/serials.html>сериалов</a>;</li><li>Uni Сredit bank – разработка нескольких страниц для конкурса.<br>Посмотреть или локальные копии <a href=//ymatuhin.bitbucket.org/projects/unicredit/parallax>главной страницы</a> (делалась отдельно от остальных), <a href=//ymatuhin.bitbucket.org/projects/unicredit/prizes.html>призы</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/promo-code.html>промо код</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/timeline.html>временная линия</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/winner.html>победители</a> и <a href=//ymatuhin.bitbucket.org/projects/unicredit/сontentpage2.html>как принять участие</a>;</li><li>СБ Сервис – разработка сайта для группы компаний занимающиеся охраной.<br>Посмотреть на <a href="//www.sb-service.com.ua/">офф. сайте</a> или <a href="//ymatuhin.bitbucket.org/projects/sb-service/">локальную копию</a> (ссылки в меню кликабельны);</li><li>Все сезоны – разработка сайта туристической компании.<br>Посмотреть локальную копию <a href="//ymatuhin.bitbucket.org/projects/vse-sezoni/">главной</a> и других страниц (<a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/about.html>1</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/contact.html>2</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/licenzii.html>3</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/news.html>4</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/otel.html>5</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/otziv.html>6</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/sovet.html>7</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/strani.html>8</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/tours_1.html>9</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/tours.html>10</a>);</li><li>Sony Xperia – разработка небольшого сайта.<br>Посмотреть локальную копию <a href="//ymatuhin.bitbucket.org/projects/sony_xperia/">главной</a>, <a href=//ymatuhin.bitbucket.org/projects/sony_xperia/obzor.html>обзорной #1</a> и <a href=//ymatuhin.bitbucket.org/projects/sony_xperia/obzor2.html>обзорной #2</a> страницы;</li><li>Sattelit Telecom – разработка сайта о компании. К сожалению у меня сохранилась одна из первых версий состоящая их 3 страниц, всяко лучше чем ничего. В интернете не удалось найти этот сайт, но есть локальная копия <a href="//ymatuhin.bitbucket.org/projects/sattelit/">главной</a>, <a href=//ymatuhin.bitbucket.org/projects/sattelit/contact.html>контактов</a> и <a href=//ymatuhin.bitbucket.org/projects/sattelit/vacansies.html>вакансий</a>;</li><li>Renault – разработка заглушки для конкурса.<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/renault-drive/">локальную копию</a>;</li><li>Seo langing – разработка лэддинг страницы о SEO.<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/seo-landing/">локальную копию</a>;</li><li>Медицинский центр «Таблетка» – разработка страниц сайта.<br>Посмотреть на <a href=//www.tabletka-mc.ru>офф. сайте</a> или локальные копии <a href="//ymatuhin.bitbucket.org/projects/tabletka-mc/">главной</a>, <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/inner.html>внутренней</a>, <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/inner-with-table.html>внутренней c таблицей</a> страницы.<br>Страницы <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/news.html>новостей</a>, <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/analize.html>анализов</a> и <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/articles.html>статей</a>;<!-- <li>In-design – разработка одностраничного портфолио.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/in-design/">локальную копию</a>;\n		<li>Вилка цен – разработка заглушки для сервиса совместных покупок.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/vilkacen/">локальную копию</a>;\n		<li>ООО «Пром Трейд» – разработка главной страницы на основе 960 grid;\n			<br>Посмотреть на <a href="//prom32.ru">офф. сайте</a> или <a href="//ymatuhin.bitbucket.org/projects/prom32/">локальную копию</a>;\n		<li>Findname – разработка сервиса для регистрации доменных имен.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/findname/">локальную копию</a>;\n		<li>Remington – одностраничное приложения для Вконтакте.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/remington/">локальную копию</a>;\n		<li>Rusgeocom – разработка страниц для интернет-магазина. Одна из моих первых работ, смотрю на код внутри с слезами на глазах :-)\n			<br>На офф. сайте уже сменили дизайн, но у меня осталась локальная копия <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/">главной страницы</a>, <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/inside.html">каталога</a>, <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/inside-monitoring.html">систем мониторинга</a>, <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/tovar-aksessuar.html">товаров</a> и <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/trimble.html">систем управления</a>; --></li></ol><blockquote><p>Здесь, конечно, далеко не все выполненные мной работы. Некоторые из них были выполнены достаточно давно, поэтому не судите строго :-)</p></blockquote></div><div class="markdown en"><h1>Portfoilo</h1><blockquote><p>Version from original web sites can have differents between my version.</p></blockquote><ol><li value=0>This site – vanillajs, angularjs, stylus.</li><li>Troyka metro – development responsive ladding page (slider with Swype support).<br>See on the <a href="//www.troika.me/">official site</a> or <a href="//ymatuhin.bitbucket.org/projects/troika/">local copy</a>;</li><li>Billingrad – development responsive administration panel with interesting registration.<br>See on the <a href="//my.billingrad.com/">official site</a> or local copies <a href="//ymatuhin.bitbucket.org/projects/billingrad/public/">main</a>, and other pages (<a href=//ymatuhin.bitbucket.org/projects/billingrad/public/company.html>1</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/form.html>2</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/profile.html>3</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/proj_step_1.html>4</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/proj_step_2.html>5</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/proj_step_3.html>6</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/projects-new.html>7</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/projects.html>8</a>, <a href=//ymatuhin.bitbucket.org/projects/billingrad/public/reg.html>9</a>);</li><li>Billingrad – development email letters.<br>See on the local copies <a href="//ymatuhin.bitbucket.org/projects/billingrad/email/1/">first</a> and <a href="//ymatuhin.bitbucket.org/projects/billingrad/email/2/">second</a> pages;</li><li>Towers – development email letter.<br>See on the <a href="//ymatuhin.bitbucket.org/projects/terema/">local copy</a>;</li><li>Art through the eyes of artificial intelligence (Siemens iDos) – development сайта beauty animation.<br>See on the <a href=//www.siemens-home.com/ru/idos-and-art.html>official site</a>;</li><li>Ford – development with interesting auto slider and animation.<br>See on the <a href="//fedorborodach.ru/">official site</a> или local copies <a href="//ymatuhin.bitbucket.org/projects/ford/">main page</a>, <a href=//ymatuhin.bitbucket.org/projects/ford/contest.html>contest</a> и <a href=//ymatuhin.bitbucket.org/projects/ford/private_office.html>private office</a>;</li><li>Lays strong – development single page (angularjs).<br>See on the <a href="//ymatuhin.bitbucket.org/projects/lays-strong/">local copy</a>;</li><li>Museum of Modern moment (beeline) – development web application for social networks (with parallax).<br>See on the <a href="//ymatuhin.bitbucket.org/projects/beeline_msm/">local copy</a>;</li><li>ChatOn – development web application for social networks "Vkontakte".<br>See on the <a href=//vk.com/app3210355_33730242>Vkontakte</a> or <a href="//ymatuhin.bitbucket.org/projects/chat_on/">local copy</a>;</li><li>Calculate projects – development project price calculate service.<br>See on the <a href=//msocial.calculateproject.ru>official site</a> or <a href="//ymatuhin.bitbucket.org/projects/calculator/">local copy</a>;</li><li>Hbo amediateka – development web application for social networks "Vkontakte".<br>See on the <a href=//vk.com/app3926030_33730242>Vkontakte</a> or local copies <a href="//ymatuhin.bitbucket.org/projects/hbo_amediateka/">main page</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/information.html>rules</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/personal_office.html>personal office</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/quiz.html>quiz</a>, <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/serial_page.html>serial page</a> and <a href=//ymatuhin.bitbucket.org/projects/hbo_amediateka/serials.html>serials</a>;</li><li>Uni Сredit bank – development some pages for contest.<br>See on the copies <a href=//ymatuhin.bitbucket.org/projects/unicredit/parallax>main page</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/prizes.html>prizes</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/promo-code.html>promo-code</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/timeline.html>timeline</a>, <a href=//ymatuhin.bitbucket.org/projects/unicredit/winner.html>winners</a> and <a href=//ymatuhin.bitbucket.org/projects/unicredit/сontentpage2.html>content page</a>;</li><li>SB service – development web site.<br>See on the <a href="//www.sb-service.com.ua/">official site</a> or <a href="//ymatuhin.bitbucket.org/projects/sb-service/">local copy</a>;</li><li>All seasons – development web site for tourists.<br>See on the local copy <a href="//ymatuhin.bitbucket.org/projects/vse-sezoni/">main</a> and other pages (<a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/about.html>1</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/contact.html>2</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/licenzii.html>3</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/news.html>4</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/otel.html>5</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/otziv.html>6</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/sovet.html>7</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/strani.html>8</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/tours_1.html>9</a>, <a href=//ymatuhin.bitbucket.org/projects/vse-sezoni/tours.html>10</a>);</li><li>Sony Xperia – development small web site.<br>See on the local copy <a href="//ymatuhin.bitbucket.org/projects/sony_xperia/">main</a>, <a href=//ymatuhin.bitbucket.org/projects/sony_xperia/obzor.html>preview</a> and <a href=//ymatuhin.bitbucket.org/projects/sony_xperia/obzor2.html>preview #2</a> pages;</li><li>Renault – development plug for the contest.<br>See on the <a href="//ymatuhin.bitbucket.org/projects/renault-drive/">local copy</a>;</li><li>Seo langing – development ladding page about SEO.<br>See on the <a href="//ymatuhin.bitbucket.org/projects/seo-landing/">local copy</a>;</li><li>Medical Center "Tablet" – development web site.<br>See on the <a href=//www.tabletka-mc.ru>official site</a> или local copies <a href="//ymatuhin.bitbucket.org/projects/tabletka-mc/">main</a>, <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/inner.html>inner</a>, <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/inner-with-table.html>inner with table</a> pages.<br><a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/news.html>News</a>, <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/analize.html>analysis</a> фтв <a href=//ymatuhin.bitbucket.org/projects/tabletka-mc/articles.html>articles</a>;<!-- <li>In-design – development одностраничного портфолио.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/in-design/">local copy</a>;\n		<li>Вилка цен – разработка заглушки для сервиса совместных покупок.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/vilkacen/">локальную копию</a>;\n		<li>ООО «Пром Трейд» – разработка главной страницы на основе 960 grid;\n			<br>Посмотреть на <a href="//prom32.ru">офф. сайте</a> или <a href="//ymatuhin.bitbucket.org/projects/prom32/">локальную копию</a>;\n		<li>Findname – разработка сервиса для регистрации доменных имен.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/findname/">локальную копию</a>;\n		<li>Remington – одностраничное приложения для Вконтакте.\n			<br>Посмотреть <a href="//ymatuhin.bitbucket.org/projects/remington/">локальную копию</a>;\n		<li>Rusgeocom – разработка страниц для интернет-магазина. Одна из моих первых работ, смотрю на код внутри с слезами на глазах :-)\n			<br>На офф. сайте уже сменили дизайн, но у меня осталась локальная копия <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/">главной страницы</a>, <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/inside.html">каталога</a>, <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/inside-monitoring.html">систем мониторинга</a>, <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/tovar-aksessuar.html">товаров</a> и <a href="//ymatuhin.bitbucket.org/projects/rusgeocom/trimble.html">систем управления</a>; --></li></ol><blockquote><p>Here, sure, not all my done works :-)</p></blockquote></div>'),a.put("app/footer/footer.html",'<div class=ru><br><p>Пиште мне на <a href=mailto:ymatuhin@yandex.ru>ymatuhin@yandex.ru</a> или в <a href=skype:ymatuhin?chat>скайп</a> (ymatuhin).<br>Мой <a href=//www.linkedin.com/in/ymatuhin>LinkedIn</a> и резюме на <a href=//hh.ru/resume/d6644a6fff02080e290039ed1f517854583433>hh.ru</a></p><br ng-show="url == \'/\'"><p class=tags>#frontend #vanillajs #angularjs #jquery #html #css #bem</p></div><div class=en><br><p>Write me on <a href=mailto:ymatuhin@yandex.ru>ymatuhin@yandex.ru</a> or <a href=skype:ymatuhin?chat>skype</a> (ymatuhin).<br>My <a href=//www.linkedin.com/in/ymatuhin>LinkedIn</a> and resume from <a href=//hh.ru/resume/d6644a6fff02080e290039ed1f517854583433>hh.ru</a></p><br ng-show="url == \'/\'"><p class=tags>#frontend #vanillajs #angularjs #jquery #html #css #bem</p></div><!-- Yandex.Metrika counter --><script>(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25884803 = new Ya.Metrika({id:25884803, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/25884803" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'),a.put("app/lang/lang.html",'<div class=lang><a href="" ng-click="changeDafaultLang(\'en\')" class=ru>in english</a> <a href="" ng-click="changeDafaultLang(\'ru\')" class=en>по-русски</a></div>'),a.put("app/main/main.html",'<div class=ru><h2>Привет, я Юрий Матюхин, фронтэнд разработчик. В свободное, и не совсем, время веду <a href="/blog/">блог</a> и пишу несколько <a href="/projects/">проектов/экспериментов</a>.</h2><br><p>Мой <a href=//github.com/ymatuhin>github</a> и последние работы из <a href="/folio/">портфолио</a>.</p></div><div class=en><h2>Hi, i\'m Yury Matuhin, frontend developer. When i have a free time, i like to write articles to my <a href="/blog/">blog</a> and develop some <a href="/projects/">projects/experiments</a>.</h2><br><p>My <a href=//github.com/ymatuhin>github</a> account and the latest work in <a href="/folio/">portfolio</a>.</p></div>'),a.put("app/navigation/navigation.html",'<div class="nav ru"><a href="/">На главную</a> – <a href="/projects/" ng-class="{\'active\': url === \'/projects/\' }">Проекты</a> – <a href="/folio/" ng-class="{\'active\': url === \'/folio/\' }">Портфолио</a> – <a href="/blog/" ng-class="{\'active\': url === \'/blog/\' }">Блог</a></div><div class="nav en"><a href="/">Home</a> – <a href="/projects/" ng-class="{\'active\': url === \'/projects/\' }">Projects</a> – <a href="/folio/" ng-class="{\'active\': url === \'/folio/\' }">Portfolio</a> – <a href="/blog/" ng-class="{\'active\': url === \'/blog\' || url.indexOf(\'/blog/\') != -1 }">Blog</a></div>'),a.put("app/projects/projects.html",'<div class="markdown ru"><h1>Проекты и эксперименты</h1><ol><li><a href=//github.com/ymatuhin/codewars>Задачки</a> – с сайта codewars.com на vanillajs и мое решение их;</li><li><a href=//github.com/ymatuhin/pixToPix>Pix To Pix</a> – javascript плагин для реализации pixel perfect верстки. Так же есть <a href=//chrome.google.com/webstore/detail/pix-to-pix-pixel-perfect/binboaimbgchaamickjnhgjdccohndin>плагин</a> для Google Chrome и Yandex Browser;</li><li><a href="//ymatuhin.github.io/fitts-law/">Fitts law</a> – демонстрация закона Фиттса (дипломная работа);</li><li><a href="//ymatuhin.github.io/graph-test/">Graph test</a> – тестовое задание на должность front-end разработчика в Polonium Arts;</li><li><a href="//ymatuhin.github.io/vanilla_slider/">Vanilla slider</a> – тестовое задание на должность front-end разработчика в пражский офис babyblog.ru;<!-- <li><a href="//ymatuhin.github.io/less-presentation">Web презентация</a> – «LESS» динамический язык стилевой разметки; --></li><li><a href=//ymatuhin.github.io/triangulation>Triangulation</a> – эксперимент с триангуляцией и canvas;</li><li><a href="//ymatuhin.github.io/checkers/">Заготовка для шашек</a> – поле для игры в шашки (был написан алгоритм для битья, но утерян после переустановки системы). Осталась только заготовка, но весьма симпатичная.<!-- <li><a href="//ymatuhin.github.io/Bem-html-2-css">Bem html to css</a> – эксперимент с генерацией css из html c БЭМ классами; --></li></ol></div><div class="markdown en"><h1>Projects and experiments</h1><ol><li><a href=//github.com/ymatuhin/codewars>Tasks</a> – from codewars.com with vanillajs and my solution;</li><li><a href=//github.com/ymatuhin/pixToPix>Pix To Pix</a> – javascript plugin to pixel perfect web development. Also have Google Chrome and Yandex Browser<a href=//chrome.google.com/webstore/detail/pix-to-pix-pixel-perfect/binboaimbgchaamickjnhgjdccohndin>extension</a>;</li><li><a href="//ymatuhin.github.io/fitts-law/">Fitts law</a> – demonstration (diplom work);</li><li><a href="//ymatuhin.github.io/graph-test/">Graph test</a> – test task from Polonium Arts;</li><li><a href="//ymatuhin.github.io/vanilla_slider/">Vanilla slider</a> – test task from babyblog.ru (Prague);</li><li><a href=//ymatuhin.github.io/triangulation>Triangulation</a> – experiment with triangulation and canvas;</li><li><a href="//ymatuhin.github.io/checkers/">Checkers</a> – field for checkers game.</li></ol></div>')}]);