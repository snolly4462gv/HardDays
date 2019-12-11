var CurrentLang = 'ru';
const Translate = [
    {
        id: ".i18n_whoweare",
        type: "text",
        ru: "Кто мы",
        en: "Who we are"
    },
    {
        id: ".i18n_contactus",
        type: "text",
        ru: "Cвязаться с нами",
        en: "Contact us"
    },
    {
        id: ".i18n_topmore",
        type: "text",
        ru: "Больше",
        en: "More"
    }
];

API_KEY = 'AIzaSyCkj_LlaXPD1De099NiKUuF1n3O1Jn7tMI';


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


function changeLang() {
    for (let item of Translate) {
        if(item.id) {     
            if(item.type === 'text')   
                $(item.id).text(item[CurrentLang]);
        }
    }
}