import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selector, action } from '../redux/entities/cars';
import { formatPrice, carLink } from '../helpers';
import { routes } from '../routes';
import { Brands } from '../partials';

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
                      <h1 className="animation fromBottom transitionDelay2 transitionDuration4">CAR DEALERSHIP</h1>
                      <p className="animation fromBottom transitionDelay4 transitionDuration6">
                        Place an order for your dream car and we will get it to you
                      </p>
                      <a href={routes.cars.path} className="animation fromBottom transitionDelay6 transitionDuration8">
                        <span className="bg-primary">Search for cars</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="image-bg" style={{ backgroundImage: 'url(/images/banner.png)' }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-sm-offset-3 col-md-6 col-md-offset-6">
                    <div className="slick-hero-slider-caption text-left">
                      <h1 className="animation fromBottom transitionDelay2 transitionDuration4 text-left">
                        EARN WITH YOUR CAR
                      </h1>
                      <p className="animation fromBottom transitionDelay4 transitionDuration6 text-left">
                        Register your car on our fleet and earn.
                      </p>
                      <a
                        href={routes.register.path}
                        className="animation fromBottom transitionDelay6 transitionDuration8"
                      >
                        <span className="bg-primary">Register Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slick-item">
            <div className="image-bg" style={{ backgroundImage: 'url(/images/car-3.jpg)' }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 col-md-7">
                    <div className="slick-hero-slider-caption text-left">
                      <h1 className="animation fromBottom transitionDelay2 transitionDuration4 text-left">
                        CAR RENTALS
                      </h1>
                      <p className="animation fromBottom transitionDelay4 transitionDuration6 text-left">
                        Unmatched car rental deals and offers just for you
                      </p>
                      <a href={routes.cars.path} className="animation fromBottom transitionDelay6 transitionDuration6">
                        <span className="bg-primary">Rent a Car</span>
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
          <div className="section-title text-center row p-50">
            <h3 className="heading mt-0">ClassyDrive Nigeria Limited</h3>

            <div className="aboutText">
              <p>
                Your global choice in automobile rentals and sales, fleet management and consulting, and private jet
                hiring services. Driven by excellence and the passion to serve with a wealth of resources in man and
                material at our disposal, we have earned our rightful place among our global community of clients.
              </p>
              <p>
                We continually push the boundaries of innovations to deliver seamless, first-class services to business
                and individual needs through our portfolio of services. People and the environment are at the center of
                our values, and we daily commit to their overall good through the businesses we serve and the services
                we render.
              </p>
            </div>
          </div>

          <div className="row mt-70 mb-50">
            <div className="col-md-4 col-xss-12 col-xs-12 text-center mb-20">
              <img src="/images/car-1.jpg" className="flaticon" />
              <a href={routes.cars.path}>
                <p className="w-600">CAR RENTAL</p>
              </a>
              <p>
                Need to show up at a meeting in classy? Ride to your wedding in style and elegance? or you just want to
                have a feel of driving a luxury car ... <a href={routes.about.path}>read more</a>
              </p>
            </div>

            <div className="col-md-4 col-xss-12 col-xs-12 text-center mb-20">
              <img src="/images/car-2.jpg" className="flaticon" />
              <a href={routes.cars.path}>
                <p className="w-600">CAR DEALERSHIP</p>
              </a>
              <p>
                Here at Classy Drive Nigeria, we are on a mission to be the number one destination for luxury and exotic
                automotive needs. <a href={routes.about.path}>read more</a>
              </p>
            </div>

            <div className="col-md-4 col-xss-12 col-xs-12 text-center mb-20">
              <img src="/images/car-4.jpg" className="flaticon" />
              <a href="http://partner.classydrivenigeria.com">
                <p className="w-600">PREMIUM CAR FLEET</p>
              </a>

              <p>
                We over you an opportunity to earn a passive income when you enroll your luxury car in our rental
                program. <a href={routes.about.path}>read more</a>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <div className="section-title text-center">
                <h2>Choose from our fleet of cars</h2>
                {/* <p>One sportsman tolerably him extensive put she immediate.</p> */}
              </div>
            </div>
          </div>

          <div className="car-wrapper-02">
            <div className="GridLex-gap-30">
              <div className="GridLex-grid-noGutter-equalHeight">
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

      <Brands />

      {/* TODO, Full text search comes here */}

      {/* <div className="promo-box">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
              <h4>Join our community of car luxury entusiasts.</h4>
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
      </div> */}
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
