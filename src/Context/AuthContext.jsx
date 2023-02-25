import { checkPassword } from "../Utils/LoginTempCreds";

const { createContext, useState } = require("react");

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [loggedInStatus, setLoggedInStatus] = useState(() =>
    localStorage.getItem("loggedInStatus") ? true : false
  );
  const loginUser = async (data) => {
    try {
      let res = await checkPassword(data.userName, data.email, data.password);
      setLoggedInStatus(true);
      localStorage.setItem("loggedInStatus", JSON.stringify({ logged: true }));
      return res;
    } catch (error) {
      throw error;
    }
  };

  const logOutUser = async () => {
    setLoggedInStatus(false);
    localStorage.removeItem("loggedInStatus");
  };
  let contextData = {
    loginUser: loginUser,
    loggedInStatus: loggedInStatus,
    setLoggedInStatus: setLoggedInStatus,
    logOutUser: logOutUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
