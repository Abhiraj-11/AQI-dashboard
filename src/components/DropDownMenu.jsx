import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({ login, setLogin }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleRoute = () => {
    if (login) {
      setLogin(false);
      return "/SignIn";
    }
  };
  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="logo"
        onClick={handleClick}
        sx={{ "&:hover": { backgroundColor: "#0c7562" } }}
      >
        <AccountCircleIcon
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
        <Link to="/Profile" style={{ textDecoration: "none", color: "black" }}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <Link
          to={toggleRoute()}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default DropDownMenu;
