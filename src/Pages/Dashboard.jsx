import { Button, CssBaseline } from "@mui/material";
import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import SectionCustom from "../Component/Section";

const Dashboard = () => {
  const { logOutUser } = useContext(AuthContext);
  return (
    <React.Fragment>
      <CssBaseline />
      <SectionCustom />
      {/* <Button onClick={logOutUser}>Logout</Button> */}
    </React.Fragment>
  );
};

export default Dashboard;
