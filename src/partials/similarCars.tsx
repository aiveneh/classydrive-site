import React from 'react';
import { useSelector } from 'react-redux';

import { selector } from '../redux/entities/cars';
import { formatPrice, carLink } from '../helpers';

export default function SimilarCars() {
  const cars = useSelector((state) => selector(state).similarCars);

  return (
    <div>
      <h2 className="section-title">You May Also Like</h2>
      <div className="car-item-wrapper alt-bg-white">
        <div className="GridLex-gap-30">
          <div className="GridLex-grid-noGutter-equalHeight">
            {cars.map((item) => (
              <div key={item.createdAt} className="GridLex-col-3_sm-4_xs-12">
                <div className="car-item">
                  <a href={carLink(item)}>
                    <div className="image">
                      <img src={item.exteriorImages[0]} alt="Car" className="home-page-image-thumbnail" />
                    </div>

                    <div className="content">
                      <h5>
                        {' '}
                        {item.make} {item.model} {item.year}
                      </h5>
                      <p className="car-for">For Sale</p>
                      <p className="price">{formatPrice(item.price)}</p>
                    </div>

                    <div className="bottom">
                      <ul className="car-meta clearfix">
                        <li>
                          <i className="fa fa-cogs" />
                          {item.fuelType}
                        </li>
                        <li>
                          <i className="fa fa-tachometer" />
                          {item.engineSize}
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
