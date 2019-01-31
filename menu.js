const currentHtmlFileName = window.location.pathname.split("/").pop();
const menuIems = {
    "Главная": "index.html",
    "13 в сумме": "13-in-total.html",
    "Остаток масти": "restofsuit.html",
    "Cоздатель": "creator.html",
}

var strMenuItems = "";
for(var i in menuIems){
    if(menuIems[i] === currentHtmlFileName){
        strMenuItems += "       <li><p>" + i + "</p></li>\n";
        continue;
    }   // else
    strMenuItems += "       <li><a href=\"" + menuIems[i] + "\">" + i + "</a></li>\n";
}

$("head")
    .append('<link rel="stylesheet" href="menu.css">')
    .append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');

// awesome - библиотека для иконок
$("head").append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">')

$(document).ready(function() {
    $("body").prepend('<i class="fas fa-bars"></i>\n<nav>\n<lu>\n' + strMenuItems + '</lu>\n</nav>');

    $(".fa-bars, nav").mouseleave(function(event) {
        $("nav")
            .stop()
            .slideToggle(500);
    });
    $(".fa-bars").click(function() {
        $("nav")
            .stop()
            .slideToggle(500);
    });
});
