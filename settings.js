function map_size_f()
{
    map_size++;
    if(map_size > 4) {map_size = 1; }

    var button = document.getElementById("map_size");
     switch(map_size)
     { 
         case 1: button.innerHTML = "Маленький"; settings_1 = 8; break;
         case 2: button.innerHTML = "Обычный"; settings_1 = 16; break;
         case 3: button.innerHTML = "Большой"; settings_1 = 24; break;
         case 4: button.innerHTML = "Максимальный"; settings_1 = 32; break;
     }
}

function difficulty_f()
{
    difficulty++;
    if(difficulty > 2) {difficulty = 1; }

    var button = document.getElementById("difficulty");
    switch(difficulty)
    {
        case 1: 
        button.innerHTML = "Баланс";
        settings_2 = "default";
        break;
        case 2: 
        button.innerHTML = "Рандом";
        settings_2 = "random";
        break;
    }
    
}

function game_start()
{
    localStorage.setItem('map_size', settings_1);
    localStorage.setItem('difficulty', settings_2);
    document.location = "game.html";
}

var map_size = 1;
var settings_1 = 8;

var difficulty = 1;
var settings_2 = "default";