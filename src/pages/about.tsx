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
                        <p>
                          <b>CLASSY DRIVE NIGERIA LIMITED</b> is a foremost global choice in automobile rentals and
                          sales, fleet management and consulting, and private jet hiring services. Driven by excellence
                          and the passion to serve with a wealth of resources in man and material at our disposal, we
                          have earned our rightful place among our global community of clients. We continually push the
                          boundaries of innovations to deliver seamless, first-class services to business and individual
                          needs through our portfolio of services. People and the environment are at the center of our
                          values, and we daily commit to their overall good through the businesses we serve and the
                          services we render.
                        </p>
                        <img src="/images/car-1.jpg" />

                        <h4>WHO WE ARE ?</h4>
                        <p>
                          We are <b>CLASSY DRIVE NIGERIA LIMITED</b>. We are excellence. Rising to meet the daily
                          challenges of people and businesses in their vehicular needs, our story begins with what is
                          truly exploiting innovative ideas in providing structured and top-class solutions to making
                          rental services in automobiles and private jet hiring, fleet management, and consulting, a
                          truly satisfying and safe experience for all. With our team of experts drawn from across the
                          world, we are truly a global community of people committed to a common goal; service for
                          humanity’s overall good.
                        </p>

                        <h4>WHAT WE DO</h4>
                        <p>
                          <b>CLASSY DRIVE NIGERIA LIMITED</b> is an integrated service and consultancy company with a
                          portfolio of professional services, ranging from top-end car rental and private jet hiring to
                          fleet management and consultancy. We continually deploy our wealth of expert resources to
                          deliver premium services for our clients’ long-term satisfaction and success.
                        </p>

                        <img src="/images/car-2.jpg" />

                        <h4>OUR VALUES</h4>
                        <p>
                          At <b>CLASSY DRIVE NIGERIA LIMITED</b>, our values are at the centre of all our operations,
                          and our General Business Principles, Code of Ethics, and Code of Conduct help every one of us
                          to act in line with these values.
                        </p>

                        <h4>OUR PORTFOLIO OF SERVICES</h4>
                        <p>
                          Our portfolio of business operations is carefully structured and tailored to meet the varied
                          needs of our numerous clients, in ways that are safe, first-rate, satisfactory, and in line
                          with best global practices. This array of services includes;
                          <ol>
                            <li>- Car Rentals</li>
                            <li>- Car Sales</li>
                            <li>- Short Car Sales Packages</li>
                            <li>- Fleet Management and Consulting</li>
                            <li>- Private Jet Hiring</li>
                          </ol>
                        </p>

                        <h4>WHY CHOOSE US?</h4>
                        <p>
                          We are the industry first choice in rental services, automobile sales, fleet management and
                          consulting in Nigeria and the West African sub-region. We are proven industry experts. Our
                          empathy in delivering our clients’ needs through expert-level services stands us out. We are
                          guided in all our operations by ethical codes that are in line with best global practices. At
                          the heart of our services are the deployment of first-class innovative ideas and up-to-date
                          technological tools to better serve our global community of clients.
                        </p>
                        <img src="/images/car-3.jpg" />
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
