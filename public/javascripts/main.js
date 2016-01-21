var words = $('#top-tweets').text().split(",");
var nums = $('#top-nums').text().split(",");
var data = [];
for (var i in nums) {
  data.push(parseInt(nums[i]));
}

d3.select("#tweet-graph")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return d * 60 + "px"; })
    .text(function(d) { return d; });

// var width = 420,
//     barHeight = 20;
//
// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, width]);
//
// var chart = d3.select("#tweet-graph")
//     .attr("width", width)
//     .attr("height", barHeight * data.length);
//
// var bar = chart.selectAll("g")
//     .data(data)
//     .enter().append("g")
//     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
//
// bar.append("rect")
//     .attr("width", x)
//     .attr("height", barHeight - 1);
//
// bar.append("text")
//     .attr("x", function(d) { return x(d) - 3; })
//     .attr("y", barHeight / 2)
//     .attr("dy", ".35em")
//     .text(function(d) { return d; });
