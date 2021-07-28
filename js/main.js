var wow = new WOW({
    mobile: false,

});
wow.init();

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});