import React, { useEffect } from 'react';
import { arrayFrom } from 'storejars-react-toolkit/dist/constants';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { errorParser } from 'storejars-react-toolkit';

import { TextInput } from '../../components';
import { selector as constantsSelector, action as constantsAction } from '../../redux/entities/constants';

interface IProps {
  next: any;
}

export default function VehicleDetails(props: IProps) {
  const years = arrayFrom(1990, 2021).reverse();

  const constants = useSelector((state) => constantsSelector(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(constantsAction.readAction({}).loading);
  }, []);

  const schema = Yup.object({
    description: Yup.string().required(),
    year: Yup.string().required(),
    model: Yup.string().required(),
    make: Yup.string().required(),
  });

  return (
    <div className="result-filter-wrapper min-height-400">
      <h3>Vehicle Details</h3>

      <div className="content">
        <Formik
          initialValues={{ make: '', model: '', year: 0, description: '' }}
          validationSchema={schema}
          onSubmit={(values) => {
            props.next(values);
          }}
        >
          {(props) => {
            const { handleChange, values, handleSubmit, errors, touched } = props;

            return (
              <form className="form-holder" onSubmit={handleSubmit}>
                <div className="holder-item mb-20">
                  <select className="form-control mb-0" name="make" value={values.make} onChange={handleChange}>
                    <option value="">Vehicle Make</option>
                    {constants.VehicleMakeTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <TextInput
                  name="model"
                  placeholder="Vehicle Model"
                  value={values.model}
                  onChange={handleChange}
                  error={errorParser(errors, touched, 'model')}
                />

                <div className="holder-item mb-20">
                  <select
                    required
                    className="form-control mb-0"
                    name="year"
                    value={values.year}
                    onChange={handleChange}
                  >
                    <option value="0">Year</option>
                    {years.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="holder-item mb-20">
                  <div className="fancy-select">
                    <textarea
                      name="description"
                      className="form-control mb-0"
                      placeholder="Extra description"
                      value={values.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mt-40">
                  <button className="btn btn-block next-btn" type="submit">
                    Next
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
