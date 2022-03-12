import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorLabel, Banner } from 'storejars-react-toolkit/dist/components';
import { useSelector, useDispatch } from 'react-redux';
import { windowExists, errorParser } from 'storejars-react-toolkit';

import { formatPrice } from '../helpers';
import { metaSelector, action } from '../redux/entities/enquiries';

interface IProps {
  image: string;
  name: string;
  price: string;
  description: string;
  condition?: string;
  mileage?: string;
  type: string;
  itemId: string;
}

export default function EnquiryModal(props: IProps) {
  const { image, name, price, description, condition, mileage, type, itemId } = props;

  const ioRequest = useSelector((state) => metaSelector(state).create);
  const dispatch = useDispatch();

  const { success, error, loading } = ioRequest;

  const reset = () => dispatch(action.createAction({}).reset);

  if (success) {
    setTimeout(() => {
      // TODO, this shoudl be a cline socde redirect
      windowExists.location.reload();
    }, 3000);
  }

  const schema = Yup.object({
    message: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    name: Yup.string().required(),
    startDate: Yup.string().required('Start date is required'),
    endDate: Yup.string().required('End date is required'),
  });

  return (
    <div
      id="enquiryModal"
      className="modal border-transparent fade container-sm"
      tabIndex={-1}
      data-replace="true"
      aria-hidden="true"
      style={{ display: 'none', marginTop: '0px' }}
    >
      <Formik
        initialValues={{ name: '', phone: '', email: '', message: '', startDate: '', endDate: '', type, itemId }}
        validationSchema={schema}
        onSubmit={(values) => {
          dispatch(action.createAction({}).reset);
          dispatch(action.createAction(values).loading);
        }}
      >
        {(props) => {
          const { handleChange, values, handleSubmit, errors, touched } = props;

          return (
            <form className="modal-container" onSubmit={handleSubmit}>
              {error && <Banner.Error message={error} reset={reset} />}
              {success && <Banner.Success message="Enquiry sent successfully" reset={reset} />}

              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                  ×
                </button>
              </div>

              <div className="modal-body">
                <div className="car-item-sm for-enquiry">
                  <a href="#">
                    <div className="image-bg" style={{ backgroundImage: `url(${image})` }} />

                    <div className="content">
                      <h5> {name}</h5>

                      <div className="bottom">
                        <ul className="car-meta clearfix">
                          {condition && (
                            <li
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Car condition"
                              data-original-title="yeas: 2013"
                            >
                              <i className="fa fa-car" />
                              Condition - {condition}
                            </li>
                          )}

                          {mileage && (
                            <li
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Car Mileage"
                              data-original-title="mile: 120000 KM"
                            >
                              <i className="fa fa-tachometer" />
                              Mileage - {mileage}
                            </li>
                          )}
                        </ul>

                        <p className="price">{formatPrice(price)}</p>
                      </div>
                    </div>
                  </a>
                </div>

                <p>{description}</p>

                <div className="form-horizontal">
                  <div className="form-group row gap-15">
                    <label htmlFor="inputEmail1" className="col-sm-4 control-label">
                      Name:
                    </label>

                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control mb-0"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                      />
                      <ErrorLabel message={errorParser(errors, touched, 'name')} />
                    </div>
                  </div>

                  <div className="form-group row gap-15">
                    <label htmlFor="inputEmail2" className="col-sm-4 control-label">
                      Phone Number:
                    </label>

                    <div className="col-sm-8">
                      <input className="form-control mb-0" name="phone" onChange={handleChange} value={values.phone} />
                      <ErrorLabel message={errorParser(errors, touched, 'phone')} />
                    </div>
                  </div>

                  <div className="form-group row gap-15">
                    <label htmlFor="inputEmail3" className="col-sm-4 control-label">
                      Email Address:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control mb-0"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      <ErrorLabel message={errorParser(errors, touched, 'email')} />
                    </div>
                  </div>

                  <div className="form-group row gap-15">
                    <label htmlFor="inputEmail3" className="col-sm-4 control-label">
                      Start Date:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="date"
                        className="form-control mb-0"
                        name="startDate"
                        onChange={handleChange}
                        value={values.startDate}
                      />
                      <ErrorLabel message={errorParser(errors, touched, 'startDate')} />
                    </div>
                  </div>

                  <div className="form-group row gap-15">
                    <label htmlFor="inputEmail3" className="col-sm-4 control-label">
                      End Date:
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="date"
                        className="form-control mb-0"
                        name="endDate"
                        onChange={handleChange}
                        value={values.endDate}
                      />
                      <ErrorLabel message={errorParser(errors, touched, 'endDate')} />
                    </div>
                  </div>

                  <div className="form-group row gap-15">
                    <label htmlFor="inputEmail3" className="col-sm-4 control-label">
                      Message:
                    </label>

                    <div className="col-sm-8">
                      <textarea
                        className="form-control mb-0"
                        rows={5}
                        name="message"
                        onChange={handleChange}
                        value={values.message}
                      />
                      <ErrorLabel message={errorParser(errors, touched, 'message')} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-footer text-left">
                <button type="submit" disabled={loading} className="btn btn-sm btn-primary">
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
