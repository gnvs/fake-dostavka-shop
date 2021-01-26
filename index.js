
// Подключаю ExpressJS
var express = require("express");
 
// Создаем объект
var app = express();

// Указываю папку Public
app.use(express.static("public"));
 
// Указание, что использую библиотеку EJS для создания HTML страниц
app.set("view engine", "ejs");

// Указание, где лежат страницы
app.set("views", "views");

// Порт
app.listen(4000);

// Путь для ссылок страниц
app.get("/", function(request, response)  {
    
    response.render("homePage");
});
 
app.get("/test", function(request, response)  {
    
    response.render("testPage");
});