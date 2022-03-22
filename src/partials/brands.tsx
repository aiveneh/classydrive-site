import React from 'react';

export default function Brands() {
  return (
    <div className="bg-light pt-90 pb-60">
      <div className="container">
        <h2 className="section-title">All car brands</h2>

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

        <div className="clear mb-70"></div>

        <h2 className="section-title">Browse by body type</h2>

        <div className="browse-by-body-type-wrapper">
          <ul className="browse-by-body-type-list">
            <li>
              <a href="#">
                <i className="flaticon-car-transport-3"></i> Sedan
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-35"></i> SUV
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-63"></i> Truck
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-black-20"></i> Wagon
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-20"></i> Hatchback
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-3"></i> Luxury
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-3"></i> Crossover
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-black-21"></i> Sport Car
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-38"></i> Minivan
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-black-19"></i> Coupe
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-black-17"></i> Convertible
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-car-transport-3"></i> Hybrid
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
