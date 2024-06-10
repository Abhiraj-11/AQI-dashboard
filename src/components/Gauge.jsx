import { Box } from "@mui/material";
import GaugeComponent from "react-gauge-component";

const Gauge = ({ sensorValue, unit, maxValue }) => {
  let tickValue = [];

  if (maxValue > 50) {
    for (let i = 50; i <= maxValue; ) {
      tickValue = [...tickValue, { value: i }];
      i = i + 50;
    }
  } else {
    for (let i = 10; i <= maxValue; ) {
      tickValue = [...tickValue, { value: i }];
      i = i + 10;
    }
  }

  return (
    <Box sx={{ border: 8, borderColor: "#e1e1e1", pt: 2 }}>
      <GaugeComponent
        value={sensorValue}
        type="radial"
        labels={{
          valueLabel: {
            formatTextValue: (value) => {
              if (unit === "AQI") {
                return sensorValue <= 50
                  ? "GOOD"
                  : sensorValue <= 100
                  ? "SATISFACTORY"
                  : sensorValue <= 150
                  ? "MODERATE"
                  : sensorValue <= 200
                  ? "POOR"
                  : sensorValue <= 300
                  ? "VERY POOR"
                  : sensorValue <= 500
                  ? "HAZARDOUS"
                  : "SEVERE";
              }
              return value + unit;
            },
            style: {
              fontSize: "30px",
              fill: "black",
              textShadow: "none",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            },
          },
          tickLabels: {
            type: "outer",
            valueConfig: {
              formatTextValue: (value) => value,
            },
            defaultTickValueConfig: {
              style: {
                fontSize: "15px",
                fill: "gray",
                fontWeight: "bold",
              },
            },
            ticks: tickValue,
          },
        }}
        minValue={0}
        maxValue={maxValue}
        arc={{
          colorArray: ["#5BE12C", "#EA4228"],
          subArcs: [{ limit: 10 }, { limit: 30 }, {}, {}, {}],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
    </Box>
  );
};

export default Gauge;
