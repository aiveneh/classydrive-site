import React from 'react';

import constants from '../constants';
import { routes } from '../routes';

export default function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-primary navbar-fixed-top navbar-sticky-function">
        <div id="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 clearfix">
                <div className="top-header-widget welcome">
                  <p>
                    Welcome Guest |<a href={routes.login.path}>Sign In</a>
                    or
                    <a href={routes.register.path}>Register</a>
                  </p>
                </div>
              </div>

              <div className="col-sm-6 clearfix hidden-xs">
                <div className="top-header-widget pull-right">
                  <a href={routes.serviceRequest.path}>
                    <i className="fa fa-comments mr-3"></i> Get quote
                  </a>
                </div>
                <div className="top-header-widget pull-right">
                  <i className="fa fa-phone"></i>
                  call us on:
                  <a href={`tel:${constants.phone}`}>{constants.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Home
              {/* <img src="/images/classydrivelogo.jpg" alt="classydrive Logo" style={{ height: '30px' }} /> */}
            </a>
          </div>

          <div id="navbar" className="collapse navbar-collapse navbar-arrow pull-left">
            <ul className="nav navbar-nav" id="responsive-menu">
              <li>
                <a href={routes.cars.path}>Cars</a>
              </li>

              <li>
                <a href="#">About Us</a>
                <ul>
                  <li>
                    <a href={routes.faq.path}>FAQ</a>
                  </li>
                  <li>
                    <a href={routes.contact.path}>Contact</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="slicknav-mobile"></div>
      </nav>
    </header>
  );
}
