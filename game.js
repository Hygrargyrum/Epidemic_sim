import {Map} from "./Object_Architecture/Map.js";
import {Infection} from "./Object_Architecture/Infection.js";
import {Random} from "./Object_Architecture/Random.js";

var my_map;
var my_infection;
var turn = 1;
var container = document.getElementById("map_container");

function update()
{
    var day = document.getElementById("day");
    day.innerHTML = `${turn} День`;
}

function game_run()
{
    my_map.processing(my_infection.virulent, my_infection.timer, my_infection.danger);
    my_map.revision();
    my_map.rendering(container);
    turn++;
    update();
}

function game_start()
{ 
  var map_size = localStorage.getItem("map_size");
  var difficulty = localStorage.getItem("difficulty");
  my_infection = new Infection();
  my_infection.mod(difficulty);
  my_map = new Map(map_size);
  my_map.invasion(my_infection.virulent, my_infection.timer);
  setInterval(function (){
      game_run();
  }, 2000)
}

game_start();