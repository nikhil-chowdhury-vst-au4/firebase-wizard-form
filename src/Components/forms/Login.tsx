import React from "react";
import { Formik } from "formik";
import data from '../Header/firebase'

import * as Yup from "yup";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ name: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(async () => {
          let result = await (await data.get('/personal-info.json')).data
       
        console.log("Logging in", values , result);
        setSubmitting(false);
      }, 500);
    }}


    validationSchema={Yup.object().shape({
      name: Yup.string()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name  && "error"}
          />
          {errors.name && touched.name && (
            <div className="input-feedback">{errors.name}</div>
          )}
          <label htmlFor="name">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password  && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button 
                color="primary" type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
