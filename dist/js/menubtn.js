$(function () {
  $('.navbar-element').click(function (e) {
    e.preventDefault;
    $('.navbar-element').toggleClass('navbar-element__active');
    $('.navbar-menu__burger').toggleClass('navbar-menu__active');
  });
});