import React from 'react';
import constants from '../constants';

export default function Quickinfo() {
  return (
    <div className="mt-40 bt pt-20">
      <div className="featured-item">
        <div className="icon">
          <i className="fa fa-phone" />
        </div>

        <div className="content">
          <h5>Quick Call</h5>
          <p>
            <a href={`tel:${constants.phone}`}>{constants.phone}</a>
          </p>
        </div>
      </div>

      <div className="featured-item">
        <div className="icon">
          <i className="fa fa-envelope" />
        </div>

        <div className="content">
          <h5>Quick Email</h5>
          <p>
            <a href={`mailto:${constants.email}`}>{constants.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
