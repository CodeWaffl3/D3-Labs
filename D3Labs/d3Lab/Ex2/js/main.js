let data = [25, 20, 15, 10, 5];

let svg = d3.select("#chart-area").append("svg").attr("width",400).attr("height", 400);

let rects = svg.selectAll("rect").data(data);


rects.enter()
    .append("rect")
        .attr("stroke", "#69b3a2")
        .attr("width", 40)
        .attr("height", (data) => {return data*10})
        .attr("x", (data, idx) => {return (idx * 45) + 20})
        .attr("y", (data) => {return (400 - data * 10)})
