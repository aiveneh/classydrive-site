import React from 'react';
import { routes } from '../routes';
import constants from '../constants';

export default function Footer() {
  return (
    <div className="footer-wrapper scrollspy-footer">
      <footer className="main-footer">
        <div className="container footer-newsletter">
          <div className="inner">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
                <div className="row gap-15">
                  <div className="col-xs-12 col-sm-4 col-md-3">
                    <h4>classydrive Newsletter</h4>
                  </div>

                  <div className="col-xss-12 col-xs-7 col-sm-5 col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Enter your email subscribe" />
                    </div>
                  </div>

                  <div className="col-xss-12 col-xs-5 col-sm-3 col-md-3">
                    <input type="submit" className="btn btn-submit btn-primary btn-block" value="Subscribe" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 mb-30-sm">
              <div className="footer-logo">
                <a href={routes.home.path}>
                  <strong className="text-primary">Classy</strong>Drive
                </a>
              </div>

              <p className="about-us-footer">Ultimate experience of driving in luxury, elegance &amp; class.</p>

              <div className="social-footer clearfix">
                <a href={constants.facebook}>
                  <i className="fa fa-facebook-official"></i>
                </a>

                <a href={constants.twitter}>
                  <i className="fa fa-twitter"></i>
                </a>

                <a href={constants.instagram}>
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 mb-30-sm">
              <h4 className="footer-title">Quick Menu</h4>

              <ul className="menu-footer">
                {/* < li > <a href="#">About Us</a></li>
                <li><a href="#">Partners</a></li>  */}
                {/* <li><a href="/faq">Terms</a></li>
                <li><a href="/faq">Privacy Policy</a></li> */}
                <li>
                  <a href={routes.faq.path}>FAQ</a>
                </li>
                <li>
                  <a href={routes.about.path}>About</a>
                </li>
                <li>
                  <a href={routes.contact.path}>Contact</a>
                </li>
              </ul>
            </div>

            <div className="sm-clear"></div>

            <div className="col-xs-12 col-sm-12 col-md-3  mb-30-sm">
              <h4 className="footer-title">Office Hours</h4>
              <ul className="office-hour">
                <li>
                  Monday - Saturday
                  <span>8:00AM - 7:00PM</span>
                </li>
                <li className="text-primary">
                  Sunday
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-md-3">
              <h4 className="footer-title">Contact</h4>
              <p className="footer-address">
                {' '}
                <br />
                <span className="block text-white font20 font700 line20 mt-10 mb-5">
                  <a href={`tel:+${constants.phone}`}>{constants.phone}</a>
                </span>
                <a href={`mailto:${constants.email}`}>{constants.email}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <footer className="secondary-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="copy-right">
                &#169; Copyright 2020 <a href={routes.home.path}>classydrive</a>
              </p>
            </div>

            <div className="col-sm-6">
              <ul className="secondary-footer-menu clearfix">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href={routes.login.path}>Sign-in</a>
                </li>
                <li>
                  <a href={routes.register.path}>Sign-up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
