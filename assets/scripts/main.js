// Window width.
var windowWidth = $(window).width();

// Scroll from top.
var st = $(this).scrollTop();

// Navbar, navbar brand, navbar toggler.
var navBar = $(".navbar");
var navBarToggler = $(".material-icons.menu");

// Remove all the classes
$.fn.removeAll = function() {
    $.fn.removeDark();
    $.fn.removeLight();
}

// Remove all dark classes.
$.fn.removeDark = function () {
    navBar.removeClass("navbar-light");
    navBarToggler.removeClass("text-dark");
}

// Remove all light classes.
$.fn.removeLight = function () {
    navBar.removeClass("navbar-dark");
    navBarToggler.removeClass("text-light");
}

// Add all light classes.
$.fn.addDark = function () {
    navBar.addClass("navbar-light");
    navBarToggler.addClass("text-dark");
}

// Add all dark classes.
$.fn.addLight = function () {
    navBar.addClass("navbar-dark");
    navBarToggler.addClass("text-light");
}

// Change the navbar onload depeanding on screen size.
// Change the navbar onload depanding on distance from top.
$(document).ready(function () {
    // Change if the screen loads in mobile.
    if (windowWidth <= 991) {
        $.fn.removeAll();
        navBar.removeClass("scrolled");
        $.fn.addLight();
    // Change if the screen loads in desktop.
    // Change if the screen loads scrolled up.
    } else if (windowWidth > 991 && st < 50) {
        $.fn.removeAll();
        navBar.removeClass("scrolled");
        $.fn.addDark();
    // Change if the screen loads in desktop.
    // Change if the screen loads scrolled down.
    } else if (windowWidth > 991 && st > 50) {
        $.fn.removeAll();
        $.fn.addLight();
        navBar.addClass("scrolled");
    }
});

// Change things when resizing the window.
$(window).resize(function () {
    windowWidth = $(window).width()
    var st = $(this).scrollTop();
    // Change if the screen is changed to mobile.
    if (windowWidth <= 991) {
        $.fn.removeAll();
        navBar.removeClass("scrolled");
        $.fn.addLight();
    // Change if the screen is changed to desktop.
    // Change if scrolled to top of page.
    } else if (windowWidth > 991 && st < 50) {
        $.fn.removeAll();
        navBar.removeClass("scrolled");
        $.fn.addDark();
    // Change if the screen is changed to desktop.
    // Change if the navbar has the scrolled class, if it's scrolled down.
    } else if (windowWidth > 991 && navBar.hasClass("scrolled")) {
        $.fn.removeAll();
        $.fn.addLight();
    } else {
        navBar.addClass("scrolled");
    }
});

// Detect scroll down, and change the navbar if scrolled down, desktop only.
$(window).scroll(function () {
    var st = $(this).scrollTop();
    // Change navbar on scroll down, if it doesn't have the scrolled class.
    if (st > 50 && windowWidth > 991 && !navBar.hasClass("scrolled")) {
        $.fn.removeAll();
        navBar.addClass("scrolled");
        $.fn.addLight();
    // Change back once scrolled back to the top.
    } else if (st < 50 && windowWidth > 991 && navBar.hasClass("scrolled")) {
        $.fn.removeAll();
        navBar.removeClass("scrolled");
        $.fn.addDark();
    // Do nothing.
    } else {
    }
});