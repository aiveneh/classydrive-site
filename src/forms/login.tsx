import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { errorParser } from 'storejars-react-toolkit';

import { TextInput, PasswordInput, Button } from '../components';

interface IProps {
  isSubmitting: boolean;
  handleSubmit: any;
}

export default function Login(props: IProps) {
  const { isSubmitting, handleSubmit } = props;

  const schema = Yup.object({
    password: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(props) => {
        const { handleChange, values, handleSubmit, errors, touched } = props;

        return (
          <form className="form-holder" onSubmit={handleSubmit}>
            <TextInput
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              error={errorParser(errors, touched, 'email')}
            />

            <PasswordInput
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              error={errorParser(errors, touched, 'password')}
            />

            <div className="">
              <Button text="Login" isSubmitting={isSubmitting} />
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
