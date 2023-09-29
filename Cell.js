import {Man} from "./Man.js"
import {Random} from "./Random.js"

export var Cell = function(x, y)
{
    this.population = [];
    this.color = 'rgb(220,220,220)';
    this.is_empty = false;
    this.x = x;
    this.y = y;

    this.infected = [];
    this.heath = [];
    this.immuned = [];
    this.dead = [];

    this.generation();
    this.revision();
}

Cell.prototype.generation = function()
{
    var dyce = Random.Dyce();
    var population;
    switch(true)
    { 
        case dyce <= 25: population = 0; this.is_empty = true; break;
        case dyce > 25 && dyce <= 65: population = Random.Interval(2,12); break;
        case dyce > 65 && dyce <= 90: population = Random.Interval(12,24); break;
        case dyce > 90: population = Random.Interval(24,48); break;
        
    }

    for(let i = 0; i < population; i++)
    {
        this.population[i] = new Man();
    }
}

Cell.prototype.invasion = function(virulent, timer)
{
    var rnd = Random.Interval(0, this.population.length);
    this.population[rnd].invasion(virulent, timer);  
}

Cell.prototype.processing = function(virulent, timer, danger) 
{
    for(let man of this.population)
    {
        man.processing(danger, timer);
    }
    
    for(let i = 0; i < this.infected.length; i++)
    {
        var rnd = Random.Interval(0, this.population.length);
       this.population[rnd].invasion(virulent, timer);
        
    }
}

Cell.prototype.rendering = function()
{
   var red = 220 + Math.sqrt(this.infected.length) * 4 - Math.sqrt(this.dead.length) * 5;
    var green = 220 +  Math.sqrt(this.heath.length) * 4 - Math.sqtr(this.dead.length) * 5;
    var blue = 220 + Math.sqrt(this.immuned.length * 4 - Math.sqrt(this.dead.length) * 5;
    this.color = `rgb(${red}, ${green}, ${blue})`;
}

Cell.prototype.revision = function()
{
    this.infected = this.population.filter((Man) => Man.is_infected == true);
    this.heath = this.population.filter((Man) => Man.is_heath == true);
    this.immuned = this.population.filter((Man) => Man.is_immuned == true);
    this.dead = this.population.filter((Man) => Man.is_dead == true);
    
}