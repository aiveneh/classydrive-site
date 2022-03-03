import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selector } from '../redux/entities/spareparts';
import { formatPrice } from '../helpers';

export default function SimilarSpareparts() {
  const spareparts = useSelector((state) => selector(state).similarSpareparts);

  return (
    <Fragment>
      <h2 className="section-title">You May Also Like</h2>
      <div className="car-item-wrapper alt-bg-white">
        <div className="GridLex-gap-30">
          <div className="GridLex-grid-noGutter-equalHeight">
            {spareparts.map((item) => (
              <div key={item.createdAt} className="GridLex-col-3_sm-4_xs-12">
                <div className="car-item">
                  <a href={`/sparepart/detail/${item._id}`}>
                    <div className="image">
                      <img className="home-page-image-thumbnail" src={item.images[0]} alt={item.name} />
                    </div>
                    <div className="content">
                      <h4>{item.name}</h4>
                      <p className="car-for">For Sale</p>
                      <p className="price">{formatPrice(item.price)}</p>
                    </div>

                    <div className="bottom">
                      <ul className="car-meta clearfix">
                        <li>
                          <i className="fa fa-cogs" />
                          New
                        </li>
                        <li>
                          <i className="fa fa-tachometer" />X
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
    </Fragment>
  );
}
