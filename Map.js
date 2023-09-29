import {Cell} from "./Cell.js";
import {Random} from "./Random.js";

export var Map = function(size)
{
    this.size = size;
    this.area = Math.pow(size, 2);
    this.cells = [];
    
    this.heath = 0;
    this.infected = 0;
    this.immuned = 0;
    this.dead = 0;
    
    this.generation();
    this.revision();
}

Map.prototype.generation = function()
{
    var x = 0;
    var y = 0;
    var num = 1;
    
    for(let i = 0; i < this.area; i++)
    {
        this.cells[i] = new Cell(x, y);
        console.log(`Cell #${num} is created.`);
        num++;
        x++;
        if(x > this.size - 1) { x = 0; y++; }
    }
}

Map.prototype.invasion = function()
{
    var can_invasion = this.cells.filter((Cell) => Cell.is_empty == false);
    var dyce = Random.Interval(0, can_invasion.length);
    var s_cell = can_invasion[dyce];
    for (let man of s_cell.population) {
        man.invasion();
    }
}

Map.prototype.revision = function()
{
    this.heath = 0;
    this.infected = 0;
    this.immuned = 0;
    this.dead = 0;

    var i = 0;
    
    for(let cell of this.cells)
    {
       cell.revision();
       this.infected += cell.infected;
       this.heath += cell.heath;
       this.immuned += cell.immuned;
       this.dead += cell.dead;
    }  
}

Map.prototype.processing = function(virulent, timer, danger)
{
    for(let cell of this.cells) 
    {
        if(cell.is_empty == false)
        {
            cell.revision();
            cell.processing(virulent, timer, danger);
            cell.rendering();
        }
    }

    var infected_cells = this.cells.filter((Cell) => Cell.infected.length > 0);
    for (let cell of infected_cells) {

        var cor_x_min = cell.x - 3;
        var cor_x_max = cell.x + 3;
        var cor_y_min = cell.y - 3;
        var cor_y_max = cell.y + 3;

        var target = this.cells.filter((Cell) =>      Cell.x >= cor_x_min && 
        Cell.x <= cor_x_max &&
        Cell.y >= cor_y_min &&
        Cell.y <= cor_y_max);

        var rnd = Random.Interval(0, target.length);
        target[rnd].invasion(virulent, timer);
    }
}

Map.prototype.rendering = function(container)
{
    var mpc = container;
    mpc.style.width = this.size * 8 + "px";
    mpc.style.height = this.size * 8 + "px";
    for (let cell of this.cells) 
    {
        var element = document.createElement("div");
        element.className = "cell";
        element.style.left = cell.x * 8 + "px";
        element.style.top = cell.y * 8 + "px";
        element.style.backgroundColor = cell.color;
        mpc.appendChild(element);
    }
}

export default Map;