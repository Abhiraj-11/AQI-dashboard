import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import React, { useState, useEffect, useRef } from "react";

const Graph = ({ sensorValue }) => {
  const [series, setSeries] = useState([
    {
      name: "Real-time data",
      data: [],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      id: "realtime",
      type: "line",
      height: 350,
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Real-time Sensor Data",
      align: "left",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      range: 10000, // Last 10 seconds
      labels: {
        formatter: (value) => {
          const date = new Date(value);
          return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
        },
      },
    },
    yaxis: {
      max: 10,
    },
    legend: {
      show: false,
    },
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Data from Firebase:", sensorValue);
      const x = new Date().getTime(); // current time
      const y = sensorValue;

      console.log("New data point:", { x, y });

      setSeries((prevSeries) => {
        const newSeries = [...prevSeries];
        newSeries[0].data = [...newSeries[0].data, { x, y }];
        return newSeries;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [sensorValue]);

  return (
    <Box sx={{ border: 8, borderColor: "#e1e1e1", pt: 2 }}>
      <ReactApexChart
        ref={chartRef}
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </Box>
  );
};

export default Graph;
