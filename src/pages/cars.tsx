import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selector, action } from '../redux/entities/cars';
import { formatPrice, carLink } from '../helpers';
import { Filters, Brands, Paginate } from '../partials';
import { routes } from '../routes';

export default function Cars() {
  const dispatch = useDispatch();

  const cars = useSelector((state) => selector(state).data);

  useEffect(() => {
    dispatch(action.readAction({}).loading);
  }, []);

  return (
    <div className="main-wrapper scrollspy-container">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 hidden-xs">
              <h2 className="page-title">Cars</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <ol className="breadcrumb">
                <li className="active text">You Are Here:</li>
                <li>
                  <a href={routes.home.path}>Home</a>
                </li>
                <li className="active">Car List</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="container-outer">
        <div className="container">
          <div className="content-wrapper">
            <Filters />

            <div className="clear mb-10"></div>

            <div className="car-review-list-wrapper">
              <div className="GridLex-gap-30">
                <div className="GridLex-grid-noGutter-equalHeight GridLex-grid-center">
                  {cars.map((item) => (
                    <div className="GridLex-col-4_sm-4_xs-6_xss-12" key={item.model}>
                      <div className="car-review-list-item">
                        <a href={carLink(item)}>
                          <h5>
                            {item.year} {item.make} {item.model}
                          </h5>

                          <p className="meta">
                            <span className="comment">{formatPrice(item.price)}</span>
                          </p>

                          <div className="image">
                            <img src={item.exteriorImages[0]} alt="{item.model} {item.make} sale" />
                          </div>

                          <div className="content">
                            <p className="short-info">{item.description}</p>
                            <div className="review-score">
                              <span>{item.rating}</span>
                              out of 5.0
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="clear mb-50"></div>
            <Paginate />
          </div>
        </div>
      </div>
      <Brands />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: 'ClassyDrive - ',
      description: '',
    },
  };
}
