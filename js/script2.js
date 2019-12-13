var CurrentLang = 'ru';
const Translate = [
    {
        id: "i18n_whoweare",
        type: "text",
        ru: "Кто мы",
        en: "Who we are"
    },
    {
        id: "i18n_whatwedo",
        type: "text",
        ru: "Что мы делаем",
        en: "What we do"
    },
    {
        id: "i18n_forwhomwedo",
        type: "text",
        ru: "Для кого делаем",
        en: "(!) Для кого делаем"
    },
    {
        id: "i18n_howdowework",
        type: "text",
        ru: "Как мы работаем",
        en: "How do we work"
    },
    {
        id: "i18n_workprice",
        type: "text",
        ru: "Сколько стоит",
        en: "Price"
    },
    {
        id: "i18n_price",
        type: "text",
        ru: "Цена",
        en: "Price"
    },
    {
        id: "i18n_portfolio",
        type: "text",
        ru: "Портфолио",
        en: "Portfolio"
    },
    {
        id: "i18n_contactus",
        type: "text",
        ru: "Cвязаться с нами",
        en: "Contact us"
    },
    {
        id: "i18n_topmore",
        type: "text",
        ru: "Больше",
        en: "More"
    },
    {
        id: "i18n_leavehardwork",
        type: "text",
        ru: "Оставьте ваши тяжелые будни нам",
        en: "Leave your hard work to us"
    },
    {
        id: "i18n_aboutharddays",
        type: "text",
        ru: "Hard Days – это компания стремительно развивающаяся на рынке создания программного обеспечения под ключ. Компания включает в себя большое количество квалифицированных специалистов с опытом работы в IT индустрии от 8 лет, развивает и обучает молодых специалистов. Компания имеет свои представительства и офисы в Америке, Европе и Азии.",
        en: "Hard Days is a rapidly growing company in the software development market. The company provides a large number of highly-qualified IT-specialists empowered by 8-year-experience, who develop and train young employees. The company has its offices in the USA, Europe and Asia."
    },
    {
        id: "i18n_yearsofexperience",
        type: "text",
        ru: "Лет опыта",
        en: "Years of experience"
    },
    {
        id: "i18n_completedprojects",
        type: "text",
        ru: "Завершенных\<br>\проектов",
        en: "Completed\<br>\projects"
    },
    {
        id: "i18n_developers",
        type: "text",
        ru: "Разработчика",
        en: "Developers"
    },
    {
        id: "i18n_landingpage",
        type: "text",
        ru: "Landing page",
        en: "Landing page"
    },
    {
        id: "i18n_corporatewebsite",
        type: "text",
        ru: "Корпоративный сайт",
        en: "Corporate website"
    },
    {
        id: "i18n_sitedirectory",
        type: "text",
        ru: "Сайт-каталог",
        en: "Site Directory"
    },
    {
        id: "i18n_onlinestore",
        type: "text",
        ru: "Интернет-магазин",
        en: "Online store"
    },
    {
        id: "i18n_mobileapp",
        type: "text",
        ru: "Мобильное приложение",
        en: "Mobile app"
    },
    {
        id: "i18n_developmentstartup",
        type: "text",
        ru: "Разработка для стартапа",
        en: "Development for a startup"
    },
    {
        id: "i18n_forwhomtext",
        type: "text",
        ru: "Мы работаем как с молодыми <strong>стартапами</strong>, помогая им выбрать и реализовать запоминающийся стиль, так и с <strong>компаниями</strong>, которые хотят повысить свои продажи",
        en: "(!) Мы работаем как с молодыми <strong>стартапами</strong>, помогая им выбрать и реализовать запоминающийся стиль, так и с <strong>компаниями</strong>, которые хотят повысить свои продажи"
    },
    {
        id: "i18n_companies",
        type: "text",
        ru: "Компании",
        en: "Сompanies"
    },
    {
        id: "i18n_startups",
        type: "text",
        ru: "Стартапы",
        en: "Startups"
    },
    {
        id: "i18n_training",
        type: "text",
        ru: "Подготовка",
        en: "Training"
    },
    {
        id: "i18n_collectingrequirements",
        type: "text",
        ru: "Сбор требований",
        en: "Collecting requirements"
    },
    {
        id: "i18n_formationteam",
        type: "text",
        ru: "Формирование команды проекта",
        en: "Formation of team for the project"
    },
    {
        id: "i18n_costandcontract",
        type: "text",
        ru: "Смета и договор",
        en: "Cost estimation and contract preparation"
    },
    {
        id: "i18n_production",
        type: "text",
        ru: "Производство",
        en: "Production"
    },
    {
        id: "i18n_technicalassignment",
        type: "text",
        ru: "Техническое задание",
        en: "Technical assignment"
    },
    {
        id: "i18n_designanalysis",
        type: "text",
        ru: "Проектирование и анализ",
        en: "Design and analysis"
    },
    {
        id: "i18n_informationarchitecture",
        type: "text",
        ru: "Информационная архитектура",
        en: "Information architecture"
    },
    {
        id: "i18n_interfacedesign",
        type: "text",
        ru: "Макеты интерфейса и дизайнмакеты (опционально)",
        en: "Interface layouts and design models (optional)"
    },
    {
        id: "i18n_productprogramming",
        type: "text",
        ru: "Реализация продукта",
        en: "Product programming"
    },
    {
        id: "i18n_producttesting",
        type: "text",
        ru: "Тестирование продукта",
        en: "Product testing"
    },

    {
        id: "i18n_delivery",
        type: "text",
        ru: "Сдача проекта",
        en: "Delivery"
    },
    {
        id: "i18n_creatingteststand",
        type: "text",
        ru: "Создание тестовой среды для клиента",
        en: "Creating a test stand for the client"
    },
    {
        id: "i18n_acceptanceproject",
        type: "text",
        ru: "Приём проекта",
        en: "Acceptance of the project"
    },
    {
        id: "i18n_projectlaunch",
        type: "text",
        ru: "Запуск",
        en: "Project launch"
    },
    {
        id: "i18n_pricetext1",
        type: "text",
        ru: "<strong>Ответить однозначно до общения с вами мы не можем. Но, все же, по цене сориентируем.</strong>",
        en: "<strong> We cannot tell you the exact price until we discuss all the details with you. However, we can give you some idea and tell you appoximate price.</strong>"
       
    },
    {
        id: "i18n_pricetext2",
        type: "text",
        ru: "Сайты и приложения — это очень индивидуально. Да и «минимальный набор функций» - специфичен от задачи, которую решает тот или иной сервис или приложение. Где-то нужно просто показать, где ближайшее кафе, а где-то - подсказать какое меню стоит выбрать с учетом вашего типичного рациона питания. Стоит ли говорить, что цены будут разные?",
        en: "Websites and applications are very individual. Yes, and the “minimum set of functions” is specific to the task that a particular service or application solves. In some cases, you just need to show where the nearest cafe is, and in others, you need to tell which menu to choose based on your typical diet. Does it neccesary to mention that prices will be different?"
    },
    {
        id: "i18n_acceptableprice",
        type: "text",
        ru: "Обычная цена, обычный проект",
        en: "Acceptable price"
    },
    {
        id: "i18n_pricedefficult",
        type: "text",
        ru: "Цена, когда проект усложняется",
        en: "Price, when product becomes defficult"
    },
    {
        id: "i18n_whatnext",
        type: "text",
        ru: "А что<br> потом?",
        en: "What<br> next?"
    },
    {
        id: "i18n_support",
        type: "text",
        ru: "<strong>Поддержка</strong>",
        en: "<strong>Support</strong>"
    },
    {
        id: "i18n_supporttext",
        type: "text",
        ru: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consec sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolo",
        en: "(!) Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consec sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolo"
    },
    {
        id: "i18n_name",
        type: "text",
        ru: "Имя",
        en: "Name"
    },
    {
        id: "i18n_message",
        type: "text",
        ru: "Сообщение",
        en: "Message"
    },
    {
        id: "i18n_send",
        type: "text",
        ru: "Отправить",
        en: "Send"
    },
    {
        id: "i18n_address",
        type: "text",
        ru: "<strong>Адрес</strong>",
        en: "<strong>Address</strong>"
    },
    {
        id: "i18n_currency",
        type: "text",
        ru: "₽",
        en: "$"
    },

    // TO DO PORTFOLIO
    {
        id: "i18n_development",
        type: "text",
        ru: "Разработка:",
        en: "Development:"
    },
    {
        id: "i18n_desc_betrip",
        type: "text",
        ru: "Это мобильное приложение для туристов, которое позволяет строить самые красивые маршруты, используя данные социальных сетей для поиска необычных мест и персонализации",
        en: "BeTrip is a mobile application for tourists, which allows you to build the most beautiful routes using a modern Al tech to analyze social media data by geotags and to keep the places data always updated."
    },
    {
        id: "i18n_estimation_betrip",
        type: "text",
        ru: "<span>Оценка:</span> ≈ 4 630 000 ₽",
        en: "<span>Estimation: ≈ $89 000"
    },
    {
        id: "i18n_time_betrip",
        type: "text",
        ru: "<span>Время:</span> 4 месяца",
        en: "<span>Time:</span> 4 month"
    },
    {
        id: "i18n_desc_triphub",
        type: "text",
        ru: "Инструмент для создания маршрутов. Позволяет добавлять точки на карту, анализировать продажи, аудиторию, популярность созданных мест и маршрутов.",
        en: "The tool for creating routes. Allows you to add points to the map, analyze sales, audience, popularity of created places and routes."
    },
    {
        id: "i18n_estimation_triphub",
        type: "text",
        ru: "<span>Оценка:</span> ≈ 1 320 000 ₽",
        en: "<span>Estimation: ≈ $13 700"
    },
    {
        id: "i18n_time_triphub",
        type: "text",
        ru: "<span>Время:</span> 2 месяца",
        en: "<span>Time:</span> 2 month"
    },
    {
        id: "i18n_desc_mouse",
        type: "text",
        ru: "Краудфандинговая платформа, позволяющая быстро и модульно создавать музыкальные мероприятия.",
        en: "Crowdfunding platform that allows you to create music events quickly and modularly"
    },
    {
        id: "i18n_estimation_mouse",
        type: "text",
        ru: "<span>Оценка:</span> ≈ 5 270 000 ₽",
        en: "<span>Estimation: ≈ $102 000"
    },
    {
        id: "i18n_time_mouse",
        type: "text",
        ru: "<span>Время:</span> 6 месяца",
        en: "<span>Time:</span> 6 month"
    },
    {
        id: "i18n_desc_foodapp",
        type: "text",
        ru: "Мобильное приложение, которое автоматизирует процесс посещения ресторана (от выбора ресторана до контроля денег и питания), позворяет делить счет со своими друзьями и оплачивать заказ через приложение.",
        en: "A mobile application that automates the process of visiting a restaurant (from choosing a restaurant to controlling money and nutrition). The app allows to share the bill with your friends and pay for an order through the application."
    },
    {
        id: "i18n_estimation_foodapp",
        type: "text",
        ru: "<span>Оценка:</span> ≈ 1 285 000 ₽",
        en: "<span>Estimation: ≈ $24 000"
    },
    {
        id: "i18n_time_foodapp",
        type: "text",
        ru: "<span>Время:</span> 3 месяца",
        en: "<span>Time:</span> 3 month"
    },
    {
        id: "i18n_desc_d4w",
        type: "text",
        ru: "Сервис позволяющий найти ближайший комфортный для вас коворкинг",
        en: "Service which allows you to find the nearest comfortable coworking"
    },
    {
        id: "i18n_estimation_d4w",
        type: "text",
        ru: "<span>Оценка:</span> ≈ 1 923 000 ₽",
        en: "<span>Estimation: ≈ $30 000"
    },
    {
        id: "i18n_time_d4w",
        type: "text",
        ru: "<span>Время:</span> 3 месяца",
        en: "<span>Time:</span> 3 month"
    },
    {
        id: "i18n_desc_d4w_frontend_coworking",
        type: "text",
        ru: "Frontend: React - для коворкинга",
        en: "Frontend: React - for coworkings"
    },
    {
        id: "i18n_desc_d4w_frontend_user",
        type: "text",
        ru: "Frontend: TypeScript (Angular2+) - для пользователей",
        en: "Frontend: TypeScript (Angular2+) - for users"
    },
    {
        id: "i18n_desc_venturebox",
        type: "text",
        ru: "Платформа для трекинга процесса развития стартапа со стороны инвестора",
        en: "Platform for tracking the startup development process from the investor side."
    },
    {
        id: "i18n_estimation_venturebox",
        type: "text",
        ru: "<span>Оценка:</span> ≈ 1 575 000 ₽",
        en: "<span>Estimation: ≈ $35 000"
    },
    {
        id: "i18n_time_venturebox",
        type: "text",
        ru: "<span>Время:</span> 3 месяца",
        en: "<span>Time:</span> 3 month"
    }
];


$(document).ready(function() {
    
    changeLang();
    
    $(".header__menu a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 80
            }, 
            700
        );
    });

    $(".navigate-to-contact").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $('#contacts').offset().top - 80
            }, 
            700
        );
    });

    $(".top__more").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $('#who').offset().top - 80
            }, 
            700
        );
    });


    $(".header__lang-top").on('click', function(e) {
        if($(".header__lang-block--top").hasClass('open')) {
            $(".header__lang-block--top").removeClass('open')
        } else {
            $(".header__lang-block--top").addClass('open')
        }
    });
    $(".header__lang-bottom").on('click', function(e) {
        if($(".header__lang-block--bottom").hasClass('open')) {
            $(".header__lang-block--bottom").removeClass('open')
        } else {
            $(".header__lang-block--bottom").addClass('open')
        }
    });

    $(".change-lang-ru").on('click', function(e) {
         CurrentLang = 'ru';
         $(".header__lang-cur").text('RU');
         changeLang();
    });

    $(".change-lang-en").on('click', function(e) {
        CurrentLang = 'en';
        $(".header__lang-cur").text('EN');
        changeLang();
   });

    

});

labelsText = [];
chart = null;
function changeLang() {
    for (let item of Translate) {
        if(item.id) {     
            if(item.type === 'text')   
                $('.'+item.id).html(item[CurrentLang]);
        }
    }
    
    var labelsIds = ['i18n_landingpage','i18n_corporatewebsite','i18n_sitedirectory','i18n_onlinestore','i18n_mobileapp','i18n_developmentstartup'];
     
     for(let i = 0; i<labelsIds.length;i++) {
         labelsText[i] = (Translate.find(x => x.id == labelsIds[i])[CurrentLang]);
     }

    if(chart)
        upateGraph();
}

function initGraph() {
     
    labelsText = ['Landing page', 'Корпоративный сайт', 'Сайт-каталог', 'Интернет- магазин', 'Мобильное приложение', 'Разработка для стартапа']
     var ctx = document.getElementById('myChart').getContext('2d');
     chart = new Chart(ctx, {
         type: 'bar',
         data: {
             labels: labelsText,
             datasets: [
                 {
                     backgroundColor: 'rgba(0,0,0,0)',
                     borderColor: 'rgba(0,0,0,0)',
                     data: [0, 4, 6, 12, 8, 12]
                 },
                 {
                     backgroundColor: '#B2D73C',
                     borderColor: 'rgb(255, 99, 132)',
                     data: [2.35, 4.5, 4.5, 1, 5]
                 },
                 {
                     backgroundColor: '#DB3C71',
                     borderColor: 'rgb(255, 99, 132)',
                     data: [1.8, 2, 2.5, 1, 5, 6]
                 }
             ]
         },
         options: {
             legend: {
                 display: false
             },
             scales: {
                 yAxes: [{
                     stacked: true,
                     scaleLabel: { display: false},
                     ticks: {
                         beginAtZero: false,
                         fontColor: '#fff',
                         stepSize: 1,
                         callback: function(value, index, values) {
                            var v = 0;
                            if(CurrentLang == 'ru') {
                                if(value >= 1) v = '50';
                                if(value >= 2) v = '100';
                                if(value >= 3) v = '150';
                                if(value >= 4) v = '200';
                                if(value >= 5) v = '300';
                                if(value >= 6) v = '400';
                                if(value >= 7) v = '500';
                                if(value >= 8) v = '600';
                                if(value >= 9) v = '700';
                                if(value >= 10) v = '800';
                                if(value >= 11) v = '900';
                                if(value >= 12) v = '1000';
                                if(value >= 13) v = '1500';
                                if(value >= 14) v = '2000';
                                if(value >= 15) v = '2500';
                                if(value >= 16) v = '3000';
                                v += 'K';
                            }
                            if(CurrentLang == 'en') {
                                if(value >= 1) v = '1000';
                                if(value >= 2) v = '2000';
                                if(value >= 3) v = '3000';
                                if(value >= 4) v = '4500';
                                if(value >= 5) v = '6000';
                                if(value >= 6) v = '7500';
                                if(value >= 7) v = '9000';
                                if(value >= 8) v = '11000';
                                if(value >= 9) v = '13000';
                                if(value >= 10) v = '15000';
                                if(value >= 11) v = '17000';
                                if(value >= 12) v = '20000';
                                if(value >= 13) v = '25000';
                                if(value >= 14) v = '35000';
                                if(value >= 15) v = '45000';
                                if(value >= 16) v = '55000';
                            }

                            return v + Translate.find(x=>x.id == 'i18n_currency')[CurrentLang];
                         }
                     }
                 }],
                 xAxes: [{
                     stacked: true,
                     ticks: {
                         fontColor: '#fff',
                         fontSize: 10
                     }
                 }]
             },
             tooltips: {
                 enabled: false
             }
         }
     });
}

function upateGraph() {
    chart.update();
}