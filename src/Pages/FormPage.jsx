import { Box, Button, Container, CssBaseline } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { CustomEditor } from "../Component";
import { FormAllData } from "../Content/content";
import useStyles from "../Styles/style";

const FormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  if (location?.state?.redirected) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className={classes.formContainer}>
          <Formik
            initialValues={{ q1: "", q2: "", q3: "" }}
            onSubmit={(e) =>
              navigate("/user/summary", {
                state: {
                  redirected: true,
                  dataToView: e,
                  formPage: "Scientific",
                },
              })
            }
          >
            {({ values, setFieldValue }) => (
              <Form>
                {location?.state?.formType === "Scientific" ? (
                  <div className={classes.formWrapper}>
                    {FormAllData.scientific.map((form, i) => (
                      <div className="bg-grey m-5">
                        <label>
                          <h3>
                            {i + 1}. {form.question}
                          </h3>
                        </label>
                        <CustomEditor
                          key={i}
                          setFieldValue={setFieldValue}
                          name={form.name}
                        />
                      </div>
                    ))}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: "200px", fontSize: "16px", margin: "3px" }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </Container>
      </React.Fragment>
    );
  }
  return <Navigate to={"/user"} />;
};

export default FormPage;
