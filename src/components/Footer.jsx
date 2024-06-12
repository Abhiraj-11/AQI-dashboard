import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333333",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: 1,
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" color="white" mr={1}>
          AQI Sensor Data |
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="white" mr={1}>
            Home |
          </Typography>
        </Link>
        <Link to="/About" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="white" mr={1}>
            About |
          </Typography>
        </Link>
        <Link to="/ContactUs" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="white" mr={1}>
            Contact Us |
          </Typography>
        </Link>
        <Link to="/Profile" style={{ textDecoration: "none" }}>
          <Typography variant="h6" color="white" mr={1}>
            My Profile
          </Typography>
        </Link>
      </Box>
      <marquee>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h6" color="white" mr={1}>
            Made by Abhiraj Paul,
          </Typography>
          <Typography variant="h6" color="white" mr={1}>
            Amandeep Vasistha,
          </Typography>
          <Typography variant="h6" color="white" mr={1}>
            Kalpeswar Paul,
          </Typography>
          <Typography variant="h6" color="white" mr={1}>
            Subhadeep Karmakar
          </Typography>
        </Box>
      </marquee>
      <Box mt={1}>
        <Typography
          variant="body1"
          color="white"
          mr={1}
          fontWeight="normal"
          fontFamily="-moz-initial"
          sx={{ textAlign: "center" }}
        >
          © 2024, Abhiraj Paul - Sensor Dashboard Template
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
