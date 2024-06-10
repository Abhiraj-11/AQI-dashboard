import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333333", height: 50 }}>
      {" "}
      <Typography variant="h6" color="white">
        AQI Sensor Data
      </Typography>
    </Box>
  );
};

export default Footer;
