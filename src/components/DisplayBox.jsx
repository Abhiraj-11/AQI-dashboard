import { Box, Typography } from "@mui/material";
import Gauge from "./Gauge";
import Graph from "./Graph";
import Map from "./Map";

const DisplayBox = ({ field, type, sensorValue, unit, maxValue }) => {
  return (
    <>
      <Box
        mx={2}
        my={2}
        sx={{
          width: "28rem",
          display: "inline-block",
          justifyContent: "space-between",
        }}
      >
        <Box
          padding={1}
          sx={{
            backgroundColor: "rgb(42 182 158)",
            border: 1,
            borderColor: "#e1e1e1",
            textAlign: "center  ",
          }}
        >
          <Typography variant="h6" sx={{ color: "white" }}>
            {field}
          </Typography>
        </Box>
        {type === "gauge" && (
          <Gauge sensorValue={sensorValue} unit={unit} maxValue={maxValue} />
        )}
        {type === "graph" && (
          <Graph sensorValue={sensorValue} maxValue={maxValue} />
        )}
        {type === "map" && <Map />}
      </Box>
    </>
  );
};

export default DisplayBox;
