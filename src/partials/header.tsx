import React from 'react';

import constants from '../constants';
import { routes } from '../routes';
import { isLoggedIn } from '../utils';

export default function Header() {
  return (
    <header id="header">
      <nav className="navbar navbar-primary">
        <div id="top-header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 clearfix">
                <div className="top-header-widget welcome">
                  <p>
                    {isLoggedIn() ? (
                      'Welcome Guest'
                    ) : (
                      <span>
                        <a href={routes.login.path}>Sign In</a> or <a href={routes.register.path}>Create Account</a>
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <div className="col-sm-6 clearfix hidden-xs">
                <div className="top-header-widget pull-right">
                  <a href={`https://wa.me/${constants.phone}`}>
                    <i className="fa fa-comments mr-3"></i> Contact us
                  </a>
                </div>
                <div className="top-header-widget pull-right">
                  <i className="fa fa-phone"></i>
                  message us on:
                  <a href={`https://wa.me/${constants.phone}`}>{constants.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img src="/images/logo.jpeg" alt="classydrive Logo" className="logo" />
            </a>
          </div>

          <div id="navbar" className="collapse navbar-collapse navbar-arrow pull-left">
            <ul className="nav navbar-nav" id="responsive-menu">
              <li>
                <a href={routes.cars.path}>Rentals</a>
              </li>
              <li>
                <a href="http://partner.classydrivenigeria.com">Partners</a>
              </li>

              <li>
                <a href={routes.about.path}>About Us</a>
              </li>
              <li>
                <a href={routes.faq.path}>FAQ</a>
              </li>
              <li>
                <a href={routes.contact.path}>Contact</a>
              </li>
              <li>
                <a href={routes.register.path}>Sign Up</a>
              </li>
              <li>
                <a href={routes.login.path}>Login</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="slicknav-mobile"></div>
      </nav>
    </header>
  );
}
