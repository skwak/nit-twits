(function() {
  var $twits = $('#all-tweets').html();
  console.log($twits);
})();
// $.get('/twitter?handle').done(
//   function everything() {
//     var $twits = $('#all-tweets');
//     console.log($twits);
//   }
// );
// function draw(data, bounds) {
//   statusText.style("display", "none");
//   scale = bounds ? Math.min(
//       w / Math.abs(bounds[1].x - w / 2),
//       w / Math.abs(bounds[0].x - w / 2),
//       h / Math.abs(bounds[1].y - h / 2),
//       h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;
//   words = data;
//   var text = visualisation.selectAll("text")
//       .data(words, function(d) { return d.text.toLowerCase(); });
//   text.transition()
//       .duration(1000)
//       .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
//       .style("font-size", function(d) { return d.size + "px"; });
//   text.enter().append("text")
//       .attr("text-anchor", "middle")
//       .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
//       .style("font-size", function(d) { return d.size + "px"; })
//       .on("click", function(d) {
//         load(d.text);
//       })
//       .style("opacity", 1e-6)
//     .transition()
//       .duration(1000)
//       .style("opacity", 1);
//   text.style("font-family", function(d) { return d.font; })
//       .style("fill", customFill)
//       .text(function(d) { return d.text; });
//   var exitGroup = background.append("g")
//       .attr("transform", visualisation.attr("transform"));
//   var exitGroupNode = exitGroup.node();
//   text.exit().each(function() {
//     exitGroupNode.appendChild(this);
//   });
//   exitGroup.transition()
//       .duration(1000)
//       .style("opacity", 1e-6)
//       .remove();
//   visualisation.transition()
//       .delay(1000)
//       .duration(750)
//       .attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
// }
