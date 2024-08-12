'use client'
import * as d3 from "d3";

import { useRef, useEffect } from "react";

const TotalOrdersByMonthChart = ({
    data,
    width = 640,
    height = 400,
    marginTop = 20,
    marginRight = 20,
    marginBottom = 20,
    marginLeft = 20
}) => {
    const ref = useRef();
    // const gx = useRef();
    // const gy = useRef();
    const x = d3.scaleBand()
        .domain(d3.groupSort(data, ([d]) => d._id, (d) => d.month))
        .range([marginLeft, width - marginRight])
        .padding(0.1);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, (d) => d.totalOrders)])
        .range([height - marginBottom, marginTop])

    useEffect(() => {
        console.log(y(0) - y(2));
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto;");

        svg.append("g")
            .attr("fill", "steelblue")
            .selectAll()
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.month))
            .attr("y", (d) => y(d.totalOrders))
            .attr("height", (d) => y(0) - y(d.totalOrders))
            .attr("width", x.bandwidth());

        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .attr("color", "black")
            .call(d3.axisBottom(x).tickSizeOuter(0));

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .attr("color", "black")
            .call(d3.axisLeft(y).tickFormat((d => d % 1 ? null : d)))
            .call(g => g.select(".domain").remove())

        svg.selectAll(".tick")
            .filter(d => typeof d == 'number')
            .filter(d => d % 1 != 0)
            .remove()
    })

    // const line = d3.line((d, i) => x(i), y);
    // useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, x]);
    // useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, y]);
    // return (
    //     <svg width={width} height={height}>
    //         <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
    //         <g ref={gy} transform={`translate(${marginLeft},0)`} />
    //         <path fill="none" stroke="black" strokeWidth="1.5" d={line(data)} />
    //         <g fill="white" stroke="black" strokeWidth="1.5">
    //             {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
    //         </g>
    //     </svg>
    // );
    return (
        <div>
            <svg width={width} height={height} ref={ref}>
            </svg>
        </div>
    )
}

export default TotalOrdersByMonthChart;