import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hamburger = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="logo"
        onClick={handleClick}
      >
        <MenuIcon
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link
          to="/ContactUs"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default Hamburger;
