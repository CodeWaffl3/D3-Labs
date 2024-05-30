let svg = d3.select("#chart-area").append("svg").attr("width",400).attr("height", 400);

d3.json("data/ages.json").then((data)=> {

    console.log(data);

});

d3.json("data/ages.json").then((data)=> {
    data.forEach((d)=>{
        d.age = +d.age;
    });
    let circles = svg.selectAll("circle").data(data);
    circles.enter()
        .append("circle")
        .attr("cx", (data, idx) => {return (idx * 100) + 50})
        .attr("cy", 200)
        .attr("r", (data) => {return data.age * 3})
        .attr("fill", "#69b3a2")
});






