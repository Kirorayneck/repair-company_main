var addmap = false;

$(window).scroll(function () {
  var el  = $('.map')
  if ($(this).scrollTop() > el.offset().top - 800) {
    if (addmap) return;
    addmap = true;
    var script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A089ea4adfc2348ee49d903326951f1efe4da9f01ffe044114d73e63c9f8f360c&amp;width=100%25&amp;height=666&amp;lang=ru_RU&amp;scroll=false";
    el.append(script);
  };
});