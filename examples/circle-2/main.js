var t = d3.transition()
  .duration(750)
  .ease(d3.easeLinear);

var svg = {
  w: d3.select('svg').attr('width'),
  h: d3.select('svg').attr('height')
};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeColor() {
  var radius = randomNumber(0, d3.min([svg.w, svg.h])/2);

 return d3.select('circle')
  .transition(t)
  .attr('r', radius)
  .attr('cx', randomNumber(radius, svg.w - radius))
  .attr('cy', randomNumber(radius, svg.h - radius))
  .attr('fill', function () {
   var r = randomNumber(1, 255),
       g = randomNumber(1, 255),
       b = randomNumber(1, 255);
   return d3.rgb(r,g,b);
  });
}

setInterval(changeColor, 1000);
