import React from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { errorParser, windowExists } from 'storejars-react-toolkit';

import { metaSelector, action } from '../../redux/entities/serviceRequests';
import { Button, Banner, TextInput } from '../../components';
import { routes } from '../../routes';

interface IProps {
  previous: any;
  values: any;
}

export default function UserDetails(compProps: IProps) {
  const ioRequest = useSelector((state) => metaSelector(state).create);
  const dispatch = useDispatch();

  const { success, error, loading } = ioRequest;

  const reset = () => dispatch(action.createAction({}).reset);

  if (success) {
    setTimeout(() => {
      windowExists.location.href = routes.serviceRequest.path;
    }, 3000);
  }

  const schema = Yup.object({
    address: Yup.string().required(),
    lga: Yup.string().required(),
    phone: Yup.string().required(),
    email: Yup.string().required(),
    name: Yup.string().required(),
  });

  return (
    <div className="result-filter-wrapper min-height-600">
      <h3>Contact Details</h3>

      <div className="content">
        {error && <Banner.Error message={error} reset={reset} />}
        {success && (
          <Banner.Success
            message="Service request received successfully, a member of our team would reach out to you as soon as possible"
            reset={reset}
          />
        )}

        <Formik
          initialValues={{ name: '', email: '', phone: '', state: 'Lagos', lga: '', address: '' }}
          validationSchema={schema}
          onSubmit={(values) => {
            const payload = { ...compProps.values, ...values };
            dispatch(action.createAction({}).reset);
            dispatch(action.createAction(payload).loading);
          }}
        >
          {(props) => {
            const { handleChange, values, handleSubmit, errors, touched } = props;

            return (
              <form className="form-holder" onSubmit={handleSubmit}>
                <TextInput
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  error={errorParser(errors, touched, 'name')}
                />

                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  error={errorParser(errors, touched, 'email')}
                />

                <TextInput
                  name="phone"
                  placeholder="Phone"
                  value={values.phone}
                  onChange={handleChange}
                  error={errorParser(errors, touched, 'phone')}
                />

                <TextInput
                  name="lga"
                  placeholder="LGA"
                  value={values.lga}
                  onChange={handleChange}
                  error={errorParser(errors, touched, 'lga')}
                />

                <TextInput
                  name="address"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  error={errorParser(errors, touched, 'address')}
                />

                <div className="mt-40">
                  <button type="button" className="btn btn-block next-btn float-l" onClick={() => compProps.previous()}>
                    Previous
                  </button>

                  <Button isSubmitting={loading} text="Submit" />
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
