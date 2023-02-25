import { AuthProvider } from "./AuthContext";
import { CustomThemeProvider } from "./CustomThemeContext";

export const MainProvider = ({ children }) => {
  return (
    <CustomThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </CustomThemeProvider>
  );
};
