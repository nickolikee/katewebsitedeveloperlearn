$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active'); // добовляем класс active для бургера
        $('body').toggleClass('lock'); // добовляем класс active для меню
    });
});
