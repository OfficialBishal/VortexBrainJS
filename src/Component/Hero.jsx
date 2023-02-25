import React from "react";
import useStyles from "../Styles/style";
import { Box, Button, Grid, Typography } from "@mui/material";
import { HeroContent } from "../Content/content";
import { useNavigate } from "react-router-dom";
// const fs = require("fs");
// const users = [];
// const buttonClick = () => {
//   fs.writeFile("users.json", JSON.stringify(users), function (err) {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// };
const Hero = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            {HeroContent.title}
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            {HeroContent.body}
          </Typography>
          <div className={classes.buttonBlock}>
            {HeroContent.buttons.map((button, i) => (
              <Button
                variant={button.variant}
                color={button.color}
                sx={{ width: "200px", fontSize: "16px", margin: "3px" }}
                onClick={() => navigate(`${button.to}`)}
              >
                {button.name}
              </Button>
            ))}
          </div>
          {/* <Button onClick={buttonClick}>Click</Button> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
