import React from "react";
import { Formik } from "formik";
import { TextField } from "@material-ui/core";
interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Formik
        initialValues={{ firstName: "brad" }}
        onSubmit={data => {
          console.log("data", data);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </>
  );
};

export default App;
