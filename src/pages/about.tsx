import React from 'react';

export default function About() {
  return (
    <div className="main-wrapper scrollspy-container">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 hidden-xs">
              <h2 className="page-title">About</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <ol className="breadcrumb">
                <li className="active text">You Are Here:</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">About</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="container-outer pb-20">
        <div className="container">
          <div className="contact-wrapper GridLex-gap-30">
            <div className="GridLex-grid-noGutter-equalHeight">
              <div className="GridLex-col-8_sm-8_xs-12">
                <div className="contact-item-wrapper">
                  <div className="GridLex-grid">
                    {/* < div className="GridLex-col-5_sm-4_xs-12">
                      <div className="contact-item mb-30">
                        <h5>Address</h5>
                        <p>545, Marina Rd,
                      <br />Lekki,
                      <br />Lagos, Nigeria.
                    </p>
                      </div>

                    </div> */}

                    <div className="GridLex-col-12_sm-12_xs-12">
                      <div className="contact-item">
                        <img src="/images/car-1.jpg" />

                        <p>
                          We are offering you the ultimate experience of driving in luxury, elegance &amp; class.
                          Whether you need to purchase a high-end car or you just need to rent one for a period, may you
                          have a luxury car in your garage, you can put it on a fleet, and we will pay you every time a
                          rental request is made for it
                        </p>

                        <p>We guarantee efficient products, and the highest level of safety on our services.</p>

                        <p>
                          <b>CAR RENTAL</b> - Need to show up at a meeting in classy? Ride to your wedding in style and
                          elegance? or you just want to have a feel of driving a luxury car? No matter the occasion, we
                          have the luxury car that fits. Classy Drive Nigeria car rental services got you sorted. Here
                          we believe that renting a luxury car should be quick, simple and exciting.
                        </p>

                        <img src="/images/car-2.jpg" />

                        <p>
                          When it comes to luxury road travel, we put you first. Our luxury car rental service offers a
                          great way to enjoy intra and inter city travel in luxury. Whether you choose to drive yourself
                          in one of our luxury cars or prefer to be chauffeured, Classy Drive Nigeria provides you with
                          matchless safety, luxury, style, and comfort. Our luxury car rental services are crucial to
                          executives and and loves of style, class and elegance.
                        </p>

                        <p>
                          Our products and services are designed to offer luxurious, safe, and a reliable transport
                          solution to executives and people in need of the comfort, safety and style that comes with
                          luxury and those who want to have a feel of luxurious travels.
                        </p>

                        <img src="/images/car-3.jpg" />

                        <p>
                          <b>CAR DEALERSHIP</b> – Here at Classy Drive Nigeria, we are on a mission to be the number one
                          destination for luxury and exotic automotive needs. It doesn’t matter what your need is,
                          whether SUV, Saloon or Sport cars, new or used, rest assured we will deliver it to you.
                        </p>

                        <img src="/images/car-4.jpg" />

                        <p>
                          <b>PREMIUM CAR FLEET</b> – We over you an opportunity to earn a passive income when you enroll
                          your luxury car in our rental program. Whether you use your exotic car or leave it parked in
                          your garage, remember your car depreciates with time so why not earn with anyway?
                        </p>
                        <p>
                          With our rental program, you earn an income every time someone registers to use your car.
                          Don’t worry about the safety of your car, our security architecture ensures that your car is
                          safe and only gets into the hands of qualified individuals.
                        </p>
                        <p>Incase of an accident, we have an insurance cover for your car(s).</p>
                      </div>
                    </div>

                    <div className="GridLex-col-12_sm-12_xs-12 mb-30">
                      <div id="single_office_map" style={{ height: '500px', width: '100%' }} className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
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
