import { Box, Button, Container, CssBaseline } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useStyles from "../Styles/style";

const Summary = () => {
  const location = useLocation();
  const classes = useStyles();
  const [viewSelector, setViewSelector] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />

      {viewSelector ? (
        <Box className={classes.marginAll}>
          <div className={classes.buttonEnd}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setViewSelector(false)}
            >
              X
            </Button>
          </div>
          <Container>
            <label>
              <h5>Summary 1</h5>
            </label>
            <div
              className="q1-wrapper"
              dangerouslySetInnerHTML={{
                __html: location?.state?.dataToView.q1 ? (
                  location?.state?.dataToView.q1
                ) : (
                  <p>Empty</p>
                ),
              }}
            />
            <hr />
            <label>
              <h5>Summary 2</h5>
            </label>
            <div
              className="q2-wrapper"
              dangerouslySetInnerHTML={{
                __html: location?.state?.dataToView.q2 ? (
                  location?.state?.dataToView.q2
                ) : (
                  <p>Empty</p>
                ),
              }}
            />
            <hr />

            <label>
              <h5>Summary 3</h5>
            </label>
            <div
              className="q3-wrapper"
              dangerouslySetInnerHTML={{
                __html: location?.state?.dataToView.q3 ? (
                  location?.state?.dataToView.q3
                ) : (
                  <p>Empty</p>
                ),
              }}
            />
          </Container>
        </Box>
      ) : (
        <Button
          color="primary"
          variant="contained"
          className={classes.marginAll}
          onClick={() => setViewSelector(true)}
        >
          View Summary
        </Button>
      )}
    </React.Fragment>
  );
};

export default Summary;
