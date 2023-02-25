import React, { useContext } from "react";
import useStyles from "../Styles/style";
import { Box, Button, CssBaseline, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { loginValidate } from "../Utils/Validator";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e, { setSubmitting }) => {
    // try {
    //   if (await loginUser(e)) {
    //     navigate("/user");
    //   }
    // } catch (error) {
    //   alert(error);
    // } finally {
    //   setSubmitting(false);
    // }
    navigate("/user");
  };
  return (
    <React.Fragment>
      <CssBaseline />

      <Box className={classes.formContainer}>
        <Typography variant="h4" className={classes.formHeading}>
          Login
        </Typography>
        <Box className={classes.form}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              userName: "",
            }}
            // validationSchema={loginValidate}
            onSubmit={handleSubmit}
          >
            {({ errors, setFieldValue, isSubmitting }) => (
              <Form>
                <TextField
                  label="Username"
                  variant="outlined"
                  error={errors.userName ? true : false}
                  id={
                    errors.userName
                      ? "outlined-error-helper-text"
                      : "outlined-required"
                  }
                  fullWidth
                  helperText={errors.userName ? errors.userName : ""}
                  className={classes.inputField}
                  onChange={(e) => setFieldValue("userName", e.target.value)}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  error={errors.email ? true : false}
                  id={
                    errors.email
                      ? "outlined-error-helper-text"
                      : "outlined-required"
                  }
                  fullWidth
                  helperText={errors.email ? errors.email : ""}
                  className={classes.inputField}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                />

                <TextField
                  label="Password"
                  variant="outlined"
                  type="password"
                  error={errors.password ? true : false}
                  id={
                    errors.password
                      ? "outlined-error-helper-text"
                      : "outlined-required"
                  }
                  fullWidth
                  helperText={errors.password ? errors.password : ""}
                  className={classes.inputField}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                />

                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ width: "200px", fontSize: "16px" }}
                >
                  {isSubmitting ? "Please wait..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Login;
