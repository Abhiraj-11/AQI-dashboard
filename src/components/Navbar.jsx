import SensorsIcon from "@mui/icons-material/Sensors";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
const Navbar = ({ login, setLogin }) => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "rgb(7 128 107)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <SensorsIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            AQI Sensor Data
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/" style={{ color: "white", margin: "auto" }}>
              <Button
                color="inherit"
                sx={{ "&:hover": { backgroundColor: "#0c7562" } }}
              >
                Home
              </Button>
            </Link>
            <Link to="/About" style={{ color: "white", margin: "auto" }}>
              <Button
                color="inherit"
                sx={{ "&:hover": { backgroundColor: "#0c7562" } }}
              >
                About
              </Button>
            </Link>
            <Link to="/ContactUs" style={{ color: "white", margin: "auto" }}>
              <Button
                color="inherit"
                sx={{ "&:hover": { backgroundColor: "#0c7562" } }}
              >
                Contact Us
              </Button>
            </Link>
            <DropDownMenu login={login} setLogin={setLogin} />
          </Box>
          <Box sx={{ flexGrow: 100, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="logo"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <SensorsIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Sensor Data
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
