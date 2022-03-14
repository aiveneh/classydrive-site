import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selector, action } from '../redux/entities/cars';
import { formatPrice, carLink } from '../helpers';
import { routes } from '../routes';

export default function Home() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => selector(state).data);

  useEffect(() => {
    dispatch(action.readAction({}).loading);
  }, []);

  return (
    <div className="main-wrapper scrollspy-container" style={{ overflowX: 'hidden' }}>
      <div className="slick-hero-slider-wrapper">
        <div className="slider slick-hero-slider slick-slider-center-mode slick-animation slick-inner-dot">
          <div className="slick-item">
            <div className="image-bg" style={{ backgroundImage: 'url(/images/hero-header/02.jpg)' }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div className="slick-hero-slider-caption">
                      <h1 className="animation fromBottom transitionDelay2 transitionDuration4">Free Car Service</h1>
                      <p className="animation fromBottom transitionDelay4 transitionDuration6">
                        Yet joy exquisite put sometimes enjoyment perpetual now. Behind lovers eat having length horses
                        vanity say had its.
                      </p>
                      <a
                        href={routes.serviceRequest.path}
                        className="animation fromBottom transitionDelay6 transitionDuration8"
                      >
                        <span className="bg-primary">Get Free Service</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="image-bg" style={{ backgroundImage: 'url(/images/hero-header/06.jpg)' }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-sm-offset-3 col-md-6 col-md-offset-6">
                    <div className="slick-hero-slider-caption text-left">
                      <h1 className="animation fromBottom transitionDelay2 transitionDuration4 text-left">
                        Car Orders
                      </h1>
                      <p className="animation fromBottom transitionDelay4 transitionDuration6 text-left">
                        Place an Order for your dream car, get it shipped down to you.
                      </p>
                      <a href={routes.cars.path} className="animation fromBottom transitionDelay6 transitionDuration8">
                        <span className="bg-primary">View cars</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="image-bg" style={{ backgroundImage: 'url(/images/hero-header/05.jpg)' }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-7">
                    <div className="slick-hero-slider-caption text-left">
                      <h1 className="animation fromBottom transitionDelay2 transitionDuration4 text-left">
                        Home car services
                      </h1>
                      <p className="animation fromBottom transitionDelay4 transitionDuration6 text-left">
                        But why smiling man her imagine married. Chiefly can man her out believe manners cottage colonel
                        unknown.
                      </p>
                      <a
                        href={routes.serviceRequest.path}
                        className="animation fromBottom transitionDelay6 transitionDuration6"
                      >
                        <span className="bg-primary">Get free service</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <div className="section-title text-center">
                <h2>Latest Cars</h2>
                <p>One sportsman tolerably him extensive put she immediate.</p>
              </div>
            </div>
          </div>

          <div className="car-wrapper-02">
            <div className="GridLex-gap-30">
              <div className="GridLex-grid-noGutter-equalHeight GridLex-grid-center">
                {cars.map((item) => (
                  <div className="GridLex-col-3-_sm-4_xs-6_xss-12" key={item.make}>
                    <div className="car-item-02">
                      <a href={carLink(item)}>
                        <div className="image">
                          <img className="home-page-image-thumbnail" src={item.images[0]} alt="Car" />
                        </div>

                        <small style={{ color: 'red' }}>{item.available && <strong>Available</strong>}</small>
                        <div className="content pt20">
                          <h5>
                            {item.year} {item.make} {item.model}
                          </h5>
                          <p>
                            Starting Price:
                            <strong>{formatPrice(item.price)}</strong>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TODO, Full text search comes here */}

      <div className="promo-box">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
              <h4>Join our club</h4>
              <h2>To get our best offers, newsletter and much more</h2>
              <p className="mb-25">
                Advantages entreaties mr he apartments do. Limits far yet turned highly repair parish talked six. Draw
                fond rank form nor the day eat. Dissimilar admiration so terminated no in contrasted it.
              </p>

              <a href={routes.register.path} className="btn btn-lg btn-facebook">
                <i className="fa fa-facebook"></i> Sign-up with Facebook
              </a>
              <a href={routes.register.path} className="btn btn-lg btn-success">
                <i className="fa fa-envelope"></i> Sign-up with Your Email
              </a>
              <p className="font12 font400 text-muted mt-15">Out believe has request not how comfort evident.</p>
            </div>
          </div>
        </div>
      </div>
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
