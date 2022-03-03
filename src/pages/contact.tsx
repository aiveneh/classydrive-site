import React from 'react';

export default function Contact() {
  return (
    <div className="main-wrapper scrollspy-container">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 hidden-xs">
              <h2 className="page-title">Contact</h2>
            </div>

            <div className="col-xs-12 col-sm-6">
              <ol className="breadcrumb">
                <li className="active text">You Are Here:</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="active">Contact</li>
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

                    <div className="GridLex-col-4_sm-4_xs-12">
                      <div className="contact-item mb-30">
                        <h5>Contact</h5>
                        <p>
                          <a href="tel:08066088506‬">08066088506‬</a>
                          <br />
                          <a href="mailto:support@classydrive.com">support@classydrive.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="GridLex-col-3_sm-4_xs-12">
                      <div className="contact-item mb-30">
                        <h5>Socials</h5>
                        <p>
                          <a href="https://facebook.com/classydriveservices">Facebook</a>
                          <br />
                          <a href="https://twitter.com/classydrive">Twitter</a>
                          <br />
                          <a href="https://instagram.com/classydrive">Instagram</a>
                        </p>
                      </div>
                    </div>

                    <div className="GridLex-col-12_sm-12_xs-12 mb-30">
                      <div id="single_office_map" style={{ height: '500px', width: '100%' }} className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="GridLex-col-4_sm-4_xs-12">
                <div className="contact-form-wrapper-boxed">
                  <div className="section-title text-left mb-20">
                    <h4>Contact us for help</h4>
                    <p>Expression acceptance imprudence particular had eat unsatiable.</p>
                  </div>

                  <form>
                    <div className="messages"></div>
                    <div className="controls">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="form_name">
                              Your Name <span className="font10 text-danger">(required)</span>
                            </label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Please enter your full name *"
                              required
                              data-error="Firstname is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="form_email">
                              Your Email <span className="font10 text-danger">(required)</span>
                            </label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Please enter your email *"
                              required
                              data-error="Valid email is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12">
                          <div className="form-group">
                            <label>Subject</label>
                            <input
                              id="form_lastname"
                              type="text"
                              name="title"
                              className="form-control"
                              placeholder="Please enter your Subject *"
                              required
                              data-error="Subject is required."
                            />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12">
                          <div className="form-group">
                            <label htmlFor="form_message">
                              Message <span className="font10 text-danger">(required)</span>
                            </label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Message for me *"
                              rows={8}
                              required
                              data-error="Please,leave us a message."
                            ></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-12">
                          <input type="submit" className="btn btn-primary btn-send mt-10" value="Send message" />
                        </div>

                        <div className="col-md-12">
                          <p className="text-muted font12 mt-20" style={{ lineHeight: '1.2' }}>
                            <span className="font12 text-danger">*</span> These fields are required.
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
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
