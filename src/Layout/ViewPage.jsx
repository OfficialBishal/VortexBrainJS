import React, { useContext, useState } from "react";
import Header from "./Header";
import { Button, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ErrorToast } from "../Component";
import CustomThemeContext from "../Context/CustomThemeContext";

const ViewPage = () => {
  const { theme, darkTheme, handleChange } = useContext(CustomThemeContext);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //setting up dark and light theme config

  //function that sets up error message
  const handleOpenError = (message) => {
    setErrorMessage(message);
    setErrorOpen(true);
  };

  //function that closes error message
  const handleCloseError = () => {
    setErrorOpen(false);
  };

  //function that changes the theme

  return (
    <ThemeProvider theme={darkTheme}>
      <Header theme={theme} handleChange={handleChange} />
      <ErrorToast
        open={errorOpen}
        message={errorMessage}
        handleClose={handleCloseError}
      />
      {/* <Button onClick={() => handleOpenError("Error loading!")}>
        Error toast
      </Button> */}
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default ViewPage;
