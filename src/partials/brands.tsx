import React from 'react';

export default function Brands() {
  return (
    <div className="bg-light pt-90 pb-60">
      <div className="container">
        <div className="row">
          <h2 className="section-title">Brands we accept</h2>
          <div>
            <div className="all-car-brand-wrapper">
              <ul className="call-car-brand-list">
                <li>
                  <a href="#">
                    <span className="image">
                      <img src="/images/car-brand/01.png" alt="/images" />
                    </span>{' '}
                    Toyota
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span className="image">
                      <img src="/images/car-brand/02.png" alt="/images" />
                    </span>{' '}
                    Honda
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="image">
                      <img src="/images/car-brand/03.png" alt="/images" />
                    </span>{' '}
                    Nissan
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="image">
                      <img src="/images/car-brand/04.png" alt="/images" />
                    </span>{' '}
                    Mercedes Benz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <p>* Partners can only upload brands from 2017 above</p>
        </div>
      </div>
    </div>
  );
}
