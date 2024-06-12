import { Box } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { useState, useEffect, useRef } from "react";

const Graph = ({ sensorValue, field, unit }) => {
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
      width: 3,
    },
    title: {
      text: "Real-time Sensor Data",
      align: "left",
    },
    markers: {
      size: 4,
    },
    xaxis: {
      type: "datetime",
      range: 60000, // Last 10 seconds
      labels: {
        formatter: (value) => {
          const date = new Date(value);
          return date.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });
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
      const x = new Date().getTime(); // current time
      const y = sensorValue;

      setSeries((prevSeries) => {
        const newSeries = [...prevSeries];
        newSeries[0].data = [...newSeries[0].data, { x, y }];
        return newSeries;
      });

      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          title: {
            text:
              "Date: " +
              new Date().toLocaleDateString("en-IN", {
                timeZone: "Asia/Kolkata",
              }),
          },
        },
        yaxis: {
          ...prevOptions.yaxis,
          title: {
            text: `Air quality ${field} ${unit}`,
          },
          max: Math.max(10, y + 10),
          min: 0,
        },
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [sensorValue, field, unit]);

  return (
    <Box sx={{ border: 8, borderColor: "#e1e1e1", pt: 2 }}>
      <ReactApexChart
        ref={chartRef}
        options={options}
        series={series}
        type="line"
        height={310}
      />
    </Box>
  );
};

export default Graph;
