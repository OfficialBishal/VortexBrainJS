import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { sectionItems } from "../Content/content";
import useStyles from "../Styles/style";
import { useNavigate } from "react-router-dom";

const SectionCustom = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item) => (
          <Card item className={classes.card}>
            <CardActionArea>
              {/* <CardMedia
             component="img"
             alt="Contemplative Reptile"
             height="160"
             image={"" + item.img}
             title="Contemplative Reptile"
           /> */}
              <CardContent
                onClick={() => navigate(item.to, { state: item.state })}
              >
                <Typography gutterBottom variant="body2" component="h2" noWrap>
                  {item.sentence}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionCustom;
