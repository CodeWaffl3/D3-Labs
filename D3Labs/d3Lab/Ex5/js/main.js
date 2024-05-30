let margin = { left: 100, right: 10, top: 10, bottom: 140 };

let width = 600;
let height = 400;

let svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Create the group for the bars
let barsGroup = svg.append("g")
    .attr("class", "bars-group");
d3.json("data/buildings.json").then((data) => {
    data.forEach((d) => {
        d.height = +d.height;
    });

    let x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.1);

    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.height)])
        .range([height, 0]);

    let rects = barsGroup.selectAll("rect").data(data);

    rects.enter()
        .append("rect")
        .attr("stroke", "#69b3a2")
        .attr("width", x.bandwidth())
        .attr("height", (d) => { return height - y(d.height); })
        .attr("x", (d) => { return x(d.name); })
        .attr("y", (d) => { return y(d.height); });

    // X axis
    let xAxis = d3.axisBottom(x);

    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("transform", "rotate(-40)")
        .attr("dx", -5)
        .attr("dy", 10);

    // Add "The world's tallest buildings" label
    svg.append("text")
        .attr("class", "x-axis-label")
        .attr("x", width / 2)
        .attr("y", height + 140)
        .attr("text-anchor", "middle")
        .text("The world's tallest buildings");

    // Y axis
    let yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(d => d + "m");

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    // Add "Height (m)" label for the y-axis
    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -(height / 2))
        .attr("y", -60)
        .attr("text-anchor", "middle")
        .text("Height (m)");
});
