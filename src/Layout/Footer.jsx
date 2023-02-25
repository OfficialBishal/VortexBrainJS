import { Email, Phone, Room } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "../Styles/style";

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
        <Typography className={classes.footerText}>
          Get back to us:{" "}
          <BottomNavigation>
            <BottomNavigationAction label="Email" icon={<Email />} />
            <BottomNavigationAction label="Phone" icon={<Phone />} />
            <BottomNavigationAction label="Address" icon={<Room />} />
          </BottomNavigation>
        </Typography>
        <Typography className={classes.footerDate}>Copyright {date}</Typography>
      </Box>
    </div>
  );
};

export default Footer;
