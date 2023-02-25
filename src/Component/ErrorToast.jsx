import { Close } from "@mui/icons-material";
import { IconButton, Snackbar } from "@mui/material";
import React from "react";

const ErrorToast = ({ open, handleClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

export default ErrorToast;
