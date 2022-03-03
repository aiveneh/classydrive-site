import React from 'react';
import { formatPrice } from '../helpers';

export default function RecentlyViewedCars() {
  const cars = [];

  return (
    <div className="side-module mt-40">
      <h3>You recently viewed</h3>

      <div className="inner">
        {cars.map((item) => (
          <div key={item.createdAt} className="car-item-sm">
            <a href={`/car/detail/${item._id}`}>
              <div
                className="image-bg"
                style={{ backgroundImage: item.exteriorImages ? `url(${item.exteriorImages[0]})` : '' }}
              />

              <div className="content">
                <h6>
                  {item.make} {item.model}
                </h6>
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
                  <p className="price">{formatPrice(item.price)}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
