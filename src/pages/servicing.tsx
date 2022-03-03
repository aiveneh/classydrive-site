import React from 'react';
import { useSelector } from 'react-redux';

import { selector } from '../redux/entities/services';
import ServiceItem from '../partials/serviceItem';
import { classNames } from '../constants';

export default function CarServicing() {
  const services = useSelector((state) => selector(state).data);

  return (
    <div className="main-wrapper scrollspy-container">
      <div className="bg-primary section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
              <div className="section-title text-center mb-0">
                <h2>Car Servicing</h2>
                <p>Service your cars with a rest of mind.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h3 className="heading mt-0">More Than Car Dealers</h3>

          <p>
            Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer
            wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity
            no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured
            overcame she bachelor improved. Studied however out wishing but inhabit fortune windows.
          </p>

          <hr className="mt-100 mb-100" />

          <div className="row">
            <div className="col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
              <div className="section-title text-center">
                <h2>Car Servicing Plans</h2>
                <p>Why R7 is the best way to service your car</p>
              </div>
            </div>
          </div>

          <div className="row">
            {services.map((item, index) => (
              <ServiceItem
                name={item.type}
                description={item.description}
                className={classNames[index]}
                key={item.type}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
