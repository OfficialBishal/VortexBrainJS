import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { loggedInStatus } = useContext(AuthContext);
  const location = useLocation();

  // if (!loggedInStatus) {
  //   return <Navigate to={`/login?returnUrl=${location.pathname}`} />;
  // }
  return children;
};

export default PrivateRoute;
