$(window).scroll(function() {
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 100);
    $('.navbar-brand').toggleClass('scrolled', $(this).scrollTop() > 100);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 100);
});

var navlink = document.querySelectorAll(".nav-link");
$(this).on("scroll", function() {
    var heightNow = $(this).scrollTop();
    if (heightNow >= 601 && heightNow < 1272) {
        $(".nav-link").removeClass("active");
        $("[href$='#skill']").addClass("active");
    } else if (heightNow >= 1272 && heightNow < 1779) {
        $(".nav-link").removeClass("active");
        $("[href$='#project']").addClass("active");
    } else if (heightNow >= 1779) {
        $(".nav-link").removeClass("active");
        $("[href$='#contact']").addClass("active");
    } else {
        $(".nav-link").removeClass("active");
        $("[href$='#header']").addClass("active");
    }
});