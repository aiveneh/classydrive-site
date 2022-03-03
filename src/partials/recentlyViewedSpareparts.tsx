import React from 'react';
import { formatPrice } from '../helpers';

export default function SpartpartSidebar() {
  const spareparts = [];

  return (
    <div className="side-module mt-40">
      <h3>You recently viewed</h3>

      <div className="inner">
        {spareparts.map((item) => (
          <div className="car-item-sm" key={item._id}>
            <a href={`/sparepart/detail/${item._id}`}>
              <div
                className="image-bg"
                style={{ backgroundImage: item.sparePartImages ? `url(${item.sparePartImages[0]})` : '' }}
              />
              <div className="content">
                <h6>{item.name}</h6>
                <div className="bottom">
                  <ul className="car-meta clearfix">
                    <li>
                      <i className="fa fa-cogs" />
                      Gasoline
                    </li>
                    <li>
                      <i className="fa fa-tachometer" />
                      2,888 cc.
                    </li>
                  </ul>
                  <p className="price"> {formatPrice(item.price)}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
