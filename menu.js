const currentHtmlFileName = window.location.pathname.split("/").pop();
const menuIems = {
  Главная: "index.html",
  "13 в сумме": "13-in-total.html",
  "Остаток масти": "restofsuit.html",
  Cоздатель: "creator.html",
};

var strMenuItems = "";
for (var i in menuIems) {
  if (menuIems[i] === currentHtmlFileName) {
    strMenuItems += "       <li><p>" + i + "</p></li>\n";
    continue;
  } // else
  strMenuItems +=
    '       <li><a href="' + menuIems[i] + '">' + i + "</a></li>\n";
}

$("head")
  .append('<link rel="stylesheet" href="menu.css">')
  .append(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
  );

$(document).ready(function () {
  $("body").prepend(
    '\
    <div class="menuIcon">\
        <span class="menuIconLine"></span>\
        <span class="menuIconLine"></span>\
        <span class="menuIconLine"></span>\
    </div>\
    <nav>\
        <lu>' +
      strMenuItems +
      "</lu>\
    </nav>"
  );

  $(".menuIcon, nav").hover(
    function () {
      $("nav").stop().slideToggle(500);
    },
    function () {
      $("nav").stop().slideToggle(500);
    }
  );
});
