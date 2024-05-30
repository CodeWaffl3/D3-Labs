let svg = d3.select("#chart-area").append("svg").attr("width",500).attr("height", 500);

d3.json("data/buildings.json").then((data)=> {

    data.forEach((d)=>{
        d.height = +d.height;
    });

    let x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, 500])
        .padding(0.1);

    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.height)])
        .range([500, 0]);

    let rects = svg.selectAll("rect").data(data);

    rects.enter()
        .append("rect")
        .attr("fill", "#69b3a2")
        .attr("width", x.bandwidth())
        .attr("height", (d) => { return 500 - y(d.height) })
        .attr("x", (d) => { return x(d.name) })
        .attr("y", (d) => { return y(d.height) });
});





