$(function () {
    init();
});

function printLog() {

}

function init() {
    $(window).scroll(function () {
        console.log($(window).scrollTop());
    });
}