var t = d3.transition()
  .duration(750)
  .ease(d3.easeLinear);

d3.select('circle')
  .transition(t)
  .attr('cx', 100)
  .attr('cy', 100)
  .transition(t)
  .attr('r', 100)
  .transition()
  .attr('r', 0);
