import { createTheme } from "@mui/material";

const { createContext, useState } = require("react");

const CustomThemeContext = createContext();
export default CustomThemeContext;

export const CustomThemeProvider = ({ children }) => {
  const [theme, settheme] = useState(
    localStorage.getItem("darkTheme")
      ? JSON.parse(localStorage.getItem("darkTheme")).status
      : false
  );

  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light",
    },
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
    localStorage.setItem(
      "darkTheme",
      JSON.stringify({ status: event.target.checked })
    );
  };
  let contextData = {
    theme: theme,
    settheme: settheme,
    darkTheme: darkTheme,
    handleChange: handleChange,
  };
  return (
    <CustomThemeContext.Provider value={contextData}>
      {children}
    </CustomThemeContext.Provider>
  );
};
