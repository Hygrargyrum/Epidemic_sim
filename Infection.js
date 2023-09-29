import {Random} from "./Random.js"

export var Infection = function()
{
    this.virulent = 30;
    this.timer = 8;
    this.danger = 3;
}

Infection.prototype.mod = function(mod)
{
   switch(mod)
   { 
      case "random":
      this.virulent = Random.Interval(20,50);
      this.timer = Random.Interval(6,14);
      this.danger = Random.Interval(1,10);
      break;

      case "default": break;
   }
}

export default Infection;