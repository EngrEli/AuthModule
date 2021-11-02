/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: '',
      confirmPw: '',
    },
    onSubmit: (values) => {
      console.log('form data', values);
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Please input your name';
      }

      if (!values.username) {
        errors.username = 'Please input your username';
      } else if (values.username.length < 4) {
        errors.username = 'Username must be 4 characters or more';
      } else if (values.username.length > 20) {
        errors.username = 'Username must not exceed 20 characters';
      }

      if (!values.password) {
        errors.password = 'Please input your password';
      } else if (values.password.length < 6) {
        errors.username = 'Password must be 6 characters or more';
      } else if (values.password.length > 20) {
        errors.username = 'Password must not exceed 20 characters';
      }

      if (!values.confirmPw) {
        errors.confirmPw = 'Please confirm your password';
      }

      return errors;
    },
  });

  console.log(formik.errors);
  // console.log('Form values', formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name && formik.errors.name}
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" onChange={formik.handleChange} value={formik.values.username} />
      {formik.errors.username && formik.errors.username}
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} />
      {formik.errors.password && formik.errors.password}
      <label htmlFor="confirmPw">Confirm Password</label>
      <input type="text" id="confirmPw" name="confirmPw" onChange={formik.handleChange} value={formik.values.confirmPw} />
      {formik.errors.confirmPw && formik.errors.confirmPw}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
