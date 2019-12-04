import React from "react";
import moment from "moment";
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData }) => {
  const roundToDecimals = (numberOfDecimals, value) =>
    Math.round(value * Math.pow(10, numberOfDecimals)) /
    Math.pow(10, numberOfDecimals);

  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: roundToDecimals(4, price), date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: roundToDecimals(4, price), date };
      }
      return null;
    })
    .filter(data => data);
  console.log(formattedData);

  return (
    <BarChart width={1100} height={300} data={formattedData}>
      <Bar type="monotone" dataKey="value" fill="#8884d8" />
      <XAxis dataKey="date" interval={3} />
      <YAxis
        domain={[dataMin => dataMin * 0.98, dataMax => dataMax * 1.02]}
        tickFormatter={tick => roundToDecimals(4, tick)}
      />
      <Tooltip />
    </BarChart>
  );
};

export default Chart;
