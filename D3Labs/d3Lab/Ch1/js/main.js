let svg = d3.select("#chart-area").append("svg").attr("width",400).attr("height", 400);

d3.json("data/buildings.json").then((data)=> {

    data.forEach((d)=>{
        d.height = +d.height;
    });

    let rects = svg.selectAll("rect").data(data);

    rects.enter()
        .append("rect")
        .attr("stroke", "#69b3a2")
        .attr("width", 40)
        .attr("height", (data) => {return data.height*0.1})
        .attr("x", (data, idx) => {return (idx * 45) + 20})
        .attr("y", (data) => {return (400 - data * 10)})
});






