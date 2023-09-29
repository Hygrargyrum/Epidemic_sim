import {Random} from "./Random.js";


export var Man = function()
{
    this.is_heath = true;
    this.is_infected = false;
    this.is_immuned = false;
    this.is_dead = false;
    this.timer = 0;
}

Man.prototype.invasion = function(virulent,timer)
{
    var dyce = Random.Dyce();
    
    if(this.is_heath == true && virulent > dyce)
    {
        this.is_heath = false;
        this.is_infected = true;
        this.timer = timer;
        console.log("инфицирован");
    }
}

Man.prototype.processing = function(danger, timer)
{
    this.timer = this.timer - 1;
    if(this.timer <= 0)
    {
        var dyce = Random.Dyce();
        if(dyce < danger)
        {
           this.infected = false;
           this.dead = true;
        }
        else
        {
            this.infected = false;
            this.immuned = true;
        }
    }
}