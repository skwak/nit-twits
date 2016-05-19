// var words = $('#top-tweets').text().split(",");
// var nums = $('#top-nums').text().split(",");
// var data = [];
// for (var i in nums) {
//   var obj = { "name": words[i], "value": parseInt(nums[i]) }
//   data.push(obj);
// }
//
// d3.select("#tweet-graph")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return d.value * 60 + "px"; })
//     .text(function(d) { return d.name + ": " + d.value; });
//
// function type(d) {
//   d.value = +d.value; // coerce to number
//   return d;
// }

ReactDOM.render(
  <h1>twitterology</h1>,
  document.getElementById('title')
)
ReactDOM.render(
  <p>find out what's in your twitter cloud, you twitter obsessed scoundrel</p>,
  document.getElementById('opening-words')
);
