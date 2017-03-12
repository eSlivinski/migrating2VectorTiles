code= {};

_d3.selectAll('[data-codeid]')
  .each(function() {
    var slide =_d3.select(this);
    var codeId = slide.attr('data-codeid');
    _d3.request('examples/'+codeId+'/main.js')
        .get(function(d) {
          slide.select('code').html(d.response);
          code[codeId] = d.response;
        });
})

Reveal.addEventListener( 'slidechanged', function(e) {
  window.run = function() { };
  var codeId = _d3.select(e.currentSlide).attr('data-codeid');
  if (code[codeId]) {
    window.run = new Function("console.log('"+codeId+"');" + code[codeId]);
  } else {
    window.run = function() { };
  }
  window.run();
});
