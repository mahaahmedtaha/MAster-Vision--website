$(function () {
    'use strict';
    $("body").niceScroll();
     //start navbar code
    var scrollTop = 0;
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= 50) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
     //end navbar code
     //start form code
    $(".form").submit(function (e) {
        if ($(".name").val().length < 1) {
            $(".help-name").addClass('n');
        } else {
            $(".help-name").removeClass('n');
        }
        if ($(".email").val().length < 1) {
            $(".help-email").addClass('n');
        } else {
            $(".help-email").removeClass('n');
        }
        if ($(".num").val().length < 1) {
            $(".help-num").addClass('n');
        } else {
            $(".help-num").removeClass('n');
        }
        if ($(".area").val().length < 1) {
            $(".help-area").addClass('n');
        } else {
            $(".help-area").removeClass('n');
        }
        e.preventDefault();
    });
     //end form code
