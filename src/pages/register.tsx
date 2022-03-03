import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { errorParser, windowExists } from 'storejars-react-toolkit';

import { metaSelector, action } from '../redux/entities/auth';
import { TextInput, Banner, PasswordInput, Button } from '../components';

export default function Register() {
  const ioRequest = useSelector((state) => metaSelector(state).create);
  const dispatch = useDispatch();

  const { success, error, loading } = ioRequest;

  const reset = () => dispatch(action.createAction({}).reset);

  if (success) {
    setTimeout(() => {
      // TODO, this shoudl be a cline socde redirect
      windowExists.location.href = '';
    }, 3000);
  }

  const schema = Yup.object({
    phone: Yup.string().min(3, 'Name should be more than 3 characters').required(),
    password: Yup.string().min(3, 'Name should be more than 3 characters').required(),
    email: Yup.string().required(),
    lastName: Yup.string().min(3, 'Last Name should be more than 3 characters').required(),
    firstName: Yup.string().min(3, 'First Name should be more than 3 characters').required(),
  });

  return (
    <div className="center">
      <div className="authBox">
        {error && <Banner.Error message={error} reset={reset} />}
        {success && <Banner.Success message="Registration successful" reset={reset} />}

        <div className="result-filter-wrapper mh450">
          <h3>Join Us</h3>

          <div className="content">
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '', password: '', phone: '' }}
              onSubmit={(values) => {
                dispatch(action.createAction({}).reset);
                dispatch(action.createAction(values).loading);
              }}
              validationSchema={schema}
            >
              {(props) => {
                const { handleChange, values, handleSubmit, errors, touched } = props;

                return (
                  <form className="form-holder" onSubmit={handleSubmit}>
                    <TextInput
                      name="firstName"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      error={errorParser(errors, touched, 'firstName')}
                    />

                    <TextInput
                      name="lastName"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      error={errorParser(errors, touched, 'lastName')}
                    />

                    <TextInput
                      type="email"
                      name="email"
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

                    <TextInput
                      name="phone"
                      placeholder="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      error={errorParser(errors, touched, 'phone')}
                    />

                    <div className="mt-40">
                      <Button text="Register" isSubmitting={loading} />
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'ClassyDrive - ',
      description: '',
    },
  };
}
