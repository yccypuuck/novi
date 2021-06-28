import * as d3 from "d3";
import React from 'react';

class BarChart extends React.Component {


    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const data = this.props.data;
        const width = this.props.width
        const height = this.props.height
        console.log(data)
        const svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("border", "1px solid black")

        var selection = svg.selectAll("rect").data(data);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, height - 100]);

        selection
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 45)
            .attr("y", (d) => height)
            .attr("width", 40)
            .attr("height", 0)
            .attr("fill", "orange")
            .transition().duration(300)
            .attr("height", (d) => yScale(d))
            .attr("y", (d) => height - yScale(d))

        selection
            .exit()
            .transition().duration(300)
            .attr("y", (d) => height)
            .attr("height", 0)
            .remove()

        // svg.selectAll("rect")
        //     .data(data)
        //     .enter()
        //     .append("rect")
        //     .attr("x", (d, i) => i * 70)
        //     .attr("y", (d, i) => height - 10 * d)
        //     .attr("width", 65)
        //     .attr("height", (d, i) => d * 10)
        //     .attr("fill", "green")


        // svg.selectAll("text")
        //     .data(data)
        //     .enter()
        //     .append("text")
        //     .text((d) => d)
        //     .attr("x", (d, i) => i * 70)
        //     .attr("y", (d, i) => height - (10 * d) - 3)


    }

    render() {
        return <div id={"#" + this.props.id}></div>
    }

}

export default BarChart;