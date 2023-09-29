export function Random()
{}

Random.Dyce = function()
{
    var seed = Math.random();
    var dyce = Math.round(seed * 100);
    return dyce;
}

Random.Interval = function(min, max)
{
    var seed = Math.random();
    var interval = seed * (max - min) + min;
    interval = Math.round(interval);
    return interval;
}