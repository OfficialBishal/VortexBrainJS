import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ theme, handleChange }) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" onClick={() => navigate("/")}>
          My App
        </Typography>
        <Switch checked={theme} onChange={handleChange} color="default" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
