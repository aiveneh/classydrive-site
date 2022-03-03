import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { windowExists } from 'storejars-react-toolkit';

import { metaSelector, action } from '../redux/entities/auth';
import { Banner } from '../components';
import { LoginForm } from '../partials';

export default function Login() {
  const ioRequest = useSelector((state) => metaSelector(state).read);
  const dispatch = useDispatch();

  const { success, error, loading } = ioRequest;

  const reset = () => dispatch(action.readAction({}).reset);

  if (success) {
    setTimeout(() => {
      // TODO, this shoudl be a cline socde redirect
      windowExists.location.reload();
    }, 3000);
  }

  const handleSubmit = (values) => {
    dispatch(action.readAction({}).reset);
    dispatch(action.readAction(values).loading);
  };

  return (
    <Fragment>
      <div className="center">
        <div className="authBox">
          <div className="result-filter-wrapper mh280">
            <h3>Login</h3>

            <div className="content">
              {error && <Banner.Error message={error} reset={reset} />}
              {success && <Banner.Success message="Login successful" reset={reset} />}

              <LoginForm type="user" handleSubmit={(values) => handleSubmit(values)} isSubmitting={loading} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
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
